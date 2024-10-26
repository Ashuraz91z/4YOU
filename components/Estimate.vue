<template>
  <div class="container px-4 py-8 mx-auto">
    <h2 class="text-3xl font-bold mb-6 text-center">Estimer votre événement</h2>
    
    <div class="mb-8">
      <h3 class="text-2xl font-semibold mb-6 text-center">Formules</h3>
      <div class="flex justify-center space-x-4">
        <button
          @click="selectFormula(1)"
          class="px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
          :class="selectedFormula === 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          Formule 1
        </button>
        <button
          @click="selectFormula(2)"
          class="px-6 py-2 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg"
          :class="selectedFormula === 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
        >
          Formule 2
        </button>
      </div>
      <p class="text-center mt-4 text-sm">
        Vous n'avez pas vu nos formules ? <nuxt-link to="/formules" class="text-black hover:underline">Cliquez ici pour les découvrir</nuxt-link>.
      </p>
    </div>

    <div v-if="selectedFormula">
      <div v-if="selectedTheme" class="mb-8 border-2 border-purple-500 p-6 rounded-lg bg-purple-50 shadow-md">
        <h3 class="font-bold text-xl mb-3 text-purple-700">{{ selectedTheme.name }}</h3>
        <p class="text-gray-700 leading-relaxed">{{ getThemeDescription(selectedTheme.name) }}</p>
        <p v-if="initialTheme" class="mt-4 font-semibold text-purple-600">Vous avez choisi le thème {{ selectedTheme.name }}. Vous pouvez le modifier si vous le souhaitez.</p>
      </div>
      
      <div v-if="selectedFormula === 2" class="mb-12">
        <h3 class="text-2xl font-semibold mb-6 text-center">Thèmes</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="theme in themes" 
            :key="theme.name" 
            class="border-2 p-4 border-black rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 bg-white"
            :class="{ 'border-purple-500 bg-purple-200': selectedTheme === theme, 'border-black hover:border-purple-300 hover:bg-gray-50': selectedTheme !== theme }"
            @click="selectTheme(theme)"
          >
            <label class="flex items-center w-full h-full cursor-pointer">
              <input
                type="radio"
                :checked="selectedTheme === theme"
                :value="theme"
                v-model="selectedTheme"
                class="mr-3 h-5 w-5 text-purple-600 transition-all duration-300 ease-in-out"
                @click.stop
              >
              <span class="text-lg">{{ theme.name }}</span>
            </label>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h3 class="text-2xl font-semibold mb-6 text-center">Options</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="(option, index) in themeOptions" 
            :key="index" 
            class="border-2 p-4 border-black rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 bg-white"
            :class="{ 'border-purple-500 bg-purple-200': option.selected, 'border-black hover:border-purple-300 hover:bg-gray-50': !option.selected }"
            @click="toggleOption(index)"
          >
            <div class="flex items-center w-full h-full">
              <input
                :id="'option' + index"
                :checked="option.selected"
                type="checkbox"
                class="mr-3 h-5 w-5 text-purple-600 rounded transition-all duration-300 ease-in-out"
                @click.stop
              >
              <span class="text-lg flex-grow">{{ option.name }}</span>
              <span class="text-lg font-semibold text-purple-600">+{{ option.price }}€</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button @click="generateDevis" class="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg">
          Générer le devis
        </button>
      </div>
    </div>

    <div v-if="devisGenerated" ref="devisSection" class="mt-12 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h3 class="text-2xl font-semibold mb-6 text-center text-gray-800">Votre Devis Personnalisé</h3>
      <div class="mb-6 border-b pb-4">
        <div class="flex justify-between items-center">
          <span class="text-lg text-gray-700">Formule choisie :</span>
          <span class="font-semibold text-lg">{{ selectedFormula === 1 ? 'Formule 1' : 'Formule 2' }}</span>
        </div>
      </div>
      <div v-if="selectedTheme" class="mb-6 border-b pb-4">
        <div class="flex justify-between items-center">
          <span class="text-lg text-gray-700">Thème choisi :</span>
          <span class="font-semibold text-lg">{{ selectedTheme.price }}€</span>
        </div>
        <div class="text-lg text-gray-800 mt-2">{{ selectedTheme.name }}</div>
      </div>
      <div class="space-y-4">
        <div v-for="(option, index) in selectedOptions" :key="index" class="flex justify-between items-center py-2 border-b">
          <span class="text-gray-700 flex-grow mr-4">{{ option.name }}</span>
          <span class="font-semibold whitespace-nowrap">{{ option.price }}€</span>
        </div>
      </div>
      <div class="mt-8 bg-gray-100 text-gray-800 font-semibold py-4 px-6 rounded-lg text-xl w-full text-center">
        Total : {{ totalPrice }}€
      </div>
      <div class="mt-8 text-center">
        <button @click="showReservationForm = true" class="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg">
          Réserver
        </button>
      </div>
    </div>

    <div v-if="showReservationForm" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
        <h3 class="text-3xl font-bold mb-6 text-center text-purple-700">Réservation</h3>
        <form @submit.prevent="submitReservation" class="space-y-6">
          <div>
            <label for="guests" class="block text-sm font-medium text-gray-700 mb-1">Nombre d'invités</label>
            <input type="number" id="guests" v-model="reservationForm.guests" required class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200">
          </div>
          <div>
            <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Date de l'événement</label>
            <VueDatePicker
              v-model="reservationForm.date"
              :locale="locale"
              :format="dateFormat"
              :enable-time-picker="false"
              :min-date="new Date()"
              placeholder="Sélectionnez une date"
              input-class-name="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200"
              :hide-input-icon="true"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Votre email</label>
            <input type="email" id="email" v-model="reservationForm.email" required class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200">
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
            <textarea id="message" v-model="reservationForm.message" rows="3" class="w-full px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200"></textarea>
          </div>
          <div class="flex justify-end space-x-4">
            <button type="button" @click="showReservationForm = false" class="px-6 py-2 rounded-lg text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200">
              Annuler
            </button>
            <button type="submit" :disabled="isSubmitting" class="px-6 py-2 rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200">
              <span v-if="isSubmitting">Envoi...</span>
              <span v-else>Réserver</span>
            </button>
          </div>
        </form>
        <div v-if="submitStatus" :class="['text-center p-4 rounded-md mt-4', submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
          {{ submitStatus.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useReservationForm } from '../composables/useReservationForm'

export default {
  name: 'Estimate',
  components: {
    VueDatePicker
  },
  props: {
    initialTheme: {
      type: String,
      default: null
    },
    initialFormula: {
      type: Number,
      default: null
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    const showReservationForm = ref(false)
    
    const locale = {
      locale: 'fr',
      format: 'dd/MM/yyyy',
      firstDay: 1,
      yearSuffix: '',
      weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
      today: "Aujourd'hui",
      clear: 'Effacer',
      close: 'Fermer'
    }

    const dateFormat = (date) => {
      if (!date) return ''
      return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    }

    const themes = ref([
      { name: 'Super-héros', price: 200 },
      { name: 'Safari', price: 180 },
      { name: 'Princesse', price: 190 },
      { name: 'Licorne', price: 210 },
      { name: 'Dinosaures', price: 220 },
      { name: 'Harry Potter', price: 230 },
      { name: 'Espace', price: 240 },
      { name: 'Pirate', price: 200 },
      { name: 'Chevalier', price: 210 },
      { name: 'Détective', price: 190 },
      { name: 'Mario', price: 220 },
      { name: 'Star Wars', price: 250 },
      { name: 'Pokémon', price: 230 },
      { name: 'Sport', price: 180 },
      { name: 'Casino Kids', price: 220 },
      { name: 'Olympiades', price: 200 },
      { name: 'Atelier DIY', price: 210 },
      { name: 'Urban Foot', price: 200 }
    ])

    const themeOptions = ref([])

    const selectedTheme = ref(null)
    const selectedFormula = ref(null)
    const devisGenerated = ref(false)
    const devisSection = ref(null)
    const reservationForm = reactive({
      guests: '',
      date: null,
      email: '',
      message: '',
      selectedFormula: computed(() => selectedFormula.value === 1 ? 'Formule 1' : 'Formule 2'),
      selectedTheme: computed(() => selectedTheme.value),
      selectedOptions: computed(() => selectedOptions.value),
      totalPrice: computed(() => totalPrice.value)
    })

    const { isSubmitting, submitStatus, submitForm } = useReservationForm(reservationForm)

    const selectedOptions = computed(() => {
      return themeOptions.value.filter(option => option.selected)
    })

    const totalPrice = computed(() => {
      let total = 0
      if (selectedFormula.value === 1) {
        total += 300 // Prix de la Formule 1
      } else if (selectedFormula.value === 2 && selectedTheme.value) {
        total += selectedTheme.value.price
      }
      total += selectedOptions.value.reduce((sum, option) => sum + option.price, 0)
      return total
    })

    function selectFormula(formula) {
      selectedFormula.value = formula
      if (formula === 1) {
        selectedTheme.value = null
      }
      updateThemeOptions()
    }

    function selectTheme(theme) {
      if (selectedFormula.value === 2) {
        selectedTheme.value = theme
      }
    }

    function updateThemeOptions() {
      themeOptions.value = [
        { name: 'Gâteau personnalisé', price: 70, selected: false },
        { name: 'Cadeau souvenir', price: 50, selected: false },
        { name: 'Piñata', price: 35, selected: false },
        { name: 'Prestataire (Clown, Magicien, Chimiste, etc.)', price: 250, selected: false },
        { name: 'Invitation personnalisée', price: 20, selected: false },
        { name: 'Photographe professionnel', price: 150, selected: false },
        { name: 'Appareil photo Kodak avec développement des photos', price: 70, selected: false },
        { name: 'Goodies personnalisés (T-shirt, casquette, etc.)', price: 150, selected: false },
        { name: 'Déjeuner complet (pizza, sandwich, BBQ)', price: 200, selected: false },
        { name: 'Heure en +', price: 80, selected: false },
        { name: 'Bar à bonbons', price: 100, selected: false },
        { name: 'Machine à pop-corn', price: 80, selected: false },
        { name: 'Location de château gonflable', price: 200, selected: false },
        { name: 'Caricaturiste', price: 150, selected: false },
        { name: 'Tatouage temporaire', price: 50, selected: false }
      ]
    }

    function toggleOption(index) {
      themeOptions.value[index].selected = !themeOptions.value[index].selected
    }

    function generateDevis() {
      devisGenerated.value = true
      setTimeout(() => {
        if (devisSection.value) {
          devisSection.value.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }

    function submitReservation() {
      submitForm()
    }

    const normalizeString = (str) => {
      const accentsMap = {
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
        'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
        'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
        'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
        'ý': 'y', 'ÿ': 'y',
        'ñ': 'n'
      }
      return str.toLowerCase()
        .replace(/[àáâãäåèéêëìíîïòóôõöùúûüýÿñ]/g, match => accentsMap[match] || match)
        .replace(/[^a-z0-9]/g, '')
    }

    const findTheme = (themeName) => {
      if (!themeName) return null
      const normalizedSearchName = normalizeString(themeName)
      return themes.value.find(t => normalizeString(t.name) === normalizedSearchName)
    }

    const getThemeDescription = (themeName) => {
      const descriptions = {
        "Super-héros": "Plongez dans l'univers des super-héros avec des costumes, des jeux de rôle et des activités passionnantes.",
        "Safari": "Partez à l'aventure dans la savane avec des décorations d'animaux, des jeux de piste et des activités sur le thème de la nature.",
        "Princesse": "Transformez la fête en un conte de fées royal avec des robes, des couronnes et des activités dignes d'un château.",
        "Licorne": "Entrez dans un monde magique et coloré avec des décorations scintillantes, des jeux enchantés et des friandises arc-en-ciel.",
        "Dinosaures": "Remontez le temps jusqu'à l'ère préhistorique avec des fossiles, des jeux d'exploration et des activités sur le thème des dinosaures.",
        "Harry Potter": "Plongez dans le monde magique de Poudlard avec des baguettes, des potions et des jeux inspirés de la célèbre série.",
        "Espace": "Partez en mission spatiale avec des décorations galactiques, des jeux d'astronautes et des activités sur le thème de l'espace.",
        "Pirate": "Embarquez pour une aventure sur les mers avec des chasses au trésor, des costumes de pirates et des jeux de navigation.",
        "Chevalier": "Voyagez dans le temps médiéval avec des tournois, des quêtes héroïques et des activités chevaleresques.",
        "Détective": "Résolvez des mystères passionnants avec des énigmes, des jeux de déduction et des activités d'enquête.",
        "Mario": "Plongez dans l'univers coloré de Mario avec des jeux de plateforme, des power-ups et des activités inspirées du jeu vidéo.",
        "Star Wars": "Vivez une aventure intergalactique avec des sabres laser, des missions spatiales et des activités inspirées de la saga.",
        "Pokémon": "Devenez un maître Pokémon avec des jeux de capture, des combats amicaux et des activités sur le thème des créatures Pokémon.",
        "Sport": "Célébrez l'esprit sportif avec des mini-olympiades, des jeux d'équipe et des activités physiques amusantes.",
        "Casino Kids": "Profitez d'une ambiance de casino adaptée aux enfants avec des jeux de cartes, des machines à sous factices et des activités de hasard.",
        "Olympiades": "Organisez des mini-jeux olympiques avec des épreuves variées, des médailles et un esprit de compétition amical.",
        "Atelier DIY": "Stimulez la créativité avec des ateliers de bricolage, des projets artistiques et des activités manuelles.",
        "Urban Foot": "Combinez football et culture urbaine avec des mini-matchs, du freestyle et des activités street art."
      }
      return descriptions[themeName] || "Description non disponible pour ce thème."
    }

    const handleThemeSelection = (newTheme) => {
      if (newTheme) {
        const theme = findTheme(newTheme)
        if (theme) {
          selectedTheme.value = theme
          selectedFormula.value = 2
          updateThemeOptions()
        }
      } else {
        selectedTheme.value = null
        themeOptions.value = []
      }
    }

    watch(() => props.initialTheme, handleThemeSelection, { immediate: true })
    watch(() => route.query.theme, handleThemeSelection, { immediate: true })

    onMounted(() => {
      if (props.initialFormula) {
        selectFormula(props.initialFormula)
      } else if (route.query.formula) {
        const formula = parseInt(route.query.formula)
        if (formula === 1 || formula === 2) {
          selectFormula(formula)
        }
      }
    })

    return {
      themes,
      themeOptions,
      selectedTheme,
      selectedFormula,
      devisGenerated,
      selectedOptions,
      totalPrice,
      selectTheme,
      selectFormula,
      generateDevis,
      getThemeDescription,
      initialTheme: props.initialTheme,
      toggleOption,
      devisSection,
      showReservationForm,
      reservationForm,
      submitReservation,
      locale,
      dateFormat,
      isSubmitting,
      submitStatus,
      submitForm
    }
  }
}
</script>

<style>
.dp__main {
  font-family: inherit;
}

.dp__input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border-width: 2px;
  border-color: rgb(216 180 254);
  transition-property: all;
  transition-duration: 200ms;
}

.dp__input:focus {
  outline: none;
  border-color: rgb(168 85 247);
  box-shadow: 0 0 0 4px rgb(216 180 254 / 0.25);
}

.dp__input::placeholder {
  color: rgb(107 114 128);
}

.dp__calendar_header {
  color: rgb(107 114 128);
}

.dp__today {
  background-color: rgb(233 213 255);
  color: rgb(126 34 206);
}

.dp__active_date {
  background-color: rgb(147 51 234);
  color: white;
}

.dp__date_hover {
  background-color: rgb(233 213 255);
  color: rgb(126 34 206);
}

.dp__disabled {
  color: rgb(209 213 219);
}

.dp__range_start, .dp__range_end, .dp__range_between {
  background-color: rgb(147 51 234);
  color: white;
}

.dp__month_year_select {
  color: rgb(107 114 128);
}
</style>