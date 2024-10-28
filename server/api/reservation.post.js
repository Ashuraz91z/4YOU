import nodemailer from 'nodemailer'

const config = useRuntimeConfig()

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: config.emailUser,
    pass: config.emailPass
  }
})

// Validation du format email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validation du format téléphone
const isValidPhone = (phone) => {
  const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  return phoneRegex.test(phone)
}

// Validation de la date
const isValidDate = (date) => {
  const selectedDate = new Date(date)
  const today = new Date()
  return selectedDate > today
}

// Formatage de la date pour l'affichage
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Formatage du prix
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

// Création du contenu HTML de l'email
const createHtmlContent = (data) => {
  const {
    guests,
    date,
    email,
    phone,
    message,
    selectedFormula,
    selectedTheme,
    selectedOptions,
    totalPrice
  } = data

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #6B21A8; text-align: center;">Nouvelle Réservation d'Événement</h2>
      
      <div style="background-color: #F3E8FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #6B21A8;">Détails de la réservation</h3>
        <p><strong>Formule :</strong> ${selectedFormula || 'Non spécifiée'}</p>
        <p><strong>Thème :</strong> ${selectedTheme && selectedTheme.name ? selectedTheme.name : 'Aucun'}</p>
        <p><strong>Date :</strong> ${formatDate(date)}</p>
        <p><strong>Nombre d'invités :</strong> ${guests}</p>
        
        ${selectedOptions && selectedOptions.length > 0 ? `
          <h4 style="color: #6B21A8;">Options sélectionnées :</h4>
          <ul>
            ${selectedOptions.map(option => `
              <li>${option.name}${option.price ? ` (${formatPrice(option.price)})` : ''}</li>
            `).join('')}
          </ul>
        ` : '<p>Aucune option sélectionnée</p>'}
        
        <p style="font-size: 1.2em; color: #6B21A8; font-weight: bold;">
          Total : ${totalPrice ? formatPrice(totalPrice) : formatPrice(0)}
        </p>
      </div>

      <div style="background-color: #F9FAFB; padding: 20px; border-radius: 8px;">
        <h3 style="color: #6B21A8;">Informations de contact</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        ${message ? `<p><strong>Message :</strong> ${message}</p>` : '<p><strong>Message :</strong> Aucun message</p>'}
      </div>
    </div>
  `
}

export default defineEventHandler(async (event) => {
  try {
    // Récupération et validation des données
    const body = await readBody(event)
    const { guests, date, email, phone, message, selectedFormula, selectedTheme, selectedOptions, totalPrice } = body

    // Validations
    if (!email || !guests || !date || !selectedFormula || !phone) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Données de réservation incomplètes'
      })
    }

    if (!isValidEmail(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Format d\'email invalide'
      })
    }

    if (!isValidPhone(phone)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Format de téléphone invalide'
      })
    }

    if (!isValidDate(date)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'La date sélectionnée doit être ultérieure à aujourd\'hui'
      })
    }

    if (guests < 1) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Le nombre d\'invités doit être supérieur à 0'
      })
    }

    // Création du contenu de l'email
    const htmlContent = createHtmlContent(body)
    const textContent = `
    Récapitulatif de la réservation :
        
    Formule : ${selectedFormula || 'Non spécifiée'}
    Thème : ${selectedTheme && selectedTheme.name ? selectedTheme.name : 'Aucun'}
    Date : ${formatDate(date)}
    Nombre d\'invités : ${guests}
    Options sélectionnées : ${selectedOptions && selectedOptions.length > 0 ? selectedOptions.map(option => option.name).join(', ') : 'Aucune'}
    Total : ${totalPrice ? formatPrice(totalPrice) : formatPrice(0)}
        
    Contact :
    Email : ${email}
    Téléphone : ${phone}
    Message : ${message || 'Aucun message'}
  `
    // Envoi de l'email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contact@4you-event.fr",
      cc: process.env.EMAIL_CC, // Optionnel: copie à une autre adresse
      subject: `Nouvelle réservation - ${selectedFormula} ${selectedTheme ? `- ${selectedTheme.name}` : ''}`,
      text: textContent,
      html: htmlContent
    })

    // Email de confirmation au client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirmation de votre demande de réservation",
      text: `
        Bonjour,
        
        Nous avons bien reçu votre demande de réservation. Notre équipe la traitera dans les plus brefs délais.
        
        ${textContent}
        
        Nous vous recontacterons prochainement pour confirmer votre réservation.
        
        Cordialement,
        L'équipe 4You Event
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B21A8;">Confirmation de votre demande de réservation</h2>
          <p>Bonjour,</p>
          <p>Nous avons bien reçu votre demande de réservation. Notre équipe la traitera dans les plus brefs délais.</p>
          ${htmlContent}
          <p>Nous vous recontacterons prochainement pour confirmer votre réservation.</p>
          <p>Cordialement,<br>L'équipe 4You Event</p>
        </div>
      `
    })

    // Réponse réussie
    return { 
      success: true,
      message: 'Votre réservation a été envoyée avec succès. Vous recevrez bientôt un email de confirmation.' 
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la réservation:', error)
    
    // Gestion des différents types d'erreurs
    if (error.statusCode === 400) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Une erreur est survenue lors de l\'envoi de votre réservation. Veuillez réessayer.'
    })
  }
})