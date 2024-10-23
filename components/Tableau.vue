<template>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-5xl font-bold mb-12 text-center text-black font-lust-didone">Nos Formules Magiques</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
      <!-- Formule Base -->
      <div class="bg-rose shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
        <div class="bg-gradient-to-r text-black py-8 px-6">
          <h3 class="text-3xl font-semibold text-center font-lust-didone">FORMULE ENCADREMENT ET ANIMATION</h3>
          <p class="text-xl font-light text-center mt-2">(250-400€)</p>
        </div>
        <ul class="p-8 space-y-4 flex-grow">
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Deux animateurs professionnels</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Activités classiques</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Surveillance continue des enfants</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Idéal pour les fêtes sans thème spécifique</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Durée : 3h (avec possibilité de prolongation)</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Pas de thème disponible pour cette formule</span>
          </li>
        </ul>
        <div class="px-8 pb-8 mt-auto">
          <NuxtLink
            :to="{ path: '/devis', query: { formula: 1 } }"
            class="block w-full bg-rose text-black text-center font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-rose-600 shadow-lg border-2 border-black"
          >
            Réserver
          </NuxtLink>
        </div>
      </div>

      <!-- Formule Middle -->
      <div class="bg-vert shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
        <div class="bg-gradient-to-r bg-vert text-black py-8 px-6">
          <h3 class="text-3xl font-semibold text-center font-lust-didone">ANNIVERSAIRE A THÈME, CLÉ EN MAINS</h3>
          <p class="text-xl font-light text-center mt-2">(500-800€)</p>
        </div>
        <ul class="p-8 space-y-4 flex-grow">
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Organisation complète d'un anniversaire</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Choix d'un thème personnalisé</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Décoration thématique intégrale</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Nourriture personnalisée</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Animations et jeux thématiques</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Animateurs costumés</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Goodies et petits cadeaux personnalisés</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Options supplémentaires disponibles</span>
          </li>
        </ul>
        <div class="px-8 pb-8 mt-auto">
          <NuxtLink
            :to="{ path: '/devis', query: { formula: 2 } }"
            class="block w-full bg-vert text-black text-center font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-vert-600 shadow-lg border-2 border-black"
          >
            Réserver
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <div class="relative mb-72 md:mb-24">
      <div class="overflow-hidden">
        <transition-group name="slide" tag="div">
          <div v-if="currentSlide === 0" key="0" class="p-6 bg-rose text-white rounded-lg px-12 absolute w-full">
            <h3 class="text-2xl font-bold mb-4">Formule Encadrement et Animation</h3>
            <p class="text-sm md:text-base">
              Vous souhaitez offrir aux parents un moment de détente pendant que les enfants s'amusent sous bonne surveillance ? Notre formule Encadrement et Animation est faite pour vous ! Pendant 3 heures (avec possibilité de prolongation), deux animateurs professionnels prennent en charge l'encadrement et l'animation des enfants, vous permettant de profiter pleinement de votre événement sans avoir à vous en occuper.
            </p>
          </div>
          <div v-else-if="currentSlide === 1" key="1" class="p-6 bg-vert text-white rounded-lg px-12 absolute w-full">
            <h3 class="text-2xl font-bold mb-4">Formule Anniversaire à Thème et Clé en Main</h3>
            <p class="text-sm md:text-base">
              Offrez à votre enfant un anniversaire inoubliable avec notre formule Anniversaire à Thème et Clé en Main. Nous nous occupons de tout, de l'organisation à la réalisation, pour que vous puissiez savourer pleinement ce moment unique et festif. Avec cette formule, nous créons un événement sur-mesure, entièrement personnalisé selon les envies de votre enfant.
            </p>
          </div>
        </transition-group>
      </div>
      <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full shadow-md hover:bg-opacity-75 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button v-for="n in 2" :key="n" @click="setSlide(n-1)" :class="['w-3 h-3 rounded-full', currentSlide === n-1 ? 'bg-white' : 'bg-gray-300']"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tableau',
  data() {
    return {
      currentSlide: 0,
      intervalId: null,
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, 15000);
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % 2;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + 2) % 2;
      this.stopAutoSlide();
      this.startAutoSlide();
    },
    setSlide(index) {
      this.currentSlide = index;
      this.stopAutoSlide();
      this.startAutoSlide();
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

ul {
  list-style-type: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
