<template>
  <div class="bg-sepia-500 w-3/4 mx-auto mt-8 p-8 rounded-lg">
    <div class="py-2 text-steel-500">
      <h1 class="text-4xl font-semibold tracking-wider">
        Create Author
      </h1>
    </div>
    <div class="my-8">
      <label for="name" class="text-steel-500">Name</label>
      <input
        type="text"
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="name"
        required
        v-model="author.name"
        name="name"
      />
    </div>

    <div class="my-8">
      <label for="jpName">JP Name</label>
      <input
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="jpName"
        required
        v-model="author.jpName"
        name="jpName"
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
import AuthorDataService from "../../../services/AuthorDataService";

export default {
  name: "add-author",
  data() {
    return {
      author: {
        id: null,
        name: "",
        jpName: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveAuthor() {
      var data = {
        name: this.author.name,
        jpName: this.author.jpName,
      };

      AuthorDataService.create(data)
        .then((response) => {
          this.author.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newAuthor() {
      this.submitted = false;
      this.author = {};
    },
  },
};
</script>
