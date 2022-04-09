export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'truecaller_blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

	env: {
		domain: process.env.TRUECALLER_DOMAIN,
		siteId: process.env.TRUECALLER_SITE_ID,
		apiAuthHeader: process.env.APP_API_URL
	},

	// Axios nain path
  axios: {
		proxy: true
	},

  // class for active links in nav
	router: {
		linkActiveClass: 'active',
		linkExactActiveClass: 'exact-active',
	},

  // path for connection
	publicRuntimeConfig: {
		axios: {
			withCredentials: true,
			baseURL: process.env.APP_API_URL
		}
	},

  // Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		'~/assets/styles/index.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // path for build scss
	styleResources: {
		scss: ['./assets/styles/*.scss']
	},

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		parallel: true, // ~30 seconds
		cache: true, // ~20 seconds
		hardSource: false, //true,  // ~20 seconds

		html: {
			minify: {
				minifyJS: true
			}
		}
	},
}
