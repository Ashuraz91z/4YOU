<template>
  <div class="bg-gradient-to-br from-indigo-800 to-purple-700 min-h-screen text-white">
    <Header textColor="text-white" />
    <div class="container mx-auto py-24 px-4">
      <h1 class="text-5xl font-bold mb-12 text-center font-dancing-script text-amber-200">Soirée 18+</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section v-for="(phase, index) in phases" :key="index" class="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-amber-300">
          <h2 class="text-2xl font-bold mb-6 font-pacifico text-amber-200">{{ phase.title }}</h2>
          <div class="mb-4">
            <h3 class="text-xl font-medium mb-2 text-amber-100">Services proposés :</h3>
            <ul class="space-y-3">
              <li v-for="(service, sIndex) in phase.services" :key="sIndex" class="flex items-center">
                <span class="mr-2">{{ getEmoji(service) }}</span> {{ service }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2 text-amber-100">Ambiance :</h3>
            <p>{{ phase.ambiance }}</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-amber-300 h-10 flex items-center">{{ phase.price }} €</span>
            <label :for="'phase-' + index" class="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                :id="'phase-' + index" 
                :checked="selectedPhases[index]"
                @change="() => updatePhaseSelection(index)"
                class="mr-2 hidden"
              >
              <span 
                class="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out inline-block w-40 text-center"
                :class="selectedPhases[index] ? 'bg-amber-400 text-indigo-900 font-bold' : 'bg-transparent border-2 border-amber-300 text-amber-300'"
              >
                {{ selectedPhases[index] ? 'Sélectionné ✓' : 'Sélectionner' }}
              </span>
            </label>
          </div>
        </section>

        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-amber-300">
          <h2 class="text-2xl font-bold mb-6 font-pacifico text-amber-200">Service de Sécurité</h2>
          <div class="mb-4">
            <h3 class="text-xl font-medium mb-2 text-amber-100">Services proposés :</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="mr-2">{{ getEmoji('Système de sécurité') }}</span> Système de sécurité (vigile)
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2 text-amber-100">Ambiance :</h3>
            <p>Sécurité discrète mais efficace pour assurer le bon déroulement de l'événement</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-amber-300 h-10 flex items-center">{{ securityPrice }} €</span>
            <label for="security" class="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                id="security" 
                v-model="selectedSecurity" 
                @change="updateTotalEstimate" 
                class="mr-2 hidden"
              >
              <span 
                class="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out inline-block w-40 text-center"
                :class="selectedSecurity ? 'bg-amber-400 text-indigo-900 font-bold' : 'bg-transparent border-2 border-amber-300 text-amber-300'"
              >
                {{ selectedSecurity ? 'Sélectionné ✓' : 'Sélectionner' }}
              </span>
            </label>
          </div>
        </section>
      </div>

      <section v-if="hasSelectedServices" class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8">
        <h2 class="text-2xl font-bold mb-6 font-pacifico text-amber-200">Votre Devis (Estimation)</h2>
        <ul class="space-y-3">
          <li v-for="(phase, index) in phases" :key="index" v-if="selectedPhases[index]" class="flex items-center justify-between">
            <span>{{ phase.title }}</span>
            <span>{{ phase.price }} €</span>
          </li>
          <li v-if="selectedSecurity" class="flex items-center justify-between">
            <span>Système de sécurité (vigile)</span>
            <span>{{ securityPrice }} €</span>
          </li>
        </ul>
        <div class="mt-6 pt-4 border-t border-white/20">
          <p class="text-xl font-bold flex justify-between">
            <span>Total estimé:</span>
            <span>{{ totalEstimate }} €</span>
          </p>
          <p class="text-sm italic mt-2">Cette estimation est fournie à titre indicatif et peut varier en fonction des détails spécifiques de votre événement.</p>
        </div>
      </section>

      <div class="text-center mt-16">
        <button 
          @click="showReservationForm = true" 
          class="bg-amber-400 hover:bg-amber-500 text-indigo-900 font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Réserver votre Soirée 18+
        </button>
      </div>

      <!-- Formulaire de réservation -->
      <div v-if="showReservationForm" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div class="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
          <h3 class="text-3xl font-bold mb-6 text-center text-purple-700">Réservation Soirée 18+</h3>
          <form @submit.prevent="submitReservation" class="space-y-6">
            <div>
              <label for="guests" class="block text-sm font-medium text-gray-900 mb-1">Nombre d'invités</label>
              <input 
                type="number" 
                id="guests" 
                v-model.number="reservationForm.guests" 
                required 
                class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-gray-900"
              >
            </div>
            <div>
              <label for="date" class="block text-sm font-medium text-gray-900 mb-1">Date de l'événement</label>
              <VueDatePicker
                v-model="reservationForm.date"
                :locale="locale"
                :format="dateFormat"
                :enable-time-picker="false"
                :min-date="new Date()"
                placeholder="Sélectionnez une date"
                input-class-name="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-gray-900"
                :hide-input-icon="true"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-900 mb-1">Votre email</label>
              <input 
                type="email" 
                id="email" 
                v-model="reservationForm.email" 
                required 
                class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-gray-900"
              >
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-900 mb-1">Message (optionnel)</label>
              <textarea 
                id="message" 
                v-model="reservationForm.message" 
                rows="3" 
                class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200 text-gray-900"
              ></textarea>
            </div>
            <div class="flex justify-end space-x-4">
              <button 
                type="button" 
                @click="showReservationForm = false" 
                class="px-6 py-2 rounded-lg text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200"
              >
                Annuler
              </button>
              <button 
                type="submit" 
                :disabled="isSubmitting" 
                class="px-6 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200"
              >
                <span v-if="isSubmitting">Envoi...</span>
                <span v-else>Réserver</span>
              </button>
            </div>
          </form>
          <div 
            v-if="submitStatus" 
            :class="['text-center p-4 rounded-md mt-4', submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
          >
            {{ submitStatus.message }}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const phases = [
  {
    title: "Accueil VIP des Invités",
    services: [
      "Tapis rouge et photographe professionnel",
      "Photobooth interactif avec accessoires fun",
    ],
    ambiance: "Musique d'ambiance lounge avec un DJ d'accueil et éclairage tamisé",
    price: 600
  },
  {
    title: "Apéritif & Cocktails",
    services: [
      "Bar à Cocktails créatifs servis par des barmans talentueux",
      "Buffet d'Apéritifs avec show culinaire en direct",
    ],
    ambiance: "Musique house légère avec des performances de danseurs",
    price: 1000
  },
  {
    title: "DJ Renommé",
    services: [
      "DJ renommé pour un set exclusif",
      "Show laser et jeux de lumières synchronisés avec la musique",
    ],
    ambiance: "Ambiance club avec un mix de house, EDM et hits du moment",
    price: 1000
  },
  {
    title: "Gâteau d'Anniversaire Spectaculaire",
    services: [
      "Gâteau personnalisé",
      "Vidéaste pour filmer l'événement",
    ],
    ambiance: "Moment festif pour célébrer l'anniversaire",
    price: 500
  },
  {
    title: "After Party",
    services: [
      "Distribution de packs VIP 'souvenirs' pour continuer la fête",
      "Navettes possibles pour ramener les invités chez eux",
    ],
    ambiance: "La fête continue avec une playlist personnalisée pour l'after",
    price: 300
  },
];

const selectedPhases = ref(new Array(phases.length).fill(false));
const selectedSecurity = ref(false);
const securityPrice = 300;
const totalEstimate = ref(0);
const showReservationForm = ref(false);
const isSubmitting = ref(false);
const submitStatus = ref(null);

// Computed property pour vérifier si des services sont sélectionnés
const hasSelectedServices = computed(() => {
  const selectedValues = [...selectedPhases.value];
  return selectedValues.some(value => value) || selectedSecurity.value;
});

// Fonction pour mettre à jour la sélection d'une phase
const updatePhaseSelection = (index) => {
  const newSelectedPhases = [...selectedPhases.value];
  newSelectedPhases[index] = !newSelectedPhases[index];
  selectedPhases.value = newSelectedPhases;
  updateTotalEstimate();
};

// Fonction pour mettre à jour le total estimé
const updateTotalEstimate = () => {
  let total = 0;
  selectedPhases.value.forEach((isSelected, index) => {
    if (isSelected) {
      total += phases[index].price;
    }
  });
  if (selectedSecurity.value) {
    total += securityPrice;
  }
  totalEstimate.value = total;
};

// Fonction pour obtenir l'emoji correspondant au service
const getEmoji = (service) => {
  if (service.includes('Accueil')) return '🎉';
  if (service.includes('Photobooth')) return '📸';
  if (service.includes('Bar')) return '🍹';
  if (service.includes('Buffet')) return '🍽️';
  if (service.includes('DJ')) return '🎧';
  if (service.includes('laser')) return '💡';
  if (service.includes('Gâteau')) return '🎂';
  if (service.includes('Vidéaste')) return '🎥';
  if (service.includes('packs VIP')) return '🎁';
  if (service.includes('Navettes')) return '🚗';
  if (service.includes('sécurité')) return '💪';
  return '🥳';
};

// Configuration du datepicker
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

// Formulaire de réservation
const reservationForm = reactive({
  guests: '',
  date: null,
  email: '',
  message: ''
});

// Fonction de soumission du formulaire
const submitReservation = () => {
  isSubmitting.value = true;
  // Simulation d'un appel API
  setTimeout(() => {
    isSubmitting.value = false;
    submitStatus.value = { 
      type: 'success', 
      message: 'Réservation de votre Soirée 18+ envoyée avec succès!' 
    };
    
    // Réinitialisation du formulaire après soumission réussie
    reservationForm.guests = '';
    reservationForm.date = null;
    reservationForm.email = '';
    reservationForm.message = '';
    
    // Fermeture du formulaire après un délai
    setTimeout(() => {
      showReservationForm.value = false;
      submitStatus.value = null;
    }, 3000);
  }, 2000);
};
</script>