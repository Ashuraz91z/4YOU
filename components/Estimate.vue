<template>
  <div class="container mx-auto px-4 mt-8">
    <h2 class="text-2xl font-bold mb-4">Devis Généré</h2>
    
    <!-- Theme Description Section -->
    <div v-if="selectedTheme" class="mb-8 border p-4 rounded bg-blue-100">
      <h3 class="font-bold text-lg mb-2">{{ selectedTheme.name }}</h3>
      <p>{{ themeDescriptions[selectedTheme.name] }}</p>
      <p v-if="initialTheme" class="mt-2 font-semibold">Vous avez choisi le thème {{ selectedTheme.name }}. Vous pouvez le modifier si vous le souhaitez.</p>
    </div>
    
    <!-- Themes Section -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Thèmes</h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div 
          v-for="theme in themes" 
          :key="theme.name" 
          class="border p-4 rounded cursor-pointer"
          :class="{ 'bg-blue-100': selectedTheme === theme, 'hover:bg-gray-100': selectedTheme !== theme }"
          @click="selectTheme(theme)"
        >
          <label class="flex items-center w-full h-full cursor-pointer">
            <input
              type="radio"
              :checked="selectedTheme === theme"
              :value="theme"
              v-model="selectedTheme"
              class="mr-2"
              @click.stop
            >
            {{ theme.name }}
          </label>
        </div>
      </div>
    </div>

    <!-- Options Section -->
    <div class="mb-8">
      <h3 class="text-xl font-semibold mb-4">Options</h3>
      <div v-for="(option, index) in options" :key="index" class="mb-4">
        <label :for="'option' + index" class="flex items-center cursor-pointer">
          <input
            :id="'option' + index"
            v-model="option.selected"
            type="checkbox"
            class="mr-2"
          >
          <span>{{ option.name }} - {{ option.description }} ({{ option.price }}€)</span>
        </label>
      </div>
    </div>

    <button @click="generateDevis" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Générer le devis
    </button>

    <div v-if="devisGenerated" class="border p-4 rounded mt-8">
      <h3 class="text-xl font-semibold mb-4">Devis</h3>
      <div v-if="selectedTheme" class="mb-2">
        <span>Thème: {{ selectedTheme.name }} - {{ selectedTheme.price }}€</span>
      </div>
      <div v-for="(option, index) in selectedOptions" :key="index" class="mb-2">
        <span>{{ option.name }}: {{ option.price }}€</span>
      </div>
      <div class="mt-4 font-bold">
        Total: {{ totalPrice }}€
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Estimate',
  props: {
    initialTheme: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const route = useRoute()
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
      { name: 'Sport', price: 180 }
    ])

    const themeDescriptions = {
      'Super-héros': 'Plongez dans l\'univers captivant des super-héros lors d\'une journée d\'anniversaire de 4 heures, conçue spécialement pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité pleine d\'aventures, un goûter festif inspiré de l\'univers des super-héros et des ateliers créatifs. Préparez-vous à vivre une journée inoubliable, pleine d\'énergie et de rires, où chaque enfant pourra libérer son imagination et se transformer en super-héros le temps d\'une fête !',
      'Safari': 'Embarquez pour une aventure sauvage avec un anniversaire sur le thème du safari, d\'une durée de 4 heures, parfaitement adapté à chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité pleine d\'exploration, un goûter inspiré de la jungle et des ateliers créatifs où les enfants pourront fabriquer des accessoires de safari. Préparez-vous à une journée excitante, riche en découvertes et en rires, où chaque petit explorateur pourra vivre des moments mémorables en pleine nature !',
      'Princesse': 'Entrez dans un monde féerique avec un anniversaire sur le thème des princesses, d\'une durée de 4 heures, spécialement conçu pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité magique, un goûter royal digne d\'un conte de fées, et des ateliers créatifs où les enfants pourront créer leur propre couronne ou accessoire de princesse. Préparez-vous à une journée enchantée, pleine de rires et de merveilles, où chaque enfant pourra réaliser son rêve de devenir une véritable princesse le temps d\'une fête inoubliable !',
      'Licorne': 'Plongez dans un univers enchanté avec un anniversaire sur le thème des licornes, d\'une durée de 4 heures, conçu sur mesure pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité magique, un goûter coloré inspiré des licornes, et des ateliers créatifs où les enfants pourront fabriquer leur propre corne ou accessoire féerique. Préparez-vous à une journée merveilleuse, pleine de rires et de fantaisie, où chaque enfant pourra s\'immerger dans un monde de rêve et de magie le temps d\'une fête inoubliable !',
      'Dinosaures': 'Partez à l\'aventure dans un monde préhistorique avec un anniversaire sur le thème des dinosaures, d\'une durée de 4 heures, adapté à chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité palpitante, un goûter jurassique, et des ateliers créatifs où les enfants pourront fabriquer leur propre fossile ou dinosaure en carton. Préparez-vous à une journée fascinante, pleine de découvertes et d\'amusement, où chaque petit explorateur pourra vivre une expérience inoubliable à l\'époque des géants !',
      'Harry Potter': 'Entrez dans le monde magique de Harry Potter avec un anniversaire de 4 heures, spécialement conçu pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité inspirée des aventures de Poudlard, un goûter magique avec des friandises de l\'univers de Harry Potter, et des ateliers créatifs où les enfants pourront créer leur propre baguette ou écusson de maison. Préparez-vous à une journée ensorcelante, pleine de rires et de magie, où chaque enfant pourra devenir un véritable sorcier le temps d\'une fête mémorable !',
      'Espace': 'Partez pour un voyage intergalactique avec un anniversaire sur le thème de l\'espace, d\'une durée de 4 heures, adapté à chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité d\'exploration spatiale, un goûter cosmique rempli de délices stellaires, et des ateliers créatifs où les enfants pourront créer leur propre vaisseau spatial ou étoile. Préparez-vous à une journée fascinante, pleine de découvertes et d\'amusement, où chaque petit astronaute pourra vivre une aventure spatiale inoubliable !',
      'Pirate': 'Naviguez sur les mers du monde des pirates avec un anniversaire de 4 heures, conçu pour chaque enfant selon son âge et ses goûts. Au programme, une grande activité d\'aventure en haute mer, un goûter inspiré des trésors des pirates, et des ateliers créatifs où les enfants pourront fabriquer leur propre carte au trésor. Préparez-vous à une journée pleine de frissons et de rires, où chaque petit pirate pourra vivre une chasse au trésor inoubliable sur les océans !',
      'Chevalier': 'Entrez dans le monde médiéval avec un anniversaire sur le thème des chevaliers, d\'une durée de 4 heures, spécialement conçu pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité d\'aventure chevaleresque, un goûter royal inspiré des banquets médiévaux, et des ateliers créatifs où les enfants pourront fabriquer leur propre épée ou bouclier. Préparez-vous à une journée remplie de courage et de rires, où chaque petit chevalier pourra vivre des exploits dignes des plus grands héros !',
      'Détective': 'Plongez dans le monde des enquêtes avec un anniversaire sur le thème des détectives, d\'une durée de 4 heures, conçu sur mesure pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité d\'enquête où les enfants résoudront des mystères, un goûter inspiré des détectives, et des ateliers créatifs où ils pourront créer leur propre carnet de détective ou loupe. Préparez-vous à une journée pleine de suspense et de rires, où chaque petit détective pourra vivre une aventure inoubliable en résolvant des énigmes !',
      'Mario': 'Plongez dans l\'univers coloré de Mario avec un anniversaire de 4 heures, conçu spécialement pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité de jeu inspirée des aventures de Mario, un goûter festif avec des douceurs en forme de champignon et de personnages, et des ateliers créatifs où les enfants pourront créer leurs propres casquettes de Mario ou décorations de niveau. Préparez-vous à une journée pleine d\'amusement et de rires, où chaque enfant pourra vivre des aventures aussi folles que dans le monde des jeux vidéo !',
      'Star Wars': 'Entrez dans la galaxie lointaine de Star Wars avec un anniversaire de 4 heures, spécialement conçu pour chaque enfant selon son âge et ses goûts. Au programme, une grande activité intergalactique pleine d\'action, un goûter galactique avec des friandises inspirées de l\'univers de Star Wars, et des ateliers créatifs où les enfants pourront fabriquer leur propre sabre laser ou vaisseau spatial. Préparez-vous à une journée épique, pleine d\'aventures et de magie, où chaque enfant pourra devenir un héros de la saga le temps d\'une fête inoubliable !',
      'Pokémon': 'Entrez dans le monde fascinant des Pokémon avec un anniversaire de 4 heures, spécialement conçu pour chaque enfant selon son âge et ses goûts. Au programme, une grande activité de chasse aux Pokémon, un goûter inspiré de l\'univers Pokémon avec des douceurs thématiques, et des ateliers créatifs où les enfants pourront créer leurs propres cartes ou figurines de Pokémon. Préparez-vous à une journée remplie d\'aventures et de découvertes, où chaque enfant pourra devenir un véritable maître Pokémon le temps d\'une fête inoubliable !',
      'Sport': 'Vibrez au rythme du sport avec un anniversaire de 4 heures, conçu spécialement pour chaque enfant en fonction de son âge et de ses goûts. Au programme, une grande activité sportive avec des jeux et des défis amusants, un goûter énergique avec des collations saines, et des ateliers créatifs où les enfants pourront personnaliser leurs propres t-shirts ou médailles. Préparez-vous à une journée pleine d\'action et de rires, où chaque petit sportif pourra briller et célébrer l\'esprit d\'équipe !'
    }

    const options = ref([
      { name: 'Décoration supplémentaire', description: 'Ajout de décorations thématiques', price: 50, selected: false },
      { name: 'Animation', description: 'Animateur costumé pour 2 heures', price: 100, selected: false },
      { name: 'Gâteau personnalisé', description: 'Gâteau décoré selon le thème', price: 75, selected: false },
      { name: 'Invitations personnalisées', description: 'Cartes d\'invitation assorties au thème', price: 30, selected: false },
      { name: 'Photobooth', description: 'Espace photo avec accessoires', price: 80, selected: false }
    ])

    const selectedTheme = ref(null)
    const devisGenerated = ref(false)

    const selectedOptions = computed(() => {
      return options.value.filter(option => option.selected)
    })

    const totalPrice = computed(() => {
      let total = selectedTheme.value ? selectedTheme.value.price : 0
      return total + selectedOptions.value.reduce((sum, option) => sum + option.price, 0)
    })

    function selectTheme(theme) {
      selectedTheme.value = theme
    }

    function generateDevis() {
      devisGenerated.value = true
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
      };
      return str.toLowerCase()
        .replace(/[àáâãäåèéêëìíîïòóôõöùúûüýÿñ]/g, match => accentsMap[match] || match)
        .replace(/[^a-z0-9]/g, '');
    };

    const findTheme = (themeName) => {
      if (!themeName) return null;
      const normalizedSearchName = normalizeString(themeName);
      return themes.value.find(t => normalizeString(t.name) === normalizedSearchName);
    };

    const handleThemeSelection = (newTheme) => {
      if (newTheme) {
        const theme = findTheme(newTheme);
        if (theme) {
          selectedTheme.value = theme;
        }
      } else {
        selectedTheme.value = null;
      }
    }

    watch(() => props.initialTheme, handleThemeSelection, { immediate: true })
    watch(() => route.query.theme, handleThemeSelection, { immediate: true })

    onMounted(() => {
      // Le montage est silencieux maintenant
    })

    return {
      themes,
      options,
      selectedTheme,
      devisGenerated,
      selectedOptions,
      totalPrice,
      selectTheme,
      generateDevis,
      themeDescriptions,
      initialTheme: props.initialTheme
    }
  }
}
</script>