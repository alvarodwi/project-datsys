<template>
  <div>
    <div class="flex flex-col md:flex-row">
      <div class="p-4">
        <img
          class="mx-auto md:mx-0 w-96 h-auto rounded-lg"
          :src="release.coverUrl"
          :alt="release.novel.title + ':' + release.volumeNumber"
        />
      </div>
      <div class="p-4 w-full md:w-1/3">
        <h1
          class="text-steel-500 font-semibold text-2xl md:text-4xl tracking-wide"
        >
          {{ release.novel.title }}
        </h1>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-16">
          {{ release.novel.jpTitle }}
        </p>

        <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
          Volume Number
        </h2>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
          {{ release.volumeNumber }}
        </p>

        <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
          Release Date
        </h2>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
          {{ dayjs(release.date).format("MMMM DD, YYYY") }}
        </p>

        <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
          Pages
        </h2>
        <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
          {{ release.page }}
        </p>
      </div>
    </div>
    <div class="p-4 mb-8">
      <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
        Online Shops
      </h2>
      <a
        class="mt-4 text-steel-500 text-base md:text-xl mb-8"
        :href="release.storeUrl"
        >{{ release.storeUrl }}</a
      >
    </div>
  </div>
</template>

<script>
import ReleaseDataService from "../../../services/ReleaseDataService";

export default {
  name: "release-detail-card",
  data() {
    return {
      release: {},
    };
  },
  methods: {
    getRelease(id) {
      ReleaseDataService.get(id)
        .then((response) => {
          this.release = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getRelease(this.$route.params.id);
  },
};
</script>
