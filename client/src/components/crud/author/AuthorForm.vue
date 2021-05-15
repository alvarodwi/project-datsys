<template>
  <div class="bg-sepia-500 w-3/4 mx-auto mt-8 p-8 rounded-lg">
    <div class="flex w-full flex-row">
      <div class="pt-4 text-steel-500">
        <h1 class="text-2xl font-semibold tracking-wider">
          {{ $route.params.id ? "Update Author" : "Create Author" }}
        </h1>
      </div>
      <div class="ml-auto" :class="{ hidden: !$route.params.id }">
        <button
          class="self-end py-2 px-4 mt-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-sepia-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
          @click="
            deleteAuthor();
            $router.go(-1);
          "
        >
          Delete
        </button>
      </div>
    </div>
    <div v-if="!submitted">
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
            class="self-end py-2 px-4 mt-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            @click="saveAuthor()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-lg tracking-wider">
        Author {{ $route.params.id ? "updated" : "created" }} successfully
      </h4>
      <button
        class="py-2 px-4 mt-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 text-sepia-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        @click="init()"
      >
        {{ $route.params.id ? "Update" : "Create" }} Again
      </button>
    </div>
  </div>
</template>

<script>
import AuthorDataService from "../../../services/AuthorDataService";

export default {
  name: "author-form",
  data() {
    return {
      author: {
        name: "",
        jpName: "",
      },
      submitted: false,
    };
  },
  methods: {
    init() {
      this.author = {};
      this.getAuthor(this.$route.params.id);
      this.submitted = false;
    },
    getAuthor(id) {
      AuthorDataService.get(id)
        .then((response) => {
          this.author = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    saveAuthor() {
      var data = {
        name: this.author.name,
        jpName: this.author.jpName,
      };

      if (this.$route.params.id) {
        AuthorDataService.update(this.author.id, this.author)
          .then((response) => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        AuthorDataService.create(data)
          .then((response) => {
            this.author.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    deleteAuthor() {
      AuthorDataService.delete(this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "author" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
