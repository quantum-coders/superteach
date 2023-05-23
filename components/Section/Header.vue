<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-dark">
		<div class="container-fluid">
			<!-- Left Side -->
			<div class="d-flex">
				<!-- Dropdown Menu -->
				<div class="dropdown">
					<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" @click="toggleMenu">
						Courses
					</button>
					<ul class="dropdown-menu" v-if="isMenuOpen" aria-labelledby="dropdownMenuButton1">
						<li><a class="dropdown-item" href="#">Course 1</a></li>
						<li><a class="dropdown-item" href="#">Course 2</a></li>
						<li><a class="dropdown-item" href="#">Course 3</a></li>
					</ul>
				</div>
				<!-- Search Bar -->
				<form class="d-flex ms-3">
					<input class="form-control" type="search" placeholder="Search" aria-label="Search">
				</form>
			</div>

			<!-- Logo -->
			<a class="navbar-brand mx-auto justify-content-center text-center" @click="goToHome" href="#"><img class="w-25" src="/superteamlogo.png" alt="Logo"></a>

			<!-- Right Side -->
			<div class="d-flex">
				<!-- Get AI Guide -->
				<button class="btn me-2" type="button">Get AI Guide</button>
				<!-- Login -->
				<button class="btn me-2" type="button" @click="openModal" >Login</button>
				<!-- Sign Up -->
				<button class="btn" type="button" @click="openModal">Sign Up</button>
			</div>
		</div>
	</nav>
	<!-- Modal -->
	<div v-if="modal" class="modal fade show d-block" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 id="exampleModalLabel" class="modal-title">¡Bienvenido a nuestra página!</h5>
					<button type="button" @click="openModal" class="btn-close"></button>
				</div>
				<div class="modal-body d-flex justify-content-center">
					<button type="button" @click="openModal" class="btn btn-primary">
						<font-awesome-icon :icon="['fab', 'google']" /> Iniciar sesión con Google
					</button>
				</div>
			</div>
		</div>
	</div>
</template>


<script setup>

const isMenuOpen = ref(false)
const modal = ref(false)
const router = useRouter()
const goToHome = () => {
	router.push('/')
}
const openModal = () => {
	modal.value = !modal.value
}
const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}

</script>

<style lang="scss" scoped>
.navbar {
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

	.dropdown-toggle {
		color: #fff;
	}

	.dropdown-menu {
		background-color: #292941;
		.dropdown-item {
			color: #fff;

			&:hover {
				background-color: #fff;
				color: #292941;
			}
		}
	}
}
.modal-content {
	background-color: #292941;
	color: #ffffff;
}

.btn-primary {
	background-color: #3949ab;
	border-color: #3949ab;
}

.btn-primary:hover {
	background-color: #303f9f;
	border-color: #303f9f;
}
.modal {
	background: rgba(0,0,0,0.5);
}
</style>
