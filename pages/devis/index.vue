<template>
  <div>
    <Estimate :initialTheme="currentTheme" />
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