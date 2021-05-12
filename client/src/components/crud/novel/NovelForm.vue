<template>
  <div class="bg-sepia-500 w-3/4 mx-auto mt-8 p-8 rounded-lg">
    <div class="py-2 text-steel-500">
      <h1 class="text-4xl font-semibold tracking-wider">
        Create Novel
      </h1>
    </div>
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
    <div class="form-group">
      <label for="genre">Genre</label>
      <input
        class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
        id="genre"
        required
        v-model="novel.genre"
        name="genre"
      />
    </div>
    <div class="flex items-end w-full">
      <div>
        <button
          type="submit"
          class="float-right py-2 px-4 mt-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import NovelDataService from "../../../services/NovelDataService";

export default {
  name: "add-novel",
  data() {
    return {
      novel: {
        id: null,
        title: "",
        jpTitle: "",
        plot: "",
        genre: "",
        link: "",
        authorId: 0,
        illustratorId: 0,
        labelId: 0,
      },
      submitted: false,
    };
  },
  methods: {
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

      NovelDataService.create(data)
        .then((response) => {
          this.novel.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newNovel() {
      this.submitted = false;
      this.novel = {};
    },
  },
};
</script>
