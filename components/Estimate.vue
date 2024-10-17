<template>
  <div class="container px-4 py-8 mx-auto">
    <h2 class="text-3xl font-bold  mb-6 text-center">Estimer votre événement</h2>
    
    <div v-if="selectedTheme" class="mb-8 border-2 border-purple-500 p-6 rounded-lg bg-purple-50 shadow-md">
      <h3 class="font-bold text-xl mb-3 text-purple-700">{{ selectedTheme.name }}</h3>
      <p class="text-gray-700 leading-relaxed">{{ themeDescriptions[selectedTheme.name] }}</p>
      <p v-if="initialTheme" class="mt-4 font-semibold text-purple-600">Vous avez choisi le thème {{ selectedTheme.name }}. Vous pouvez le modifier si vous le souhaitez.</p>
    </div>
    
    <div class="mb-12">
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

    <div v-if="devisGenerated" ref="devisSection" class="mt-12 bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h3 class="text-2xl font-semibold mb-6 text-center text-gray-800">Votre Devis Personnalisé</h3>
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

    const themeOptions = ref([])

    const selectedTheme = ref(null)
    const devisGenerated = ref(false)
    const devisSection = ref(null)

    const selectedOptions = computed(() => {
      return themeOptions.value.filter(option => option.selected)
    })

    const totalPrice = computed(() => {
      let total = selectedTheme.value ? selectedTheme.value.price : 0
      return total + selectedOptions.value.reduce((sum, option) => sum + option.price, 0)
    })

    function selectTheme(theme) {
      selectedTheme.value = theme
      updateThemeOptions(theme.name)
    }

    function updateThemeOptions(themeName) {
      const optionsMap = {
        'Super-héros': [
          { name: 'Gâteau personnalisé Super-Héros', price: 75, selected: false },
          { name: 'Cadeaux souvenirs personnalisés', price: 50, selected: false },
          { name: 'Piñata Super-Héros', price: 40, selected: false },
          { name: 'Effets spéciaux et éclairage', price: 100, selected: false },
          { name: 'Tournage d\'un mini-film de super-héros', price: 150, selected: false },
          { name: 'Tente ou espace de jeux gonflables', price: 200, selected: false }
        ],
        'Safari': [
          { name: 'Décoration avec animaux grandeur nature', price: 100, selected: false },
          { name: 'Piñata en forme d\'animal sauvage', price: 40, selected: false },
          { name: 'Gâteau personnalisé en forme d\'animal', price: 75, selected: false },
          { name: 'Tentes Safari ou cabanes', price: 150, selected: false },
          { name: 'Spectacle d\'animaux (en peluches animées)', price: 100, selected: false },
          { name: 'Badges d\'explorateur personnalisés', price: 30, selected: false }
        ],
        'Princesse': [
          { name: 'Photobooth féerique', price: 80, selected: false },
          { name: 'Cadeaux souvenirs royaux', price: 50, selected: false },
          { name: 'Château gonflable', price: 200, selected: false },
          { name: 'Karaoké de princesses', price: 100, selected: false },
          { name: 'Couronnes et capes pour chaque enfant', price: 60, selected: false },
          { name: 'Spectacle de marionnettes', price: 120, selected: false }
        ],
        'Licorne': [
          { name: 'Gâteau et pâtisseries licorne', price: 100, selected: false },
          { name: 'Cadeaux souvenirs licorne', price: 50, selected: false },
          { name: 'Création de cartes de vœux de licorne', price: 40, selected: false },
          { name: 'Ballons en forme de licorne', price: 60, selected: false },
          { name: 'Piñata en forme de licorne', price: 40, selected: false }
        ],
        'Dinosaures': [
          { name: 'Décorations préhistoriques', price: 80, selected: false },
          { name: 'Gâteau dinosaure', price: 75, selected: false },
          { name: 'Piñata en forme de dinosaure', price: 40, selected: false },
          { name: 'Atelier de création de masques de dinosaures', price: 50, selected: false },
          { name: 'Tatoos temporaires de dinosaures', price: 30, selected: false }
        ],
        'Harry Potter': [
          { name: 'Gâteau de Poudlard', price: 100, selected: false },
          { name: 'Photobooth avec accessoires magiques', price: 80, selected: false },
          { name: 'Chapeaux de maison personnalisés', price: 60, selected: false },
          { name: 'Gobelets personnalisés', price: 40, selected: false },
          { name: 'Sacs de cadeaux magiques', price: 50, selected: false },
          { name: 'Création de cartes de voeux de Poudlard', price: 40, selected: false }
        ],
        'Espace': [
          { name: 'Décorations galactiques', price: 80, selected: false },
          { name: 'Gâteau en forme de planète', price: 75, selected: false },
          { name: 'Déguisements d\'astronautes', price: 100, selected: false },
          { name: 'Photo Booth spatial', price: 80, selected: false },
          { name: 'Sacs de cadeaux interstellaires', price: 50, selected: false },
          { name: 'Démonstration de fusées à eau', price: 60, selected: false }
        ],
        'Pirate': [
          { name: 'Gâteau en forme de trésor', price: 75, selected: false },
          { name: 'Tatoos temporaires de pirate', price: 30, selected: false },
          { name: 'Déguisements de pirates', price: 100, selected: false }
        ],
        'Chevalier': [
          { name: 'Gâteau en forme de château', price: 75, selected: false },
          { name: 'Déguisements de chevaliers', price: 100, selected: false },
          { name: 'Atelier de création de boucliers', price: 50, selected: false },
          { name: 'Atelier de fabrication de masques de chevalier', price: 50, selected: false },
          { name: 'Mini spectacle de magie médiéval', price: 120, selected: false }
        ],
        'Détective': [
          { name: 'Gâteau en forme de loupe', price: 75, selected: false },
          { name: 'Déguisements de détectives', price: 100, selected: false },
          { name: 'Photobooth avec accessoires de détective', price: 80, selected: false },
          { name: 'Sac à surprises "kit de détective"', price: 50, selected: false },
          { name: 'Livret d\'enquête à personnaliser', price: 40, selected: false }
        ],
        'Mario': [],
        'Star Wars': [],
        'Pokémon': [],
        'Sport': []
      }
      themeOptions.value = optionsMap[themeName] || []
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
          updateThemeOptions(theme.name);
        }
      } else {
        selectedTheme.value = null;
        themeOptions.value = [];
      }
    }

    watch(() => props.initialTheme, handleThemeSelection, { immediate: true })
    watch(() => route.query.theme, handleThemeSelection, { immediate: true })

    onMounted(() => {
      // Le montage est silencieux maintenant
    })

    return {
      themes,
      themeOptions,
      selectedTheme,
      devisGenerated,
      selectedOptions,
      totalPrice,
      selectTheme,
      generateDevis,
      themeDescriptions,
      initialTheme: props.initialTheme,
      toggleOption,
      devisSection
    }
  }
}
</script>