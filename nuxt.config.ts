// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: [
    '@/assets/css/main.css'
  ],
  app: {
    head: {
      title: '4YOU',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '4YOU - Votre agence événementielle de confiance à Paris. Nous créons des événements sur mesure : mariages, anniversaires, événements d\'entreprise. Une équipe expérimentée pour des moments inoubliables.' },
        { name: 'keywords', content: 'agence événementielle, organisation événements, mariage, anniversaire, événement entreprise, Paris, événementiel, réception, fête, célébration' },
        { property: 'og:title', content: '4YOU - Agence Événementielle à Paris' },
        { property: 'og:description', content: 'Créez des moments inoubliables avec 4YOU. Experts en organisation d\'événements personnalisés à Paris.' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: '4YOU Events' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo.png' },
        // Autres liens
      ],
    }
  },

  nitro: {
    routeRules: {
      '/api/**': { cors: true }
    }
  },

  runtimeConfig: {
    // Variables côté serveur
    emailUser: process.env.NUXT_EMAIL_USER,
    emailPass: process.env.NUXT_EMAIL_PASS,
  }
})
