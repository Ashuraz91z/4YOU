// Dans server/api/contact.post.js
import nodemailer from 'nodemailer'

const config = useRuntimeConfig()

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: config.emailUser,
    pass: config.emailPass
  }
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, message } = body

  try {
    await transporter.sendMail({
      from: config.emailUser,
      to: config.emailUser,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    })

    return { message: 'Votre message a été envoyé avec succès.' }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Une erreur est survenue lors de l\'envoi du message.'
    })
  }
})