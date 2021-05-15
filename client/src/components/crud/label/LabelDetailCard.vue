<template>
  <div>
    <div
      class="w-full mx-auto p-4 flex flex-col md:flex-row bg-sepia-500 rounded-lg"
    >
      <div class="flex-1 mt-auto mb-4 md:mb-auto">
        <p class="text-steel-500 font-semibold text-4xl">{{ label.name }}</p>
        <p class="text-steel-500 text-xl">{{ label.jpName }}</p>
        <p class="mt-4 text-steel-500 font-semibold text-2xl">URL</p>
        <p class="text-steel-500 text-xl">
          <a :href="label.link">{{ label.link }}</a>
        </p>
      </div>
    </div>
    <div class="bg-gray-500 w-auto h-8 -mx-4"></div>
    <div>
      <div class="w-full mt-8 p-4 flex flex-col md:flex-row">
        <div class="w-full flex flex-row">
          <h1
            class="mr-auto text-steel-500 font-semibold text-2xl md:text-4xl tracking-wide"
          >
            Works
          </h1>
          <div class="ml-0 px-4 py-2 w-max rounded-lg bg-sepia-600">
            <p class="text-steel-500 text-sm md:text-lg font-semibold">
              {{ label.novelCount }} novels
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full mt-4 p-4 flex flex-col md:flex-row flex-wrap place-content-center"
    >
      <div
        v-for="(novel, index) in label.novels"
        :key="index"
        class="flex flex-col w-full md:w-1/5 m-4"
      >
        <img
          class="w-full h-auto rounded-lg"
          :src="novel.releases[0].coverUrl"
          alt="novel-cover"
        />
        <button
          class="self-center py-2 px-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 w-full md:w-max transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full mt-4"
          @click="
            $router.push({ name: 'novel-detail', params: { id: novel.id } })
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
import LabelDataService from "../../../services/LabelDataService";

export default {
  name: "label-detail-card",
  data() {
    return {
      label: {},
    };
  },
  methods: {
    getLabel(id) {
      LabelDataService.get(id)
        .then((response) => {
          this.label = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getLabel(this.$route.params.id);
  },
};
</script>
