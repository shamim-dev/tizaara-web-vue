
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
            "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      }
    ],
  script: [
    {
      src: "https://kit.fontawesome.com/006d665d24.js",
      type: "text/javascript"
    },{
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      type: "text/javascript"
    },{
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      type: "text/javascript"
    },{
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      type: "text/javascript"
    }
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
    '@/assets/css/bootstrap.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/flags.css',
    '@/assets/css/login.css',
    '@/assets/css/owl.carousel.css',
    '@/assets/css/style.css'
  ],

  transition: {
    name: "fade",
    mode: "out-in"
  },

  
  js: [
    '@/assets/js/bootstrap.js',
    '@/assets/js/bootstrap.min.js',
    '@/assets/js/jquery.js',
    '@/assets/js/jquery.countdown.min.js',
    '@/assets/js/jquery.countdown.js',
    '@/assets/js/jquery.flagstrap.js',
    '@/assets/js/scrolltop.js',
    '@/assets/js/custom.script.js'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
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
