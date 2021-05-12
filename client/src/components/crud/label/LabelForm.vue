<template>
  <div class="bg-sepia-500 w-3/4 mx-auto mt-8 p-8 rounded-lg">
    <div class="py-2 text-steel-500">
      <h1 class="text-4xl font-semibold tracking-wider">
        Create Label
      </h1>
    </div>
    <div class="my-8">
      <label for="name" class="text-steel-500">Name</label>
      <input
        type="text"
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="name"
        required
        v-model="label.name"
        name="name"
      />
    </div>

    <div class="my-8">
      <label for="jpName">JP Name</label>
      <input
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="jpName"
        required
        v-model="label.jpName"
        name="jpName"
      />
    </div>

    <div class="my-8">
      <label for="link">Link</label>
      <input
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="link"
        required
        v-model="label.link"
        name="link"
      />
    </div>

    <div class="flex w-full">
      <div class="ml-auto">
        <button
          type="submit"
          class="self-end py-2 px-4 mt-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LabelDataService from "../../../services/LabelDataService";

export default {
  name: "add-label",
  data() {
    return {
      label: {
        id: null,
        name: "",
        jpName: "",
        link: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveLabel() {
      var data = {
        name: this.label.name,
        jpName: this.label.jpName,
        link: this.label.link,
      };

      LabelDataService.create(data)
        .then((response) => {
          this.label.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newLabel() {
      this.submitted = false;
      this.label = {};
    },
  },
};
</script>
