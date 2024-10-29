// server/api/services-reservation.post.js
import nodemailer from 'nodemailer'
import { join } from 'path'

console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASS)

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Validation du format email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
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

// Validation du phone
const isValidPhone = (phone) => {
  const cleanPhone = phone.replace(/\D/g, '')
  return cleanPhone.length >= 10 && cleanPhone.length <= 15
}
// Formatage du prix
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}

// Fonction auxiliaire pour capitaliser la première lettre
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const createHtmlContent = (data) => {
  const {
    guests,
    date,
    email,
    phone,
    message,
    services,
    totalEstimate,
    eventType
  } = data

  const selectedServices = Object.entries(services)
    .filter(([_, value]) => value)
    .map(([key, _]) => capitalizeFirstLetter(key))

  return `
    <meta name="color-scheme" content="light dark">
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #f99bd4; text-align: center; margin-bottom: 30px;">Nouvelle Réservation ${eventType}</h2>
      
      <div style="border-radius: 8px; margin: 20px 0; border: 1px solid #f99bd4; background-color: rgba(249, 155, 212, 0.1); padding: 20px;">
        <h3 style="color: #f99bd4; margin-top: 0;">Détails de la réservation</h3>
        <p><strong style="color: #f99bd4;">Type d'événement :</strong> ${eventType}</p>
        <p><strong style="color: #f99bd4;">Date :</strong> ${formatDate(date)}</p>
        <p><strong style="color: #f99bd4;">Nombre d'invités :</strong> ${guests}</p>
        
        ${selectedServices.length > 0 ? `
          <h4 style="color: #f99bd4; margin-top: 20px;">Services sélectionnés :</h4>
          <ul>
            ${selectedServices.map(service => `
              <li style="padding: 8px 0;">${service}</li>
            `).join('')}
          </ul>
        ` : '<p style="font-style: italic;">Aucun service sélectionné</p>'}
        
        <p style="font-size: 1.2em; color: #f99bd4; font-weight: bold; margin-top: 20px; text-align: right;">
          Total estimé : ${formatPrice(totalEstimate)}
        </p>
      </div>

      <div style="border-radius: 8px; border: 1px solid #f99bd4; background-color: rgba(249, 155, 212, 0.1); padding: 20px;">
        <h3 style="color: #f99bd4; margin-top: 0;">Informations de contact</h3>
        <p><strong style="color: #f99bd4;">Email :</strong> ${email}</p>
        <p><strong style="color: #f99bd4;">Téléphone :</strong> ${phone}</p>
        ${message ? `<p><strong style="color: #f99bd4;">Message :</strong> ${message}</p>` 
        : '<p style="font-style: italic;">Aucun message</p>'}
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <p style="font-size: 14px; margin-top: 10px;">
          © ${new Date().getFullYear()} 4You Event - Tous droits réservés
        </p>
      </div>
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://4you-event.fr/img/logo.png" alt="4You Event" style="max-width: 150px;">
      </div>
    </div>
  `
}

const confirmationHeader = `
  <div style="padding: 20px 0;">
    <p style="font-size: 16px; line-height: 1.6; margin: 0;">Bonjour,</p>
    <p style="font-size: 16px; line-height: 1.6;">
      Nous avons bien reçu votre demande de réservation. Notre équipe la traitera dans les plus brefs délais.
    </p>
  </div>
`

const confirmationFooter = `
  <div style="padding: 20px 0;">
    <p style="font-size: 16px; line-height: 1.6;">
      Nous vous recontacterons prochainement pour confirmer votre réservation.
    </p>
    <p style="font-size: 16px; line-height: 1.6;">
      Cordialement,<br>
      <span style="color: #f99bd4; font-weight: bold;">L'équipe 4You Event</span>
    </p>
  </div>
`

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { guests, date, email, phone, message, services, totalEstimate, eventType } = body

    // Validations
   // Modification des validations
if (!email || !guests || !date || !services || !phone || !eventType) {
  throw createError({
    statusCode: 400,
    message: 'Données de réservation incomplètes'
  })
}

if (!isValidEmail(email)) {
  throw createError({
    statusCode: 400,
    message: 'Format d\'email invalide'
  })
}

if (!isValidPhone(phone)) {
  throw createError({
    statusCode: 400,
    message: 'Format de téléphone invalide'
  })
}

if (!isValidDate(date)) {
  throw createError({
    statusCode: 400,
    message: 'La date sélectionnée doit être ultérieure à aujourd\'hui'
  })
}

if (guests < 1) {
  throw createError({
    statusCode: 400,
    message: 'Le nombre d\'invités doit être supérieur à 0'
  })
}

    const htmlContent = createHtmlContent(body)
    const textContent = `
      Récapitulatif de la réservation :
      
      Type d'événement : ${eventType}
      Date : ${formatDate(date)}
      Nombre d'invités : ${guests}
      Services sélectionnés : ${Object.entries(services)
        .filter(([_, value]) => value)
        .map(([key, _]) => key)
        .join(', ') || 'Aucun'}
      Total estimé : ${formatPrice(totalEstimate)}
      
      Contact :
      Email : ${email}
      Téléphone : ${phone}
      Message : ${message || 'Aucun message'}
    `

    // Email à l'administrateur
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contact@4you-event.fr",
      cc: process.env.EMAIL_CC,
      subject: `Nouvelle réservation ${eventType}`,
      text: textContent,
      html: htmlContent
    })

    // Email de confirmation au client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Confirmation de votre demande de réservation`,
      text: textContent,
      html: `
        <div>
          ${confirmationHeader}
          ${createHtmlContent(body)}
          ${confirmationFooter}
        </div>
      `
    })

    return { 
      success: true,
      message: 'Votre réservation a été envoyée avec succès. Vous recevrez bientôt un email de confirmation.' 
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la réservation:', error)
    
    if (error.statusCode === 400) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      message: 'Une erreur est survenue lors de l\'envoi de votre réservation. Veuillez réessayer.'
    })
  }
})