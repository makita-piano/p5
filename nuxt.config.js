export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'fom-create',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'FoMクリエイトは東京・埼玉を拠点に、演奏動画の収録・制作を行っています。ピアノ・クラシックのほか、お教室の発表会やプロモーション動画など広範囲に制作いたします。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FoMクリエイト' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'FoMクリエイト' },
      { hid: 'og:description', property: 'og:description', content: 'FoMクリエイトは東京・埼玉を拠点に、演奏動画の収録・制作を行っています。ピアノ・クラシックのほか、お教室の発表会やプロモーション動画など広範囲に制作いたします。' },
      { hid: 'og:image', property: 'og:image', content: 'https://fom-create.com/fom.png' }
    ],
    link: [
      {
        rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.3.1/gridlex.min.css"
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://fom-create.com'
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: '404error',
        path: '*',
        component: resolve('~/pages/notfound.vue')
      })
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
