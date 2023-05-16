// @ts-ignore
export default defineNuxtConfig({
	css: [
		'~/assets/scss/main.scss',
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
})

/* Testing commit telegram notifications #1 */