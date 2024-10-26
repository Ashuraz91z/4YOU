import { ref } from 'vue'
import { useAsyncData } from '#app'

// Fonction principale
export const useReservationForm = (form) => {
  const isSubmitting = ref(false)
  const submitStatus = ref(null)

  const submitForm = async () => {
    isSubmitting.value = true
    submitStatus.value = null
    
    try {
      const { data, error } = await useAsyncData('submitReservation', () =>
        $fetch('/api/reservation', {
          method: 'POST',
          body: form
        })
      )

      if (error.value) {
        throw error.value
      }

      submitStatus.value = { 
        type: 'success', 
        message: 'Votre réservation a été envoyée avec succès!' 
      }

      // Réinitialiser le formulaire
      form.guests = ''
      form.date = null
      form.email = ''
      form.message = ''
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la réservation:', error)
      submitStatus.value = { 
        type: 'error', 
        message: 'Une erreur est survenue lors de l\'envoi de votre réservation. Veuillez réessayer.' 
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

// Export par défaut nécessaire pour Nuxt
export default useReservationForm