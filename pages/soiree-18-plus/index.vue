<template>
  <div class="bg-gradient-to-br from-indigo-800 to-purple-700 min-h-screen text-white">
    <Header textColor="text-white" />
    <div class="container mx-auto py-24 px-4">
      <h1 class="text-5xl font-bold mb-12 text-center font-dancing-script text-amber-200">Soirée Club Festive</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section v-for="(phase, index) in phases" :key="index" class="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-amber-300">
          <h2 class="text-2xl font-bold mb-6 font-pacifico text-amber-200">{{ phase.title }}</h2>
          <div class="mb-4">
            <h3 class="text-xl font-medium mb-2 text-amber-100">Services proposés :</h3>
            <ul class="space-y-3">
              <li v-for="(service, sIndex) in phase.services" :key="sIndex" class="flex items-center">
                <span class="mr-2">{{ getEmoji(service) }}</span> {{ service }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-2 text-amber-100">Ambiance :</h3>
            <p>{{ phase.ambiance }}</p>
          </div>
        </section>
      </div>

      <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8 border border-amber-300">
        <h2 class="text-2xl font-bold mb-6 font-pacifico text-amber-200">Services Supplémentaires</h2>
        <ul class="space-y-3">
          <li v-for="(service, index) in additionalServices" :key="index" class="flex items-center">
            <span class="mr-2">{{ getEmoji(service) }}</span> {{ service }}
          </li>
        </ul>
      </section>

      <div class="text-center mt-16">
        <NuxtLink to="/devis" class="bg-amber-400 hover:bg-amber-500 text-indigo-900 font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
          Réserver votre Soirée Club Festive
        </NuxtLink>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const phases = [
  {
    title: "Accueil VIP des Invités",
    services: [
      "Tapis rouge et photographe professionnel",
      "Photobooth interactif avec accessoires fun",
    ],
    ambiance: "Musique d'ambiance lounge avec un DJ d'accueil et éclairage tamisé"
  },
  {
    title: "Apéritif & Cocktails Colorés",
    services: [
      "Bar à Cocktails créatifs servis par des barmans talentueux",
      "Buffet d'Apéritifs avec show culinaire en direct",
    ],
    ambiance: "Musique house légère avec des performances de danseurs"
  },
  {
    title: "Dancefloor Enflammé",
    services: [
      "DJ renommé pour un set exclusif",
      "Show laser et jeux de lumières synchronisés avec la musique",
    ],
    ambiance: "Ambiance club avec un mix de house, EDM et hits du moment"
  },
  {
    title: "Gâteau d'Anniversaire Spectaculaire",
    services: [
      "Arrivée du Gâteau géant avec fontaines d'étincelles",
      "Vidéo Mapping personnalisé projeté sur les murs",
    ],
    ambiance: "Moment festif avec un remix original de 'Joyeux Anniversaire'"
  },
  {
    title: "Apothéose du Dancefloor",
    services: [
      "Battle de DJs avec participation du public",
      "Lâcher de ballons et confettis",
      "Photographe et vidéaste pour un aftermovie professionnel",
    ],
    ambiance: "Climax de la soirée avec un mélange explosif de tous les styles musicaux"
  },
  {
    title: "After Party Chill",
    services: [
      "Distribution de packs VIP 'souvenirs' pour continuer la fête",
      "Navettes pour les meilleurs clubs de la ville",
    ],
    ambiance: "La fête continue avec une playlist personnalisée pour l'after"
  },
];

const additionalServices = [
  "Décoration festive avec effets lumineux et projections 3D",
  "Équipe de sécurité discrète et professionnelle",
  "Espace Chill-Out avec massages et rafraîchissements",
];

const getEmoji = (service) => {
  if (service.includes('Accueil')) return '🎉';
  if (service.includes('Photobooth')) return '📸';
  if (service.includes('Bar')) return '🍹';
  if (service.includes('Buffet')) return '🍽️';
  if (service.includes('DJ')) return '🎧';
  if (service.includes('laser')) return '💡';
  if (service.includes('Gâteau')) return '🎂';
  if (service.includes('Vidéo')) return '🎥';
  if (service.includes('ballons')) return '🎈';
  if (service.includes('Photographe')) return '📷';
  if (service.includes('packs VIP')) return '🎁';
  if (service.includes('Décoration')) return '✨';
  if (service.includes('sécurité')) return '💪';
  if (service.includes('Chill-Out')) return '🛋️';
  return '🥳';
};
</script>