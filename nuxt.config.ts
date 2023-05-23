// @ts-ignore
export default defineNuxtConfig({
	css: [
		'~/assets/scss/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
	],
    plugins: [
        { src: '~/plugins/font-awesome.js' },
    ],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					//additionalData: '//SASS\n	@import "@/assets/sass/variables.sass"',
				}
			}
		}
	}
});
