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
        { hid: 'description', name: 'description', content: '4YOU - Votre agence événementielle à Paris. Organisation professionnelle de mariages, séminaires, conférences et événements d\'entreprise. Des moments inoubliables sur mesure.' },
        { name: 'keywords', content: 'agence événementielle, organisation événements, mariage, séminaire, conférence, événement entreprise, Paris, 4YOU' },
        { property: 'og:title', content: '4YOU - Agence Événementielle Paris' },
        { property: 'og:description', content: 'Créez des moments inoubliables avec 4YOU. Organisation professionnelle d\'événements sur mesure à Paris.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo.png' },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/jix1lxs.css'
        }

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
