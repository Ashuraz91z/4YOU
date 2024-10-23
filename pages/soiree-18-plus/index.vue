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
              <input type="checkbox" :id="'phase-' + index" v-model="selectedPhases[index]" class="mr-2 hidden">
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
              <input type="checkbox" id="security" v-model="selectedSecurity" class="mr-2 hidden">
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
        <NuxtLink to="/devis" class="bg-amber-400 hover:bg-amber-500 text-indigo-900 font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
          Réserver votre Soirée 18+
        </NuxtLink>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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

const hasSelectedServices = computed(() => {
  return selectedPhases.value.some(value => value) || selectedSecurity.value;
});

const totalEstimate = computed(() => {
  let total = 0;
  selectedPhases.value.forEach((isSelected, index) => {
    if (isSelected) {
      total += phases[index].price;
    }
  });
  if (selectedSecurity.value) {
    total += securityPrice;
  }
  return total;
});

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
</script>