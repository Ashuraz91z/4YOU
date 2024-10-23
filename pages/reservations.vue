<template>
  <div class="container px-4 py-8 mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-center">Réservation de votre événement</h2>

    <!-- Récapitulatif du devis -->
    <div class="mb-8 bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-2xl font-semibold mb-4">Récapitulatif</h3>
      <div class="mb-4">
        <strong>Formule choisie :</strong> {{ selections.formula === 1 ? 'Formule 1' : 'Formule 2' }}
      </div>
      <div v-if="selections.theme" class="mb-4">
        <strong>Thème choisi :</strong> {{ selections.theme.name }} ({{ selections.theme.price }}€)
      </div>
      <div v-if="selections.options.length" class="mb-4">
        <strong>Options sélectionnées :</strong>
        <ul class="list-disc list-inside">
          <li v-for="option in selections.options" :key="option.name">{{ option.name }} (+{{ option.price }}€)</li>
        </ul>
      </div>
      <div class="mt-4">
        <strong>Total :</strong> {{ selections.price }}€
      </div>
    </div>

    <!-- Formulaire de réservation -->
    <form @submit.prevent="submitReservation" class="bg-gray-100 p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="numberOfPeople" class="block text-gray-700 font-semibold mb-2">Nombre de personnes</label>
        <input
          type="number"
          id="numberOfPeople"
          v-model.number="reservation.numberOfPeople"
          min="1"
          required
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div class="mb-4">
        <label for="date" class="block text-gray-700 font-semibold mb-2">Date de l'événement</label>
        <input
          type="date"
          id="date"
          v-model="reservation.date"
          required
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          id="message"
          v-model="reservation.message"
          rows="4"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          placeholder="Ajoutez un message ou des instructions spéciales..."
        ></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg">
          Envoyer la réservation
        </button>
      </div>
    </form>

    <!-- Confirmation après envoi -->
    <div v-if="confirmation" class="mt-8 bg-green-100 p-6 rounded-lg shadow-md text-center">
      <h3 class="text-2xl font-semibold mb-4">Réservation envoyée avec succès !</h3>
      <p>Nous avons bien reçu votre demande. Nous vous contacterons sous peu.</p>
    </div>

    <!-- Gestion des erreurs -->
    <div v-if="error" class="mt-8 bg-red-100 p-6 rounded-lg shadow-md text-center">
      <h3 class="text-2xl font-semibold mb-4">Erreur</h3>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
  name: 'Reservation',
  setup() {
    const store = useStore()
    const selections = computed(() => store.getters.getSelections)
    const reservation = ref({
      numberOfPeople: 1,
      date: null,
      message: ''
    })
    const confirmation = ref(false)
    const error = ref(null)

    const submitReservation = async () => {
      // Enregistrer les détails de la réservation dans le store
      store.dispatch('saveReservationDetails', reservation.value)

      // Préparer les données à envoyer
      const payload = {
        selections: selections.value,
        reservation: reservation.value
      }

      try {
        const response = await axios.post('/api/reservation', payload)
        if (response.data.success) {
          confirmation.value = true
          error.value = null
          // Optionnel : Réinitialiser le store après la réservation
          // store.dispatch('resetAll')
        } else {
          error.value = 'Une erreur est survenue. Veuillez réessayer.'
        }
      } catch (err) {
        console.error(err)
        error.value = 'Une erreur est survenue. Veuillez réessayer.'
      }
    }

    return {
      selections,
      reservation,
      submitReservation,
      confirmation,
      error
    }
  }
}
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
