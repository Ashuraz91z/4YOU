<!-- Header.vue -->
<template>
  <div>
    <!-- Desktop header -->
    <header class="hidden md:block p-4 fixed w-full z-50 top-0 left-0">
      <div class="container mx-auto flex justify-between items-center">
        <div class="logo">
          <nuxt-link to="/" class="text-2xl font-bold text-white">
            <img src="~/assets/logo.png" alt="Logo" class="w-20 h-16 inline-block">
          </nuxt-link>
        </div>
        <nav>
          <ul class="flex space-x-10 text-xl">
            <li><nuxt-link to="/about" class="text-black font-bold font-lust-didone hover:underline hover:underline-offset-[8px]">A propos</nuxt-link></li>
            <li><nuxt-link to="/contact" class="text-black font-bold font-lust-didone hover:underline hover:underline-offset-[8px]">Contact</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Mobile header -->
    <header class="md:hidden fixed top-0 left-0 w-full p-4 z-50 flex justify-between items-center text-black">
      <button @click="toggleMenu" class="focus:outline-none z-50" aria-label="Toggle menu">
        <div class="w-8 h-8 flex items-center justify-center">
          <div class="menu-icon" :class="{ 'open': isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </button>
      <div class="logo absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out"
           :class="{ 'left-24 -translate-x-0': isMenuOpen }">
        <img src="~/assets/logo.png" alt="4YOU" class="h-12 w-auto mt-2">
      </div>
    </header>

    <!-- Full-screen menu overlay with animation (mobile only) -->
    <div 
      class="md:hidden fixed inset-0 bg-rouge z-40 flex flex-col justify-between transform transition-transform duration-300 ease-in-out"
      :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex flex-col h-full">
        <div class="flex-grow flex items-center">
          <div class="w-full">
            <nav>
              <ul class="space-y-6 ml-4">
                <li><nuxt-link @click="toggleMenu" to="/about" class="text-white hover:text-red-100 font-bold text-5xl block font-bobby lg:text-white lg:hover:text-orange-200">Qui Nous Sommes</nuxt-link></li>
                <li ><nuxt-link @click="toggleMenu" to="/realisations" class="text-white hover:text-red-100 font-bold text-5xl block font-bobby lg:text-white lg:hover:text-orange-200">Réalisations</nuxt-link></li>
                <li><nuxt-link @click="toggleMenu" to="/contact" class="text-white hover:text-red-100 font-bold text-5xl block font-bobby lg:text-white lg:hover:text-orange-200">Contact</nuxt-link></li>

              </ul>
            </nav>
          </div>
        </div>
        <div class="p-4">
          <div class="container mx-auto">
            <nuxt-link to="/legal" class="text-white hover:text-red-100 text-lg font-bobby">Mentions légales</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.menu-icon {
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.menu-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #000;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.menu-icon span:nth-child(1) {
  top: 0px;
}

.menu-icon span:nth-child(2) {
  top: 10px;
}

.menu-icon span:nth-child(3) {
  top: 20px;
}

.menu-icon.open span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.menu-icon.open span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

.menu-icon.open span {
  background: #fff;
}
</style>