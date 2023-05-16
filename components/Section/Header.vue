<template>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <!-- Left Side -->
    <div class="d-flex">
      <!-- Dropdown Menu -->
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Courses
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
    <a class="navbar-brand mx-auto" href="#">Logo</a>

    <!-- Right Side -->
    <div class="d-flex">
      <!-- Get AI Guide -->
      <button class="btn btn-primary me-2" type="button">Get AI Guide</button>
      <!-- Login -->
      <button class="btn btn-outline-secondary me-2" type="button">Login</button>
      <!-- Sign Up -->
      <button class="btn btn-secondary" type="button">Sign Up</button>
    </div>
  </div>
</nav>

</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>