/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'gb-character-roller',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  telemetry: false,
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        // npm i @fortawesome/pro-solid-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-duotone-svg-icons
        imports: [
          {
            set: '@fortawesome/pro-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/pro-light-svg-icons',
            icons: ['fal'],
          },
          {
            set: '@fortawesome/pro-regular-svg-icons',
            icons: ['far'],
          },
          {
            set: '@fortawesome/pro-duotone-svg-icons',
            icons: ['fad'],
          },
        ],
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
