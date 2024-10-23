// stores/reservationStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useReservationStore = defineStore('reservation', () => {
  // State
  const selections = ref({
    formula: null,
    theme: null,
    options: []
  })

  const reservationDetails = ref({
    numberOfPeople: 1,
    date: null,
    message: ''
  })

  // Getters
  const getSelections = computed(() => selections.value)

  const totalPrice = computed(() => {
    let total = 0
    if (selections.value.formula === 1) {
      total += 300 // Price for Formula 1
    } else if (selections.value.formula === 2 && selections.value.theme) {
      total += selections.value.theme.price
    }
    total += selections.value.options.reduce((sum, option) => sum + option.price, 0)
    return total
  })

  // Actions
  function saveReservationDetails(details) {
    reservationDetails.value = details
  }

  function updateSelections(newSelections) {
    selections.value = newSelections
  }

  return {
    selections,
    reservationDetails,
    getSelections,
    totalPrice,
    saveReservationDetails,
    updateSelections
  }
})

