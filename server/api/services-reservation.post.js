// server/api/services-reservation.post.js

import nodemailer from 'nodemailer';

const config = useRuntimeConfig();

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: config.emailUser,
    pass: config.emailPass
  }
});

// Validation du format email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validation de la date
const isValidDate = (date) => {
  const selectedDate = new Date(date);
  const today = new Date();
  return selectedDate > today;
};

// Formatage de la date pour l'affichage
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Validation du téléphone
const isValidPhone = (phone) => {
  const cleanPhone = phone.replace(/\D/g, '');
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

// Validation du nombre d'invités
const isValidGuests = (guests) => {
  return Number.isInteger(guests) && guests > 0 && guests <= 1000;
};

// Validation des services
const isValidServices = (services) => {
  if (!services || typeof services !== 'object') return false;
  return Object.values(services).some(value => value === true);
};

// Formatage du prix
const formatPrice = (price) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(price);
};

// Fonction auxiliaire pour capitaliser la première lettre
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Création du contenu HTML de l'email
const createHtmlContent = (data) => {
  const { guests, date, email, phone, message, services, totalEstimate, eventType } = data;

  const selectedServices = Object.entries(services)
    .filter(([_, value]) => value)
    .map(([key]) => capitalizeFirstLetter(key));

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #fbb6e0; text-align: center;">Nouvelle Réservation ${eventType}</h2>
      <div style="border: 1px solid #fbb6e0; background-color: rgba(251, 182, 224, 0.1); padding: 20px;">
        <h3 style="color: #fbb6e0;">Détails de la réservation</h3>
        <p><strong>Type d'événement :</strong> ${eventType}</p>
        <p><strong>Date :</strong> ${formatDate(date)}</p>
        <p><strong>Nombre d'invités :</strong> ${guests}</p>
        ${selectedServices.length ? `<ul>${selectedServices.map(service => `<li>${service}</li>`).join('')}</ul>` : '<p>Aucun service sélectionné</p>'}
        <p style="font-weight: bold; color: #fbb6e0;">Total estimé : ${formatPrice(totalEstimate)}</p>
      </div>
      <div style="border: 1px solid #fbb6e0; background-color: rgba(251, 182, 224, 0.1); padding: 20px; margin-top: 10px;">
        <h3 style="color: #fbb6e0;">Informations de contact</h3>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        ${message ? `<p><strong>Message :</strong> ${message}</p>` : '<p>Aucun message</p>'}
      </div>
    </div>
  `;
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { guests, date, email, phone, message, services, totalEstimate, eventType } = body;

    // Ajout d'un console.log pour vérifier la valeur de eventTyp

    // Validation des données avec des messages plus compréhensibles
    if (!email || !isValidEmail(email)) {
      console.log("Erreur de validation: Email non valide", email);
      throw createError({ 
        statusCode: 400, 
        message: 'Veuillez entrer une adresse email valide (exemple: nom@domaine.com)' 
      });
    }
    if (!phone || !isValidPhone(phone)) {
      console.log("Erreur de validation: Téléphone non valide", phone);
      throw createError({ 
        statusCode: 400, 
        message: 'Le numéro de téléphone doit contenir entre 10 et 15 chiffres' 
      });
    }
    if (!date || !isValidDate(date)) {
      console.log("Erreur de validation: Date non valide", date);
      throw createError({ 
        statusCode: 400, 
        message: 'La date sélectionnée doit être ultérieure à aujourd\'hui' 
      });
    }
    if (!guests || !isValidGuests(guests)) {
      console.log("Erreur de validation: Nombre d'invités non valide", guests);
      throw createError({ 
        statusCode: 400, 
        message: 'Le nombre d\'invités doit être compris entre 1 et 1000 personnes' 
      });
    }
    if (!services || !isValidServices(services)) {
      console.log("Erreur de validation: Services non valides", services);
      throw createError({ 
        statusCode: 400, 
        message: 'Veuillez sélectionner au moins un service pour votre événement' 
      });
    }
    if (!totalEstimate || typeof totalEstimate !== 'number' || totalEstimate <= 0) {
      console.log("Erreur de validation: Total estimé non valide", totalEstimate);
      throw createError({ 
        statusCode: 400, 
        message: 'Le montant total de la réservation n\'est pas valide' 
      });
    }

    const htmlContent = createHtmlContent(body);

    // Envoi de l'email à l'administrateur
    await transporter.sendMail({
      from: config.emailUser,
      to: "contact@4you-event.fr",
      subject: `Nouvelle réservation ${eventType}`,
      html: htmlContent
    });

    // Envoi de l'email de confirmation au client
    await transporter.sendMail({
      from: config.emailUser,
      to: email,
      subject: 'Confirmation de votre demande de réservation',
      html: htmlContent
    });

    return { success: true, message: 'Votre demande de réservation a bien été envoyée. Vous recevrez un email de confirmation dans quelques instants.' };

  } catch (error) {
    console.error('Erreur lors de l\'envoi de la réservation:', error);

    if (error.statusCode === 400) {
      throw createError({
        statusCode: 400,
        message: error.message
      });
    }

    throw createError({
      statusCode: 500,
      message: 'Désolé, nous rencontrons actuellement des difficultés techniques. Veuillez réessayer dans quelques instants ou nous contacter directement par téléphone.'
    });
  }
});