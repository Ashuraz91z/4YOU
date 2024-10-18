<template>
  <div class="bg-[#ffefef] min-h-screen">
    <Header />
    <div class="py-24">
      <Tableau />
    </div>
    <div class="flex justify-center mt-8 mb-16">
      <NuxtLink to="/devis" class="bg-violet text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        Obtenir un devis personnalisé
      </NuxtLink>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Tableau from '@/components/Tableau.vue';
</script>