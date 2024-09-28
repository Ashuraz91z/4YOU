<template>
    <header class="relative">
      <nav class="flex justify-between items-center p-4 bg-white shadow">
        <div @click="toggleMenu" class="cursor-pointer">
          <MenuIcon class="w-6 h-6" />
        </div>
        <div class="flex-grow text-center">
          <img src="~/assets/logo.png" alt="Logo 4YOU" class="h-8 mx-auto" />
        </div>
      </nav>
  
      <transition name="slide">
        <div 
          v-if="isMenuOpen" 
          class="fixed inset-0 z-40 bg-red-600"
          :class="{'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen}"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-center p-6">
              <h2 class="text-3xl font-bold text-white mb-4">Menu</h2>
              <nuxt-link to="/" class="block text-lg text-white py-2 hover:underline" @click="toggleMenu">L’agence</nuxt-link>
              <nuxt-link to="/about" class="block text-lg text-white py-2 hover:underline" @click="toggleMenu">Réalisations</nuxt-link>
              <nuxt-link to="/contact" class="block text-lg text-white py-2 hover:underline" @click="toggleMenu">Contact</nuxt-link>
              <div class="mt-6">
                <nuxt-link to="/legal" class="text-sm text-white hover:underline">Mentions légales</nuxt-link>
              </div>
              <button @click="toggleMenu" class="mt-4 w-full py-2 bg-white text-red-600 rounded focus:outline-none">Fermer</button>
            </div>
          </div>
        </div>
      </transition>
    </header>
  </template>
  
  <script>
  import { Menu as MenuIcon } from 'lucide-vue-next'
  
  export default {
    name: 'Menu',
    components: {
      MenuIcon
    },
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  .slide-enter {
    transform: translateX(-100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
  </style>