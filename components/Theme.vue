<template>
   <div id="sections" class="grid grid-cols-1 md:grid-cols-2 w-full">
    <!-- Super-héros -->
    <nuxt-link :to="{ path: '/devis', query: { theme: 'super-heros' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/super-hero.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">SUPER-HEROS</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>

  
      <!-- Safari -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'safari' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/safari.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">SAFARI</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Princesse -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'princesse' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/princesse.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">PRINCESSE</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Licorne -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'licorne' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/licorne.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">LICORNE</span>

            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Dinosaures -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'dinosaures' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/dinosaure.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">DINOSAURES</span>

            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Harry Potter -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'harry-potter' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/harry-potter.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">HARRY POTTER</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Espace -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'espace' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/espace.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">ESPACE</span>

            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Pirate -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'pirate' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/pirate.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">PIRATE</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Chevalier -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'chevalier' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/chevalier.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">CHEVALIER</span>

            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Détective -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'detective' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/detective.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">DÉTECTIVE</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Mario -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'mario' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/mario.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">MARIO</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Star Wars -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'star-wars' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/star-wars.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">STAR WARS</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
  
      <!-- Pokémon -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'pokemon' } }" class="block group overflow-hidden">
  <section class="relative h-[50vh] bg-[url('/assets/img/pokemon.jpeg')] bg-cover bg-center">
    <div class="absolute inset-0 bg-black/15"></div>
    <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
      <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
        <span class="mb-4 text-6xl transition-opacity duration-300">POKÉMON</span>

      </h2>
      <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
    </div>
  </section>
</nuxt-link>
  
      <!-- Sport -->
      <nuxt-link :to="{ path: '/devis', query: { theme: 'sport' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/sport.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black/15"></div>
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">SPORT</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>

      <nuxt-link :to="{ path: '/devis', query: { theme: 'boom' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/boom.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black/15"></div>
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">BOOM</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>

      <nuxt-link :to="{ path: '/devis', query: { theme: 'casino' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/casino.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black/15"></div>
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">CASINO</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>

      <nuxt-link :to="{ path: '/devis', query: { theme: 'olympiades' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/olympiades.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black/15"></div>
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">OLYMPIADES</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
      <nuxt-link :to="{ path: '/devis', query: { theme: 'atelier-diy' } }" class="block group overflow-hidden">
        <section class="relative h-[50vh] bg-[url('/assets/img/diy.jpeg')] bg-cover bg-center">
          <div class="absolute inset-0 bg-black/15"></div>
          <div class="absolute inset-0 transition-transform duration-300 group-hover:scale-105"></div>
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
            <h2 class="text-4xl font-league-spartan font-extrabold mb-4 flex flex-col text-center gap-2 drop-shadow-lg">
              <span class="mb-4 text-6xl transition-opacity duration-300">ATELIER DIY</span>
            </h2>
            <span class="mt-4 text-4xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">→</span>
          </div>
        </section>
      </nuxt-link>
    </div>
  </template>  
