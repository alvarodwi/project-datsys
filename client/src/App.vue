<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Project-Datsys</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/series" class="nav-link">Series</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/series/add" class="nav-link">Add Series</router-link>
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