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
			<a class="navbar-brand mx-auto justify-content-center text-center" href="#"><img class="w-25" src="/superteamlogo.png" alt="Logo"></a>

			<!-- Right Side -->
			<div class="d-flex">
				<!-- Get AI Guide -->
				<button class="btn me-2" type="button">Get AI Guide</button>
				<!-- Login -->
				<button class="btn me-2" type="button">Login</button>
				<!-- Sign Up -->
				<button class="btn" type="button">Sign Up</button>
			</div>
		</div>
	</nav>
</template>


<script setup>

const isMenuOpen = ref(false)
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
</style>
