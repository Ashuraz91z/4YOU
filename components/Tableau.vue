<template>
  <div class="container mx-auto px-4 mt-8">
    <h2 class="text-2xl font-bold mb-4">Tableau comparatif</h2>
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th class="border border-gray-300 p-2"></th>
          <th v-for="service in devis.services" :key="service.name" class="border border-gray-300 p-2">
            {{ service.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in tableData" :key="company.name">
          <td class="border border-gray-300 p-2">{{ company.name }}</td>
          <td v-for="service in devis.services" :key="service.name" class="border border-gray-300 p-2">
            {{ company[service.name] }}€
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Tableau',
  props: {
    devis: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      competitors: [
        { name: 'Option 2', prices: { 'base': 110, 'Middle': 160, 'Premium': 210 } },
        { name: 'Option 3', prices: { 'base': 105, 'Middle': 155, 'Premium': 205 } }
      ]
    };
  },
  computed: {
    tableData() {
      if (!this.devis || !this.devis.services) return [];

      const data = [{ name: 'Option 1' }];
      this.devis.services.forEach(service => {
        data[0][service.name] = service.price;
      });
      return [...data, ...this.competitors];
    }
  },
  mounted() {
    console.log(this.devis); // For debugging
  }
};
</script>

<style scoped>
/* Add any styles you want here */
</style>
