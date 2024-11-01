// composables/useServicesReservation.js

import { ref } from 'vue';
import { useFetch } from '#app'; // Vous pouvez supprimer cette importation

export const useServicesReservation = (form, selectedServices, totalEstimate, eventType) => {
  const isSubmitting = ref(false);
  const submitStatus = ref(null);

  const prepareFormData = () => {
    return {
      guests: form.value.guests,
      date: form.value.date,
      email: form.value.email,
      phone: form.value.phone,
      message: form.value.message,
      services: JSON.parse(JSON.stringify(selectedServices.value)),
      totalEstimate: totalEstimate.value,
      eventType,
    };
  };

  const submitForm = async () => {
    isSubmitting.value = true;
    submitStatus.value = null;

    try {
      const formData = prepareFormData();
      const response = await $fetch('/api/services-reservation', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        },
        retry: 3,
        retryDelay: 1000,
        timeout: 15000,
      });

      submitStatus.value = {
        type: 'success',
        message: response.message || 'Votre réservation a été envoyée avec succès!',
      };
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la réservation:', error);

      submitStatus.value = {
        type: 'error',
        message: error.data?.message || error.message || 'Une erreur est survenue lors de l\'envoi de votre réservation. Veuillez réessayer.',
      };
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    isSubmitting,
    submitStatus,
    submitForm,
  };
};

export default useServicesReservation;