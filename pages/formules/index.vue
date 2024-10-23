<template>
  <div class="bg-[#ffefef] min-h-screen">
    <Header textColor="text-black" />
    <div class="py-24">
      <Tableau />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Tableau from '@/components/Tableau.vue';
</script>