
module.exports = {

  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Siraj Kimuli is developer and partner at LUCKYGrafics base in Kampala Uganda ' },
      { hid: 'keywords', name: 'keywords', content: 'Software Engineer, Kimuli Siraje, Web application, Website Design, open source projects, product design, user experience, programmer, writing code' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700|Poppins:400,600,800&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  telemetry: false,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-157466258-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-rfg-icon',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://kimulisiraj.me',
    gzip: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  gsap: {
    extraPlugins: {
      text: true
    }
  },

  tailwindcss: {
    jit: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
