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

      <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8">
        <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Distribution de Cadeaux Souvenirs</h2>
        <p class="text-sm italic mb-4">Le prix varie en fonction du nombre d'invités</p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-amber-300 h-10 flex items-center">{{ prices.cadeaux.min }} - {{ prices.cadeaux.max }} €</span>
          <label for="cadeaux" class="flex items-center cursor-pointer">
            <input type="checkbox" id="cadeaux" v-model="selectedServices.cadeaux" class="mr-2 hidden">
            <span 
              class="px-4 py-2 rounded-full transition-colors duration-200 ease-in-out inline-block w-40 text-center"
              :class="selectedServices.cadeaux ? 'bg-amber-400 text-indigo-900 font-bold' : 'bg-transparent border-2 border-amber-300 text-amber-300'"
            >
              {{ selectedServices.cadeaux ? 'Sélectionné ✓' : 'Sélectionner' }}
            </span>
          </label>
        </div>
      </section>

      <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8">
        <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Services Supplémentaires</h2>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span class="mr-2">🌿</span> Décoration légère et tendance
          </li>
          <li class="flex items-center">
            <span class="mr-2">👮</span> Service de sécurité
          </li>
          <li class="flex items-center">
            <span class="mr-2">🎩</span> Animations optionnelles (magicien, ateliers cocktails)
          </li>
        </ul>
        <p class="mt-4 font-bold">Prix sur demande</p>
      </section>

      <!-- Nouveau composant pour le devis -->
      <section v-if="hasSelectedServices" class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8">
        <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Votre Devis</h2>
        <ul class="space-y-3">
          <li v-if="selectedServices.accueil" class="flex items-center justify-between">
            <span>Accueil et Installation</span>
            <span>{{ prices.accueil }} €</span>
          </li>
          <li v-if="selectedServices.aperitif" class="flex items-center justify-between">
            <span>Apéritif</span>
            <span>{{ prices.aperitif }} €</span>
          </li>
          <li v-if="selectedServices.activites" class="flex items-center justify-between">
            <span>Activités et Animations</span>
            <span>{{ prices.activites }} €</span>
          </li>
          <li v-if="selectedServices.desserts" class="flex items-center justify-between">
            <span>Bar à Desserts</span>
            <span>{{ prices.desserts }} €</span>
          </li>
          <li v-if="selectedServices.cadeaux" class="flex items-center justify-between">
            <span>Distribution de Cadeaux Souvenirs</span>
            <span>{{ prices.cadeaux.min }} - {{ prices.cadeaux.max }} €</span>
          </li>
        </ul>
        <div class="mt-6 pt-4 border-t border-white/20">
          <p class="text-xl font-bold flex justify-between">
            <span>Total:</span>
            <span>{{ totalEstimate }} €</span>
          </p>
          <p class="text-sm italic mt-2">Ce devis est fourni à titre indicatif et peut varier en fonction du nombre d'invités et des détails spécifiques de votre événement.</p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

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

const hasSelectedServices = computed(() => {
  return Object.values(selectedServices.value).some(value => value);
});

const totalEstimate = computed(() => {
  let total = 0;
  if (selectedServices.value.accueil) total += prices.value.accueil;
  if (selectedServices.value.aperitif) total += prices.value.aperitif;
  if (selectedServices.value.activites) total += prices.value.activites;
  if (selectedServices.value.desserts) total += prices.value.desserts;
  if (selectedServices.value.cadeaux) total += prices.value.cadeaux.max; // On prend le max pour l'estimation

  return total;
});
</script>