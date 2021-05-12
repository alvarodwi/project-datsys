<template>
  <div id="app">
    <header class="sticky top-0">
      <nav class="flex items-center justify-center flex-wrap bg-steel-500 p-4">
        <div class="flex w-auto md:text-sm">
          <div class="font-sans">
            <router-link
              to="/novel"
              class="inline-block text-base md:text-lg text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Novel
            </router-link>
            <router-link
              to="/author"
              class="inline-block text-base md:text-lg text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Author
            </router-link>
            <router-link
              to="/illustrator"
              class="inline-block text-base md:text-lg text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Illustrator
            </router-link>
            <router-link
              to="/label"
              class="inline-block text-base md:text-lg text-center px-4 py-2 leading-none rounded text-sepia-500 border-sepia-500 hover:border-transparent hover:text-steel-500 hover:bg-sepia-500"
            >
              Label
            </router-link>
          </div>
        </div>
      </nav>
    </header>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
nav{
    letter-spacing: 1px;
    position: relative;
    align-items: center;
    width: 100%;
    top: 100%;
    left: 0;
}
header{
    position: fixed;
    z-index: 999;
}
</style>

<script>
export default {
  name: "app",
};
</script>
