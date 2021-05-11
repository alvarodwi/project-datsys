<template>
  <div id="app">
    <header>
      <nav class="flex items-center justify-center flex-wrap bg-steel-500 p-4">
        <div class="w-full block md:flex md:justify-end md:w-auto">
          <div class="font-sans">
            <router-link
              to="/novel"
              class="block md:inline-block text-xl text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Novel
            </router-link>
            <router-link
              to="/novel"
              class="block md:inline-block text-xl text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Author
            </router-link>
            <router-link
              to="/novel"
              class="block md:inline-block text-xl text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Illustrator
            </router-link>
            <router-link
              to="/novel"
              class="block md:inline-block text-xl text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Label
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
