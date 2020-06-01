require('dotenv').config();

export default {
  mode: 'spa',
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

// adding router middleware
   router: {
    middleware: ["clearValidationErrors"]
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
  "./plugins/mixins/user.js",
  "./plugins/axios.js",
  "./plugins/mixins/validation.js"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth',
  '@nuxtjs/toast',
  'bootstrap-vue/nuxt'
  ],
   /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_BSE_URL,
    headers: {
      'Accept-Encoding': 'compress, gzip'
    }
  },

  auth: {
     strategies: {
      local: {
        endpoints: {
          login: {
            url: "account/login",
            method: "post",
            propertyName: "token"
          },
          user: {
            url: "account/profile",
            method: "get",
            propertyName: "user"
          },
          logout: {
            url: "account/logout",
            method: "post"
          }
        }
      }
    },
    redirect: {
      login: '/account/login',
      logout: '/',
      user: '/account',
      callback:'/'
    }
  },


  toast: {
      position: 'top-right',
      duration: 2000
    },

    loading: {
    name: 'chasing-dots',
    color: '#ff5638',
    background: 'white',
    height: '4px'
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
