<script>
import { ChevronDown as ChevronDownIcon } from 'lucide-vue-next'
import { MoveRight as MoveRightIcon } from 'lucide-vue-next'

export default {
  name: 'HomePage',
  components: {
    ChevronDownIcon,
    MoveRightIcon
  },
  data() {
    return {
      scrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    scrollToThemes() {
      const section = document.getElementById('themes-sections');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="relative h-screen overflow-hidden">
      <div
        class="absolute inset-0 bg-[url('/assets/img/hero.jpeg')] bg-cover bg-center"
        :style="{ transform: `translateY(${scrollPosition * 0.5}px)` }"
      >
        <div class="absolute inset-0 bg-black/25"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 py-8">
        <div class="flex flex-col items-center justify-center min-h-screen">
          <h1 class="text-6xl md:text-8xl font-bold font-caprasimo gap-2">
            <span class="text-rouge">4</span>
            <span class="text-orange">Y</span>
            <span class="text-rose">O</span>
            <span class="text-bleu">U</span>
          </h1>
          <p class="text-black text-2xl mb-8 font-caprasimo">Vos plus belles soirées</p>
          <p class="text-white text-xl mb-12">inoubliables, jusqu'à l'année prochaine</p>
          <button @click="scrollToThemes" class="border-2 border-red-500 rounded-full p-2">
            <ChevronDownIcon class="w-8 h-8 text-red-500" />
          </button>
        </div>
      </div>
    </div>

    <div id="themes-sections" class="grid grid-cols-1 md:grid-cols-2 w-full gap-0"> 
       <nuxt-link :to="'/theme/licorne'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/licorne.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Licorne</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 2 - Super-héros -->
      <nuxt-link :to="'/theme/super-heros'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/super-hero.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Super-héros</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 3 - Princesse -->
      <nuxt-link :to="'/theme/princesse'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/princesse.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Princesse</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 4 - Safari -->
      <nuxt-link :to="'/theme/safari'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/safari.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Safari</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 5 - Chevalier -->
      <nuxt-link :to="'/theme/chevalier'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/chevalier.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Chevalier</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 6 - Espace -->
      <nuxt-link :to="'/theme/espace'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/espace.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Espace</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 7 - Dinosaure -->
      <nuxt-link :to="'/theme/dinosaure'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/dinosaure.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Dinosaure</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 8 - Harry Potter -->
      <nuxt-link :to="'/theme/harry-potter'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/harry-potter.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Harry Potter</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 9 - Mario -->
      <nuxt-link :to="'/theme/mario'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/mario.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Mario</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 10 - Pirate -->
      <nuxt-link :to="'/theme/pirate'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/pirate.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Pirate</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 11 - Pokemon -->
      <nuxt-link :to="'/theme/pokemon'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/pokemon.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Pokemon</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 12 - Sport -->
      <nuxt-link :to="'/theme/sport'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/sport.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Sport</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 13 - Star Wars -->
      <nuxt-link :to="'/theme/star-wars'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/star-wars.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Star Wars</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>

      <!-- Section 14 - Détective -->
      <nuxt-link :to="'/theme/detective'" class="block"><section class="relative h-[calc(100vh/2)] group overflow-hidden">
        <div class="absolute inset-0 bg-[url('/assets/img/detective.jpeg')] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"></div>
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
          <h2 class="text-4xl font-bold mb-4 font-bobby">Détective</h2>
          <span class="mt-4 text-2xl">→</span>
        </div>
      </section></nuxt-link>
    </div>
  </div>
</template>