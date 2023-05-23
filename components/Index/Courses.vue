<template>
	<div class="p-2 position-relative">
		<div class="overflow-auto d-flex carousel">
			<div class="d-flex justify-content-center align-items-center">
				<button class="btn " @click="scrollLeft">←</button>
			</div>
			<div
				v-for="(course, index) in courses" :key="course.id" class="card m-2" style="width: 18rem; flex: 0 0 auto;"
				@click="goToCourse"
			>
				<img :src="course.image" class="card-img-top" :alt="course.name">
				<div class="card-body">
					<h5 class="card-title">{{ course.name }}</h5>
					<p class="card-text">{{ course.description }}</p>
				</div>
			</div>
			<div class="d-flex justify-content-center align-items-center">
				<button class="btn btn-primary" @click="scrollRight">→</button>
			</div>
		</div>

	</div>
</template>

<script setup>
const router = useRouter();

const courses = [
	{
		id: 1,
		name: 'Blockchain para principiantes: Introducción completa',
		description: 'Comienza desde cero y aprende los fundamentos del blockchain, sus usos y cómo puedes aplicarlo en el mundo real.',
		image: '/introduccion_blockchain.webp'
	},
	{
		id: 2,
		name: 'Domina IPFS: Guía completa para novatos',
		description: 'Aprende desde cero sobre IPFS, cómo puede revolucionar la web y cómo puedes usarlo en tus proyectos.',
		image: '/ipfs.png'
	},
	{
		id: 3,
		name: 'Inmersión al desarrollo en Solana: Introducción al ecosistema',
		description: 'Aprende desde cero a desarrollar en la blockchain de Solana, una de las más rápidas y seguras del mercado.',
		image: '/solana.jpeg'
	},
	{
		id:4,
		name:'Blockchain para principiantes: Introducción completa',
		description:'Comienza desde cero y aprende los fundamentos del blockchain, sus usos y cómo puedes aplicarlo en el mundo real.',
		image:'/introduccion_blockchain.webp'
	},
	{
		id:5,
		name:'Domina IPFS: Guía completa para novatos',
		description:'Aprende desde cero sobre IPFS, cómo puede revolucionar la web y cómo puedes usarlo en tus proyectos.',
		image:'/ipfs.png'
	},
	{
		id:6,
		name:'Inmersión al desarrollo en Solana: Introducción al ecosistema',
		description:'Aprende desde cero a desarrollar en la blockchain de Solana, una de las más rápidas y seguras del mercado.',
		image:'/solana.jpeg'
	},
	{
		id:7,
		name:'Blockchain para principiantes: Introducción completa',
		description:'Comienza desde cero y aprende los fundamentos del blockchain, sus usos y cómo puedes aplicarlo en el mundo real.',
		image:'/introduccion_blockchain.webp'
	},
	{
		id:8,
		name:'Domina IPFS: Guía completa para novatos',
		description:'Aprende desde cero sobre IPFS, cómo puede revolucionar la web y cómo puedes usarlo en tus proyectos.',
		image:'/ipfs.png'
	},
	{
		id:9,
		name:'Inmersión al desarrollo en Solana: Introducción al ecosistema',
		description:'Aprende desde cero a desarrollar en la blockchain de Solana, una de las más rápidas y seguras del mercado.',
		image:'/solana.jpeg'
	}

]

const scrollLeft = () => {
	const carousel = ref.$refs.carousel
	carousel.scrollLeft -= 300
}

const scrollRight = () => {
	const carousel = ref.$refs.carousel
	carousel.scrollLeft += 300
}

const goToCourse = () => {
	router.push('course' )
}


</script>

<style scoped>
.carousel {
	cursor: grab;
	overflow-x: auto;
	overflow-y: hidden;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
	&::-webkit-scrollbar {
		display: none;
	}
}
.carousel-item {
	transition: transform 2s ease-in-out;
}
.carousel-caption {
	background-color: rgba(0,0,0,0.5);
}
.btn {
	color: #fff;
	background-color: #292941;
	border-color: #292941;

	&.btn-outline-light {
		color: #292941;
		border-color: #fff;
	}

	&:hover {
		color: #292941;
		background-color: #fff;
		border-color: #fff;
	}
}
</style>
