module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Reto del Pacífico",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Reto del Pacifico" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  css: [
    { src: "~assets/style/rp2.epic.css", lang: "css" },
    { src: "~assets/style/main.scss", lang: "sass" }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    // [
    //   "nuxt-i18n",
    //   {
    //     locales: ["en", "es"],
    //     defaultLocale: "en",
    //     vueI18n: {
    //       fallbackLocale: "en",
    //       messages: {
    //         en: {
    //           welcome: "Welcome"
    //         },
    //         es: {
    //           welcome: "Bienvenido"
    //         }
    //       }
    //     }
    //   }
    // ],
    "@nuxtjs/pwa",
    ["bootstrap-vue/nuxt", { css: false }]
  ],
  auth: {
    redirect: {
      callback: "/callback"
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "http://localhost:8000/api/v0.0/auth/token/create/",
            method: "post",
            propertyName: "auth_token"
          },
          logout: {
            url: "http://localhost:8000/api/v0.0/auth/token/destroy/",
            method: "post"
          },
          user: {
            url: "http://localhost:8000/api/v0.0/auth/me/",
            method: "get",
            propertyName: ""
          }
        },
        tokenType: 'Token',
      }
    }
  },
  router: {
    middleware: ["auth"]
  }
};
