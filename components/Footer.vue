<template>
  <footer class="bg-[#ffefef] text-black py-10 border-t-2 border-black">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Informations de contact -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b-2 border-black/30 pb-2 font-lust-didone">Contact</h3>
          <p class="mb-2">Adresse : 123 Rue de l'Événement, Paris, France</p>
          <p class="mb-2">Email : <a href="mailto:contact@agence-evenementiel.com" class="text-violet-300 hover:text-violet-500">contact@4you.fr</a></p>
          <p>Téléphone : <a href="tel:+33123456789" class="text-violet-300 hover:text-violet-500">+33 1 23 45 67 89</a></p>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b-2 border-black/30 pb-2 font-lust-didone">Liens Utiles</h3>
          <ul class="space-y-2">
            <li><nuxt-link to="/" class="text-black hover:text-violet-500">Accueil</nuxt-link></li>
            <li><nuxt-link to="/contact" class="text-black hover:text-violet-500">Contact</nuxt-link></li>
            <li><nuxt-link to="/legal" class="text-black hover:text-violet-500">Mentions Légales</nuxt-link></li>
            <li><nuxt-link to="/confidentialite" class="text-black hover:text-violet-500">Politique de Confidentialité</nuxt-link></li>
          </ul>
        </div>

        <!-- Réseaux sociaux -->
        <div>
          <h3 class="text-xl font-semibold mb-4 border-b-2 border-black/30 pb-2 font-lust-didone">Suivez-nous</h3>
          <div class="flex space-x-6">
            <a href="https://facebook.com/agenceevenementiel" target="_blank" rel="noopener noreferrer" class="hover:text-violet-500">Facebook</a>
            <a href="https://instagram.com/agenceevenementiel" target="_blank" rel="noopener noreferrer" class="hover:text-violet-500">Instagram</a>
            <a href="https://linkedin.com/company/agenceevenementiel" target="_blank" rel="noopener noreferrer" class="hover:text-violet-500">LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="text-center mt-10 border-t border-violet-500 pt-6">
        <p class="mb-2">© 2024 4YOU. Tous droits réservés.</p>
        <nuxt-link to="/cookies" class="text-violet-300 hover:text-violet-500">Gestion des cookies</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
/* Tailwind CSS is used, scoped styles are not needed */
</style>