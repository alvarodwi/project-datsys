<template>
  <div>
    <div class="flex flex-col md:flex-row">
      <div class="p-4">
        <img
          class="mx-auto md:mx-0 w-96 h-auto rounded-lg"
          :src="novel.coverUrl"
          alt="adachi"
        />
      </div>
      <div class="p-4">
        <h1
          class="text-steel-500 font-semibold text-2xl md:text-4xl tracking-wide"
        >
          {{ novel.title }}
        </h1>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-16">
          {{ novel.jpTitle }}
        </p>

        <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
          Author
        </h2>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
          {{ novel.author.name }}
        </p>

        <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
          Illustrator
        </h2>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
          {{ novel.illustrator.name }}
        </p>

        <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
          Genre
        </h2>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
          {{ novel.genre }}
        </p>
      </div>
    </div>
    <div class="p-4 mb-12">
      <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
        Plot
      </h2>
      <p class="text-steel-500 text-base md:text-xl mt-4 mb-12 text-justify">
        {{ novel.plot }}
      </p>

      <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
        Label
      </h2>
      <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
        {{ novel.label.name }}
      </p>

      <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
        Links
      </h2>
      <a class="mt-4 text-steel-500 text-base md:text-xl mb-8" href="">{{
        novel.link
      }}</a>
    </div>
    <div class="bg-gray-500 w-auto h-8 -mx-4"></div>
    <div>
      <div class="w-full mt-8 p-4 flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 flex flex-row">
          <h1
            class="mr-auto text-steel-500 font-semibold text-2xl md:text-4xl tracking-wide"
          >
            Releases
          </h1>
          <div class="mr-0 md:mr-32 px-4 py-2 w-max rounded-lg bg-sepia-600">
            <p class="text-steel-500 text-sm md:text-lg font-semibold">
              {{ novel.volumeCount }} volumes
            </p>
          </div>
        </div>
        <button
          class="ml-auto py-2 px-4 bg-geyser-600 hover:bg-geyser-700 focus:ring-geyser-500 focus:ring-offset-geyser-200 text-steel-500 w-full md:w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4 md:mt-0"
          @click="
            $router.push({
              name: 'release-add',
              params: { id: $route.params.id },
            })
          "
        >
          Add Release
        </button>
      </div>
    </div>
    <div
      class="w-full mt-4 p-4 flex flex-col md:flex-row flex-wrap place-content-center"
    >
      <div
        v-for="(release, index) in novel.releases"
        :key="index"
        class="flex flex-col w-full md:w-1/5 m-4"
      >
        <img
          class="w-full h-auto rounded-lg"
          :src="release.coverUrl"
          alt="adachi"
        />
        <button
          class="self-center py-2 px-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 w-full md:w-max transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full mt-4"
          @click="
            $router.push({ name: 'release-detail', params: { id: release.id } })
          "
        >
          <p class="text-sepia-500 text-sm md:text-lg">
            View Details
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NovelDataService from "../../../services/NovelDataService";

export default {
  name: "novel-detail-card",
  data() {
    return {
      novel: {},
    };
  },
  methods: {
    getNovel(id) {
      NovelDataService.get(id)
        .then((response) => {
          this.novel = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getNovel(this.$route.params.id);
  },
};
</script>
