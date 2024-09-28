<template>
    <div class="relative min-h-screen bg-teal-400">
      <!-- Menu for responsive design -->
      <div class="lg:hidden">
        <button @click="toggleMenu" class="fixed top-4 left-4 z-50">
          <MenuIcon class="w-6 h-6 text-white" />
        </button>
        
        <transition name="slide">
          <div v-if="isMenuOpen" class="fixed inset-0 bg-red-600 z-40 flex flex-col p-6">
            <div class="flex justify-between items-center mb-8">
              <div class="text-2xl font-bold text-white">be brandon</div>
              <button @click="toggleMenu" class="text-white focus:outline-none">
                <XIcon class="w-6 h-6" />
              </button>
            </div>
            <nav class="flex flex-col space-y-4 text-2xl text-white">
              <nuxt-link to="/" class="hover:underline" @click="toggleMenu">L'agence</nuxt-link>
              <nuxt-link to="/realisations" class="hover:underline" @click="toggleMenu">Réalisations</nuxt-link>
              <nuxt-link to="/contact" class="hover:underline" @click="toggleMenu">Contact</nuxt-link>
            </nav>
          </div>
        </transition>
      </div>
      
      <!-- Main content -->
      <div class="container mx-auto px-4 py-8">
        <!-- Logo -->
        <div class="absolute top-4 left-4 text-white text-3xl font-bold">Σ</div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex justify-end space-x-6 text-red-500 font-semibold mb-12">
          <nuxt-link to="/agence">L'agence</nuxt-link>
          <nuxt-link to="/realisations">Réalisations</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </nav>
        
        <!-- Main content -->
        <div class="flex flex-col items-center justify-center min-h-screen">
          <h1 class="text-6xl md:text-8xl font-bold mb-4">
            <span class="text-white">be</span>
            <span class="text-red-500">brandon</span>
          </h1>
          <p class="text-red-500 text-2xl mb-8">be aware</p>
          <p class="text-white text-xl mb-12">Découvrir la plus active des agences</p>
          <button class="border-2 border-red-500 rounded-full p-2">
            <ChevronDownIcon class="w-8 h-8 text-red-500" />
          </button>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="absolute bottom-4 right-4 text-white text-sm">
        Be Brandon est une marque exstend group
      </div>
    </div>
  </template>
  
  <script>
  import { Menu as MenuIcon, X as XIcon, ChevronDown as ChevronDownIcon } from 'lucide-vue-next'
  
  export default {
    name: 'HomePage',
    components: {
      MenuIcon,
      XIcon,
      ChevronDownIcon
    },
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
  </script>
  
  <style scoped>
  .slide-enter-active, .slide-leave-active {
    transition: transform 0.3s ease-in-out;
  }
  .slide-enter-from, .slide-leave-to {
    transform: translateX(-100%);
  }
  .slide-enter-to, .slide-leave-from {
    transform: translateX(0);
  }
  </style>