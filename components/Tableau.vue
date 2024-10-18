<template>
  <div class="container mx-auto px-4 py-12">
    <h2 class="text-5xl font-bold mb-12 text-center text-black font-lust-didone">Nos Formules Magiques</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Formule Base -->
      <div class="bg-rose shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div class="bg-gradient-to-r  text-white py-8 px-6">
          <h3 class="text-3xl font-semibold text-center">Formule Base</h3>
          <p class="text-xl font-light text-center mt-2">(250-400€)</p>
        </div>
        <ul class="p-8 space-y-4">
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Jeux ludiques et classiques</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Jeux de société et jeux en plein air</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Durée : 3h (prolongation possible)</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Animation par un animateur professionnel</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-rose-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Idéal pour les petits groupes</span>
          </li>
        </ul>
      </div>

      <!-- Formule Middle -->
      <div class="bg-vert shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div class="bg-gradient-to-r bg-vert text-white py-8 px-6">
          <h3 class="text-3xl font-semibold text-center">Formule Middle</h3>
          <p class="text-xl font-light text-center mt-2">(500-800€)</p>
        </div>
        <ul class="p-8 space-y-4">
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Tout ce qui est inclus dans la <span class="font-bold">Formule Base</span></span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Animation thématique interactive</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Décoration thématique incluse</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Goûter festif avec gâteau personnalisé</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Chasse au trésor ou mini-olympiades</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-vert-400 rounded-full mr-3"></span>
            <span class="text-gray-800">Petits cadeaux souvenirs pour les invités</span>
          </li>
        </ul>
      </div>

      <!-- Formule Premium -->
      <div class="bg-bleu shadow-xl rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div class="bg-gradient-to-r from-bleu to-bleu-400 text-white py-8 px-6">
          <h3 class="text-3xl font-semibold text-center">Formule Premium</h3>
          <p class="text-xl font-light text-center mt-2">(900-1200€)</p>
        </div>
        <ul class="p-8 space-y-4">
          <li class="flex items-center">
            <span class="w-3 h-3 bg-bleu rounded-full mr-3"></span>
            <span class="text-gray-800">Tout ce qui est inclus dans la <span class="font-bold">Formule Middle</span></span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-bleu rounded-full mr-3"></span>
            <span class="text-gray-800">Animation thématique complète</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-bleu rounded-full mr-3"></span>
            <span class="text-gray-800">Décoration personnalisée de l'espace</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-bleu rounded-full mr-3"></span>
            <span class="text-gray-800">Buffet complet avec options personnalisées</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-bleu rounded-full mr-3"></span>
            <span class="text-gray-800">Activités créatives et souvenirs personnalisés</span>
          </li>
          <li class="flex items-center">
            <span class="w-3 h-3 bg-bleu rounded-full mr-3"></span>
            <span class="text-gray-800">Options : photographe, maquillage, spectacle</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tableau'
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

ul {
  list-style-type: none;
}
</style>
