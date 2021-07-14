// prettier-ignore
export default {
	ssr: true,
	target: 'server',

	/**
	 * Headers of the page
	 */
	head: {
		title: 'Hotel Booking | Find deals on hotels',

		meta: [
			/**
			 * SEO
			*/
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Great savings on hotels in destinations to Portugal, Spain, Italy and Brazil. Find the best price guaranteed on hotels for all budgets.' },
			{ hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
		],

		link: [
			// Favicon
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/**
	 * Global CSS: https://go.nuxtjs.dev/config-css
	 */
  css: [
    '@/assets/scss/main.scss'
  ],

	/**
	 * Plugins
	 */
	plugins: [
	],

	generate: {
    fallback: true
  },

	/**
	 * Build Modules
	*/
	buildModules: [
		'@nuxtjs/composition-api/module',
		'@nuxt/typescript-build',
		'@nuxtjs/svg'
	],

	/**
	 * Modules
	*/
	modules: [
		'@nuxt/http',
		'@nuxtjs/axios',
		['cookie-universal-nuxt', { alias: 'cookies' }],
	],

	/**
	 * Auto import components
	 */
	components: {
		dirs: [
			'~/components',
			'~/components/atoms',
			'~/components/molecules',
			'~/components/organisms',
		]
	}
}
