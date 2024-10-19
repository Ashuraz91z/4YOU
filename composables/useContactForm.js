// composables/useContactForm.js
import { ref } from 'vue'
import { useAsyncData } from '#app'

export const useContactForm = (form) => {
  const isSubmitting = ref(false)
  const submitStatus = ref(null)

  const submitForm = async () => {
    isSubmitting.value = true
    submitStatus.value = null

    try {
      const { data, error } = await useAsyncData('submitContact', () =>
        $fetch('/api/contact', {
          method: 'POST',
          body: form
        })
      )

      if (error.value) {
        throw error.value
      }

      submitStatus.value = { type: 'success', message: 'Votre message a été envoyé avec succès!' }
      // Réinitialiser le formulaire
      form.name = ''
      form.email = ''
      form.message = ''
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error)
      submitStatus.value = { type: 'error', message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.' }
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