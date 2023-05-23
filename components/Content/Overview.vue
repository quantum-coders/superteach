<template>
	<div class="container justify-content-center align-items-center pt-5">
		<div class="row pt-3">
			<div class="col-4 border d-flex flex-column border">
				<h2 class="text-white">Curso: Programación con Vue</h2>
				<div v-for="module in modules" :key="module.id" class="mb-3 text-white">
					<h3>{{ module.title }}</h3>
					<ul>
						<li v-for="lesson in module.lessons" :key="lesson.id" @click="selectLesson(lesson)">
							{{ lesson.title }}
						</li>
					</ul>
				</div>
			</div>
			<div class="col-8 row">
				<div v-if="currentLesson" >
					<iframe class="embed-responsive-item" height="100%" width="100%" :src="`https://www.youtube.com/embed/${currentLesson.videoId}`" allowfullscreen></iframe>
				</div>
				<div v-else class="text-white">
					<h2>Por favor selecciona una lección</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "CoursePage",
	setup() {
		const modules = ref([
			{
				id: 1,
				title: "¿Qué es el Blockchain? 🤔",
				lessons: [
					{ id: "1", title: "Lección 1: validadores", videoId: "zv5qCel3V7w" },
					{ id: "2", title: "Lección 2: solana", videoId: "0ORu-zRC9P4" },
				],
			},
			{
				id: 2,
				title: "Wallets",
				lessons: [
					{ id: "3", title: "Lección 1: Wallets", videoId: "G0XErKoOM6Y" },
					{ id: "4", title: "Lección 2: NFts", videoId: "NqE9rz6LPlo" },
				],
			},
		]);

		const currentLesson = ref(null);

		const selectLesson = (lesson) => {
			currentLesson.value = lesson;
		};

		return {
			modules,
			currentLesson,
			selectLesson,
		};
	},
};
</script>

<style scoped>
ul {
	list-style-type: none;
}

li {
	cursor: pointer;
	color: #007bff;
}

li:hover {
	text-decoration: underline;
}
.embed-responsive{
	height: 100%;
}

</style>
