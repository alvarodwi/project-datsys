<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Project-Datsys</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/novel" class="nav-link">Novel</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/novel/add" class="nav-link">Add Novel</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>