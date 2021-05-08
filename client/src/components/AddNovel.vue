<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="novel.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="jp_title">JP Title</label>
        <input
          class="form-control"
          id="jp_title"
          required
          v-model="novel.jp_title"
          name="jp_title"
        />
      </div>

      <button @click="saveNovel" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newNovel">Add</button>
    </div>
  </div>
</template>

<script>
import NovelDataService from "../services/NovelDataService";

export default {
  name: "add-novel",
  data() {
    return {
      novel: {
        id: null,
        title: "",
        jp_title: "",
      },
      submitted: false
    };
  },
  methods: {
    saveNovel() {
      var data = {
        title: this.novel.title,
        jp_title: this.novel.jp_title
      };

      NovelDataService.create(data)
        .then(response => {
          this.novel.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newNovel() {
      this.submitted = false;
      this.novel = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>