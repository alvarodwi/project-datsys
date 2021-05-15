<template>
  <div class="bg-sepia-500 w-3/4 mx-auto mt-8 p-8 rounded-lg">
    <div class="flex w-full flex-row">
      <div class="pt-4 text-steel-500">
        <h1 class="text-2xl font-semibold tracking-wider">
          {{ $route.params.id ? "Update Illustrator" : "Create Illustrator" }}
        </h1>
      </div>
      <div class="ml-auto" :class="{ hidden: !$route.params.id }">
        <button
          class="self-end py-2 px-4 mt-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-sepia-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
          @click="
            deleteIllustrator();
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

      <div class="flex w-full">
        <div class="ml-auto">
          <button
            class="self-end py-2 px-4 mt-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            @click="saveIllustrator()"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-lg tracking-wider">
        Illustrator {{ $route.params.id ? "updated" : "created" }} successfully
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
import IllustratorDataService from "../../../services/IllustratorDataService";

export default {
  name: "illustrator-form",
  data() {
    return {
      illustrator: {
        name: "",
        jpName: "",
      },
      submitted: false,
    };
  },
  methods: {
    init() {
      this.illustrator = {};
      this.getIllustrator(this.$route.params.id);
      this.submitted = false;
    },
    getIllustrator(id) {
      IllustratorDataService.get(id)
        .then((response) => {
          this.illustrator = response.data.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    saveIllustrator() {
      var data = {
        name: this.illustrator.name,
        jpName: this.illustrator.jpName,
      };

      if (this.$route.params.id) {
        IllustratorDataService.update(this.illustrator.id, this.illustrator)
          .then((response) => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        IllustratorDataService.create(data)
          .then((response) => {
            this.illustrator.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    deleteIllustrator() {
      IllustratorDataService.delete(this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "illustrator" });
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
