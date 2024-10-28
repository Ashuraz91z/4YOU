import { ref } from 'vue'
import { useFetch } from '#app'

export const useServicesReservation = (form, selectedServices, totalEstimate) => {
  const isSubmitting = ref(false)
  const submitStatus = ref(null)

  const prepareFormData = () => {
    return {
      guests: form.value.guests,
      date: form.value.date,
      email: form.value.email,
      phone: form.value.phone,
      message: form.value.message,
      services: JSON.parse(JSON.stringify(selectedServices.value)),
      totalEstimate: totalEstimate.value,
      eventType: form.value.eventType
    }
  }

  const submitForm = async () => {
    isSubmitting.value = true
    submitStatus.value = null

    try {
      const formData = prepareFormData()
      const { data, error } = await useFetch('/api/services-reservation', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json'
        },
        retry: 3,
        retryDelay: 1000,
        timeout: 15000,
        onRequestError: ({ request, error, response }) => {
          console.error('Erreur de requête:', error)
          throw new Error('Erreur de connexion')
        }
      })

      if (error.value) {
        throw error.value
      }

      submitStatus.value = {
        type: 'success',
        message: 'Votre réservation a été envoyée avec succès!'
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la réservation:', error)
      
      const errorMessage = error.statusCode === 504
        ? 'Le serveur met trop de temps à répondre. Veuillez réessayer.'
        : error.message || 'Une erreur est survenue lors de l\'envoi de votre réservation. Veuillez réessayer.'
      
      submitStatus.value = {
        type: 'error',
        message: errorMessage
      }
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    isSubmitting,
    submitStatus,
    submitForm
  }
}

export default useServicesReservation