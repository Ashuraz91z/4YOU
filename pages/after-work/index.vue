<template>
  <div class="bg-gradient-to-br from-indigo-900 to-purple-800 min-h-screen text-white">
    <Header textColor="text-white" />
    <div class="container mx-auto py-24 px-4">
      <h1 class="text-5xl font-bold mb-12 text-center font-lust-didone text-amber-400">Afterwork Festif</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Accueil et Installation</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">👋</span> Accueil personnalisé avec bracelets ou badges
            </li>
            <li class="flex items-center">
              <span class="mr-2">📸</span> Photobooth avec accessoires amusants
            </li>
            <li class="flex items-center">
              <span class="mr-2">🎵</span> Musique lounge ou deep house
            </li>
            <li class="flex items-center">
              <span class="mr-2">✨</span> Décoration élégante avec guirlandes et bougies
            </li>
          </ul>
          <div class="mt-6 flex items-center justify-between">
            <span class="text-amber-300 h-10 flex items-center">{{ prices.accueil }} €</span>
            <label for="accueil" class="flex items-center cursor-pointer">
              <input type="checkbox" id="accueil" v-model="selectedServices.accueil" class="mr-2 hidden">
              <span 
                class="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out inline-block w-40 text-center"
                :class="selectedServices.accueil ? 'bg-amber-400 text-indigo-900 font-bold' : 'bg-transparent border-2 border-amber-300 text-amber-300'"
              >
                {{ selectedServices.accueil ? 'Sélectionné ✓' : 'Sélectionner' }}
              </span>
            </label>
          </div>
        </section>

        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Apéritif</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">🍸</span> Bar à cocktails par Benteille
            </li>
            <li class="flex items-center">
              <span class="mr-2">🍢</span> Buffet tapas et finger food
            </li>
          </ul>
          <p class="mt-4 text-sm italic">Le prix peut varier en fonction du nombre d'invités ou du lieu</p>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-amber-300 h-10 flex items-center">À partir de {{ prices.aperitif }} €</span>
            <label for="aperitif" class="flex items-center cursor-pointer">
              <input type="checkbox" id="aperitif" v-model="selectedServices.aperitif" class="mr-2 hidden">
              <span 
                class="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out inline-block w-40 text-center"
                :class="selectedServices.aperitif ? 'bg-amber-400 text-indigo-900 font-bold' : 'bg-transparent border-2 border-amber-300 text-amber-300'"
              >
                {{ selectedServices.aperitif ? 'Sélectionné ✓' : 'Sélectionner' }}
              </span>
            </label>
          </div>
        </section>

        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Activités et Animations</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">🎹</span> Pianiste
            </li>
          </ul>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-amber-300 h-10 flex items-center">{{ prices.activites }} €</span>
            <label for="activites" class="flex items-center cursor-pointer">
              <input type="checkbox" id="activites" v-model="selectedServices.activites" class="mr-2 hidden">
              <span 
                class="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out inline-block w-40 text-center"
                :class="selectedServices.activites ? 'bg-amber-400 text-indigo-900 font-bold' : 'bg-transparent border-2 border-amber-300 text-amber-300'"
              >
                {{ selectedServices.activites ? 'Sélectionné ✓' : 'Sélectionner' }}
              </span>
            </label>
          </div>
        </section>

        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Bar à Desserts</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">🍰</span> Bar à desserts et boissons chaudes
            </li>
          </ul>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-amber-300 h-10 flex items-center">{{ prices.desserts }} €</span>
            <label for="desserts" class="flex items-center cursor-pointer">
              <input type="checkbox" id="desserts" v-model="selectedServices.desserts" class="mr-2 hidden">
              <span 
                class="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out inline-block w-40 text-center"
                :class="selectedServices.desserts ? 'bg-amber-400 text-indigo-900 font-bold' : 'bg-transparent border-2 border-amber-300 text-amber-300'"
              >
                {{ selectedServices.desserts ? 'Sélectionné ✓' : 'Sélectionner' }}
              </span>
            </label>
          </div>
        </section>
      </div>

      <!-- Formulaire de réservation -->
      <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8">
        <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Devis Estimatif</h2>
        <ul class="space-y-4">
          <li v-if="selectedServices.accueil" class="flex items-center justify-between">
            <span>Accueil VIP des Invités</span>
            <span>{{ prices.accueil }} €</span>
          </li>
          <li v-if="selectedServices.aperitif" class="flex items-center justify-between">
            <span>Apéritif & Cocktails</span>
            <span>{{ prices.aperitif }} €</span>
          </li>
          <li v-if="selectedServices.activites" class="flex items-center justify-between">
            <span>Activités & Animations</span>
            <span>{{ prices.activites }} €</span>
          </li>
          <li v-if="selectedServices.desserts" class="flex items-center justify-between">
            <span>Bar à Desserts</span>
            <span>{{ prices.desserts }} €</span>
          </li>
          <li v-if="selectedServices.cadeaux" class="flex items-center justify-between">
            <span>Distribution de Cadeaux Souvenirs</span>
            <span>{{ prices.cadeaux.max }} €</span>
          </li>
        </ul>
        <div class="mt-6 pt-4 border-t border-white/20">
          <p class="text-xl font-bold flex justify-between">
            <span>Total:</span>
            <span>{{ totalEstimate }} €</span>
          </p>
          <p class="text-sm italic mt-2">Ce devis est fourni à titre indicatif et peut varier en fonction du nombre d'invités et des détails spécifiques de votre événement.</p>
        </div>
        <button 
          type="button"
          @click="showReservationForm = true" 
          class="mt-4 px-4 py-2 bg-amber-400 text-indigo-900 font-bold rounded-full w-full hover:bg-amber-500 transition-colors"
          :disabled="!hasSelectedServices"
        >
          Demander un devis
        </button>
      </section>

      <div v-if="showReservationForm" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div class="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
          <h3 class="text-3xl font-bold mb-6 text-center text-purple-700">Réservation</h3>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">Nombre d'invités</label>
              <input type="number" id="guests" v-model="reservationForm.guests" required class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-black">
            </div>
            <div>
              <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Date de l'événement</label>
              <VueDatePicker
                v-model="reservationForm.date"
                :locale="locale"
                :format="dateFormat"
                :enable-time-picker="false"
                :min-date="new Date()"
                placeholder="Sélectionnez une date"
                input-class-name="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-black"
                :hide-input-icon="true"
                required
                class="custom-datepicker"
              >
                <template #day-overlay="{ day }">
                  <div v-if="isWeekend(day.date)" class="weekend-indicator"></div>
                </template>
              </VueDatePicker>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Votre email</label>
              <input type="email" id="email" v-model="reservationForm.email" required class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-black">
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Votre numéro de téléphone</label>
              <input type="tel" id="phone" v-model="reservationForm.phone" required class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-black">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
              <textarea id="message" v-model="reservationForm.message" rows="3" class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-black"></textarea>
            </div>
            <div class="flex justify-end space-x-4">
              <button 
                type="button" 
                @click="showReservationForm = false" 
                class="px-6 py-2 rounded-lg text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 w-28"
                :disabled="isSubmitting"
              >
                Annuler
              </button>
              <button 
                type="submit" 
                class="px-6 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-28"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">{{ sendingText }}</span>
                <span v-else>Réserver</span>
              </button>
            </div>
          </form>
          <div v-if="submitStatus" 
               :class="`mt-4 p-4 rounded-lg text-center ${
                 submitStatus.type === 'success' 
                   ? 'bg-green-100 text-green-700 border border-green-400 ' 
                   : 'bg-red-100 text-red-700 border border-red-400'
               }`"
          >
            {{ submitStatus.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useServicesReservation } from '@/composables/useServicesReservation'

const selectedServices = ref({
  accueil: false,
  aperitif: false,
  activites: false,
  desserts: false,
  cadeaux: false
});

const prices = ref({
  accueil: 500,
  aperitif: 1000,
  activites: 450,
  desserts: 400,
  cadeaux: {
    min: 200,
    max: 300
  }
});

const showReservationForm = ref(false);

const reservationForm = ref({
  guests: null,
  date: null,
  email: '',
  phone: '',
  message: ''
});

const hasSelectedServices = computed(() => {
  return Object.values(selectedServices.value).some(value => value);
});

const totalEstimate = computed(() => {
  let total = 0;
  if (selectedServices.value.accueil) total += prices.value.accueil;
  if (selectedServices.value.aperitif) total += prices.value.aperitif;
  if (selectedServices.value.activites) total += prices.value.activites;
  if (selectedServices.value.desserts) total += prices.value.desserts;
  if (selectedServices.value.cadeaux) total += prices.value.cadeaux.max;
  return total;
});

const { isSubmitting, submitStatus, submitForm } = useServicesReservation(
  reservationForm,
  selectedServices,
  totalEstimate,
  'Afterwork'
);

const sendingText = ref('Envoi');
let dotCount = 0;

const updateSendingText = () => {
  dotCount = (dotCount + 1) % 4;
  sendingText.value = 'Envoi' + '.'.repeat(dotCount);
};

const handleSubmit = async () => {
  try {
    // Ajout de l'eventType directement ici lors de l'envoi
    const formData = {
      ...reservationForm.value,
      services: JSON.parse(JSON.stringify(selectedServices.value)),
      totalEstimate: totalEstimate.value,
      eventType: 'Afterwork'
    };

    const intervalId = setInterval(updateSendingText, 500);

    await submitForm(formData);
    
    clearInterval(intervalId);

    if (submitStatus.value?.type === 'success') {
      setTimeout(() => {
        showReservationForm.value = false;
      }, 2000);
    }
  } catch (error) {
  console.error('Erreur lors de l\'envoi de la réservation:', error);

  submitStatus.value = {
    type: 'error',
    message: error.data?.message || error.message || 'Une erreur est survenue lors de l\'envoi de votre réservation. Veuillez réessayer.',
    };
  }
};

const locale = {
  locale: 'fr',
  format: 'dd/MM/yyyy',
  firstDay: 1,
  yearSuffix: '',
  weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
  monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
  today: "Aujourd'hui",
  clear: 'Effacer',
  close: 'Fermer'
};

const dateFormat = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

</script>


<style>
.custom-datepicker .dp__theme_light  {
  --dp-background-color: #ffffff;
  --dp-text-color: #6b21a8;
  --dp-hover-color: #d8b4fe;
  --dp-hover-text-color: #4c1d95;
  --dp-hover-icon-color: #4c1d95;
  --dp-primary-color: #8b5cf6;
  --dp-primary-text-color: #ffffff;
  --dp-secondary-color: #e9d5ff;
  --dp-border-color: #d8b4fe;
  --dp-menu-border-color: #d8b4fe;
  --dp-border-color-hover: #a855f7;
  --dp-disabled-color: #f3f4f6;
  --dp-scroll-bar-background: #f3f4f6;
  --dp-scroll-bar-color: #d1d5db;
  --dp-success-color: #10b981;
  --dp-success-color-disabled: #88e2c7;
  --dp-icon-color: #6b21a8;
  --dp-danger-color: #ef4444;
  --dp-highlight-color: #8b5cf6;
}

.custom-datepicker .dp__theme_light .dp__calendar_header {
  font-weight: bold;
  color: #4c1d95;
}

.custom-datepicker .dp__theme_light .dp__today {
  border: 2px solid #8b5cf6;
}

.custom-datepicker .dp__theme_light .dp__active_date {
  background-color: #8b5cf6;
  color: #ffffff;
}

.custom-datepicker .weekend-indicator {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 8px 8px 0;
  border-color: transparent #f59e0b transparent transparent;
}
</style>
