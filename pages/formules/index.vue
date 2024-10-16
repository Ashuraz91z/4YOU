<template>
    <div>
      <Tableau :devis="devisData" />
      <div class="flex justify-center mt-8">
  <NuxtLink to="/devis" class="bg-rose hover:bg-rose/80 text-black font-bold py-2 px-4 rounded">
    Obtenir un devis
  </NuxtLink>
</div>
    </div>
  </template>
  
  <script>
  import Tableau from '/components/Tableau.vue'
  
  export default {
    components: {
      Tableau
    },
    data() {
      return {
        devisData: {
          services: [
            { name: 'Base', price: 100 },
            { name: 'Middle', price: 150 },
            { name: 'Premium', price: 200 }
          ]
        }
      };
    }
  };
  </script>
  