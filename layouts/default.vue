<template>
	<section-header/>
	<section class="site-wrapper">
		<NuxtPage />
	</section>
	<section-footer/>
</template>

<script setup>
</script>

<style lang="sass">

	$xs: 0
	$sm: 576px
	$md: 768px
	$lg: 992px
	$xl: 1200px
	$xxl: 1400px

	img
		max-width: 100%

	html
		min-height: 100vh

	body
		background: linear-gradient(90deg, #292941 0%, #007BFF 50%, #0000FF 100%)
		min-height: 100vh
		display: flex
		flex-direction: column

	#__nuxt
		flex: 1
		min-height: 100vh
		display: flex
		flex-direction: column

	.site-wrapper
		flex: 1
</style>