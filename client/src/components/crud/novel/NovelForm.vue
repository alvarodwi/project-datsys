<template>
  <div class="bg-sepia-500 w-3/4 mx-auto rounded-lg">
    <div class="flex w-full flex-row">
      <div class="pt-4 text-steel-500">
        <h1 class="text-2xl font-semibold tracking-wider">
          {{ $route.params.id ? "Update Novel" : "Create Novel" }}
        </h1>
      </div>
      <div class="ml-auto" :class="{ hidden: !$route.params.id }">
        <button
          class="self-end py-2 px-4 mt-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-sepia-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
          @click="
            deleteNovel();
            $router.go(-1);
          "
        >
          Delete
        </button>
      </div>
    </div>
    <div v-if="!submitted">
      <div class="my-8">
        <label for="title" class="text-steel-500">Title</label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="title"
          required
          v-model="novel.title"
          name="title"
        />
      </div>

      <div class="my-8">
        <label for="jpTitle">JP Title</label>
        <input
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="jpTitle"
          required
          v-model="novel.jpTitle"
          name="jpTitle"
        />
      </div>

      <div class="my-8">
        <label for="link">Link</label>
        <input
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="link"
          required
          v-model="novel.link"
          name="link"
        />
      </div>

      <div class="form-group">
        <label for="plot">Plot</label>
        <textarea
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="plot"
          required
          rows="5"
          cols="40"
          v-model="novel.plot"
          name="plot"
        />
      </div>
      <div class="form-group mt-4">
        <label for="genre">Genre</label>
        <input
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="genre"
          required
          v-model="novel.genre"
          name="genre"
        />
      </div>
      <div class="form-group mt-4">
        <label for="authorId">Author</label>
        <t-rich-select
          :fetch-options="fetchAuthors"
          :placeholder="
            _.isEmpty(novel.author) ? 'select an option' : novel.author.name
          "
          value-attribute="id"
          text-attribute="name"
          :minimum-input-length="1"
          v-model="novel.authorId"
          name="authorId"
          id="authorId"
        />
      </div>
      <div class="form-group mt-4">
        <label for="illustratorId">Illustrator</label>
        <t-rich-select
          :fetch-options="fetchIllustrators"
          :placeholder="
            _.isEmpty(novel.illustrator)
              ? 'select an option'
              : novel.illustrator.name
          "
          value-attribute="id"
          text-attribute="name"
          :minimum-input-length="1"
          v-model="novel.illustratorId"
          name="illustratorId"
          id="illustratorId"
        />
      </div>
      <div class="form-group mt-4">
        <label for="labelId">Label</label>
        <t-rich-select
          :fetch-options="fetchLabels"
          :placeholder="
            _.isEmpty(novel.label) ? 'select an option' : novel.label.name
          "
          value-attribute="id"
          text-attribute="name"
          :minimum-input-length="1"
          v-model="novel.labelId"
          name="labelId"
          id="labelId"
        />
      </div>
      <div class="flex w-full">
        <div class="ml-auto">
          <button
            type="submit"
            class="self-end py-2 px-4 mt-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            @click="saveNovel"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-lg tracking-wider">
        Novel {{ $route.params.id ? "updated" : "created" }} successfully
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
import NovelDataService from "../../../services/NovelDataService";

export default {
  name: "novel-form",
  data() {
    return {
      novel: {
        id: null,
        title: "",
        jpTitle: "",
        plot: "",
        genre: "",
        link: "",
      },
      submitted: false,
    };
  },
  methods: {
    init() {
      this.novel = {
        id: null,
        title: "",
        jpTitle: "",
        plot: "",
        genre: "",
        link: "",
        authorId: 0,
        illustratorId: 0,
        labelId: 0,
      };
      this.getNovel(this.$route.params.id);
      this.submitted = false;
    },
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
    saveNovel() {
      var data = {
        title: this.novel.title,
        jpTitle: this.novel.jpTitle,
        plot: this.novel.plot,
        genre: this.novel.genre,
        link: this.novel.link,
        authorId: this.novel.authorId,
        illustratorId: this.novel.illustratorId,
        labelId: this.novel.labelId,
      };

      if (this.$route.params.id) {
        NovelDataService.update(this.novel.id, this.novel)
          .then((response) => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        NovelDataService.create(data)
          .then((response) => {
            this.novel.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    deleteNovel() {
      NovelDataService.delete(this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "novel" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchAuthors(q) {
      return fetch(`http://localhost:8090/api/author?name=${q}`)
        .then((response) => response.json())
        .then((data) => ({ results: data.data.result }));
    },
    fetchIllustrators(q) {
      return fetch(`http://localhost:8090/api/illustrator?name=${q}`)
        .then((response) => response.json())
        .then((data) => ({ results: data.data.result }));
    },
    fetchLabels(q) {
      return fetch(`http://localhost:8090/api/label?name=${q}`)
        .then((response) => response.json())
        .then((data) => ({ results: data.data.result }));
    },
  },
  mounted() {
    this.init();
  },
};
</script>
