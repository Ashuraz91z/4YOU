<template>
  <div class="bg-[#ffefef]">
    <!-- Section d'Accueil -->
    <div class="relative h-screen overflow-hidden">
      <div class="absolute inset-0 bg-[#ffefef] bg-cover bg-center"></div>

      <div class="relative z-10 container mx-auto px-4 py-8">
        <div class="flex flex-col items-center justify-center min-h-screen">
          <h1 class="text-6xl md:text-8xl font-bold font-caprasimo gap-2">
            <span class="text-rouge">4</span>
            <span class="text-rouge">.</span>
            <span class="text-orange">Y</span>
            <span class="text-rose">O</span>
            <span class="text-bleu">U</span>
          </h1>
          <p class="text-black text-2xl m-8 font-lust-didone tracking-wide text-center">Vos plus belles soirées</p>
          <button @click="scrollToFormule" class="border-2 border-rouge rounded-full p-2">
            <ChevronDownIcon class="w-8 h-8 text-rouge" />
          </button>
        </div>
      </div>
    </div>

    <!-- Sections Thématiques -->
    <div id="sections" class="grid grid-cols-1 md:grid-cols-2 w-full gap-0">
      <!-- Section 1 - Nos Thèmes -->
      <nuxt-link :to="'/themes'" class="block group overflow-hidden">
        <section class="relative h-[calc(100vh/2)]">
          <div
            class="absolute inset-0 bg-vert bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white z-10"
          >
            <h2 class="text-4xl font-bold mb-4 font-lust-didone italic flex flex-col text-center gap-2">Nos Thèmes <h2 class="not-italic">🎨</h2></h2>
            <span class="mt-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </div>
        </section>
      </nuxt-link>

      <!-- Section 2 - Nos Formules -->
      <nuxt-link :to="'/formules'" class="block group overflow-hidden">
        <section class="relative h-[calc(100vh/2)]">
          <div
            class="absolute inset-0 bg-bleu bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white z-10"
          >
            <h2 class="text-4xl font-bold mb-4 font-lust-didone italic flex flex-col text-center gap-2">Nos Formules <h2 class="not-italic">🎟️</h2></h2>
            <span class="mt-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </div>
        </section>
      </nuxt-link>

      <!-- Section 3 - After Work -->
      <nuxt-link :to="'/after-work'" class="block group overflow-hidden">
        <section class="relative h-[calc(100vh/2)]">
          <div
            class="absolute inset-0 bg-orange bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white z-10"
          >
            <h2 class="text-4xl font-bold mb-4 font-lust-didone italic flex flex-col text-center gap-2">After Work <h2 class="not-italic">🤵🤵‍♀️</h2></h2>
            <span class="mt-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </div>
        </section>
      </nuxt-link>

      <!-- Section 4 - Soirée 18 et + -->
      <nuxt-link :to="'/soiree-18-plus'" class="block group overflow-hidden">
        <section class="relative h-[calc(100vh/2)]">
          <div
            class="absolute inset-0 bg-violet bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white z-10"
          >
            <h2 class="text-4xl font-bold mb-4 font-lust-didone italic flex flex-col text-center gap-2">Soirée 18 et + <h2 class="not-italic">🍾🎊</h2></h2>
            <span class="mt-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </div>
        </section>
      </nuxt-link>

      <!-- Section 5 - Réalisations -->
      <nuxt-link :to="'/realisations'" class="block group md:col-span-2 overflow-hidden">
        <section class="relative h-screen w-full">
          <div
            class="absolute inset-0 bg-rouge bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div
            class="absolute inset-0 flex flex-col justify-center items-center text-white z-10"
          >
            <h2 class="text-4xl font-bold mb-4 font-lust-didone italic flex flex-col text-center gap-2">Réalisations <h2 class="not-italic">🎈</h2></h2>
            <span class="mt-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </div>
        </section>
      </nuxt-link>
    </div>
    <div class="text-black bg- text-xl p-4 text-center font-lust-didone tracking-wide border-y-2 border-black flex flex-col items-center justify-center md:flex-row md:gap-2">
      <span>Inoubliables,</span>
      <span> jusqu'à l'année prochaine</span>
    </div>
  </div>
</template>

<script>
import { ChevronDown as ChevronDownIcon } from 'lucide-vue-next'

export default {
  name: 'HomePage',
  components: {
    ChevronDownIcon,
  },
  methods: {
    scrollToFormule() {
      const section = document.getElementById('sections');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
}
</script>

<style scoped>
@media (hover: none) {
  /* Appliquer les styles "hover" par défaut sur les appareils tactiles */
  .group:active .group-hover\:scale-110,
  .group .group-hover\:scale-110 {
    transform: scale(1.1);
  }

  .group:active .group-hover\:opacity-100,
  .group .group-hover\:opacity-100 {
    opacity: 1;
  }
}
</style>