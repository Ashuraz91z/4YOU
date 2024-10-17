<template>
  <div class="page-background">
    <Header />
    <div class="container mx-auto py-24 px-4">
      <Estimate :initialTheme="currentTheme" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import Estimate from '@/components/Estimate.vue'

export default {
  name: 'DevisPage',
  components: {
    Estimate
  },
  setup() {
    const route = useRoute()
    const currentTheme = computed(() => route.query.theme)

    watch(currentTheme, (newTheme) => {
      console.log('Thème dans l\'URL mis à jour:', newTheme)
    })

    return {
      currentTheme
    }
  }
}
</script>

<style scoped>
.page-background {
  background-color: #ffefef;
  min-height: 100vh;
}
</style>