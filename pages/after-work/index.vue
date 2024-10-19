<template>
  <div class="bg-gradient-to-br from-indigo-900 to-purple-800 min-h-screen text-white">
    <Header textColor="text-white" />
    <div class="container mx-auto py-24 px-4">
      <h1 class="text-5xl font-bold mb-12 text-center font-lust-didone text-amber-400">Afterwork Festif</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Accueil et Installation</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">👋</span> Accueil personnalisé avec bracelets ou badges
            </li>
            <li class="flex items-center">
              <span class="mr-2">📸</span> Photobooth avec accessoires amusants
            </li>
            <li class="flex items-center">
              <span class="mr-2">🎵</span> Musique lounge ou deep house
            </li>
            <li class="flex items-center">
              <span class="mr-2">✨</span> Décoration élégante avec guirlandes et bougies
            </li>
          </ul>
        </section>

        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Apéritif et Networking</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">🍸</span> Bar à cocktails par Benteille
            </li>
            <li class="flex items-center">
              <span class="mr-2">🍢</span> Buffet tapas et finger food
            </li>
            <li class="flex items-center">
              <span class="mr-2">🎹</span> DJ Set ou pianiste/orchestre
            </li>
          </ul>
        </section>

        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Activités et Animations</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">🎲</span> Quiz interactif avec cadeaux
            </li>
            <li class="flex items-center">
              <span class="mr-2">🏓</span> Jeux légers (baby-foot, fléchettes, ping-pong)
            </li>
            <li class="flex items-center">
              <span class="mr-2">🎧</span> DJ Set décontracté ou Piano Bar
            </li>
          </ul>
        </section>

        <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Moment de Relax et Fin Douce</h2>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-2">🍰</span> Bar à desserts et boissons chaudes
            </li>
            <li class="flex items-center">
              <span class="mr-2">🎶</span> Playlist chill de clôture
            </li>
            <li class="flex items-center">
              <span class="mr-2">🕯️</span> Ambiance lounge avec lumières tamisées
            </li>
          </ul>
        </section>
      </div>

      <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8">
        <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Fin de la Soirée</h2>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span class="mr-2">🎁</span> Distribution de cadeaux souvenirs
          </li>
        </ul>
      </section>

      <section class="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-8">
        <h2 class="text-2xl font-bold mb-6 font-caprasimo text-amber-300">Services Supplémentaires</h2>
        <ul class="space-y-3">
          <li class="flex items-center">
            <span class="mr-2">🌿</span> Décoration légère et tendance
          </li>
          <li class="flex items-center">
            <span class="mr-2">👮</span> Service de sécurité
          </li>
          <li class="flex items-center">
            <span class="mr-2">🎩</span> Animations optionnelles (magicien, ateliers cocktails)
          </li>
        </ul>
      </section>

      <div class="text-center mt-16">
        <NuxtLink to="/devis" class="bg-amber-400 hover:bg-amber-500 text-indigo-900 font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
          Réserver votre Afterwork
        </NuxtLink>
      </div>
    </div>
    <Footer />
  </div>
</template>