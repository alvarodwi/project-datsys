<template>
  <div class="bg-sepia-500 w-3/4 mx-auto mt-8 p-8 rounded-lg">
    <div class="py-2 text-steel-500">
      <h1 class="text-4xl font-semibold tracking-wider">
        Create Illustrator
      </h1>
    </div>
    <div class="my-8">
      <label for="name" class="text-steel-500">Name</label>
      <input
        type="text"
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="name"
        required
        v-model="illustrator.name"
        name="name"
      />
    </div>

    <div class="my-8">
      <label for="jpName">JP Name</label>
      <input
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="jpName"
        required
        v-model="illustrator.jpName"
        name="jpName"
      />
    </div>
  </div>
</template>

<script>
import IllustratorDataService from "../../../services/IllustratorDataService";

export default {
  name: "add-illustrator",
  data() {
    return {
      illustrator: {
        id: null,
        name: "",
        jpName: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveIllustrator() {
      var data = {
        name: this.illustrator.name,
        jpName: this.illustrator.jpName,
      };

      IllustratorDataService.create(data)
        .then((response) => {
          this.illustrator.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newIllustrator() {
      this.submitted = false;
      this.illustrator = {};
    },
  },
};
</script>
