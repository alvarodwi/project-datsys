<template>
  <div v-if="currentNovel" class="edit-form">
    <h4>Novel</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentNovel.title"
        />
      </div>
      <div class="form-group">
        <label for="jpTitle">JP Title</label>
        <input type="text" class="form-control" id="jpTitle"
          v-model="currentNovel.jpTitle"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteNovel"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateNovel"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Novel...</p>
  </div>
</template>

<script>
import NovelDataService from "../services/NovelDataService";

export default {
  name: "novel",
  data() {
    return {
      currentNovel: null,
      message: ''
    };
  },
  methods: {
    getNovel(id) {
      NovelDataService.get(id)
        .then(response => {
          this.currentNovel = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateNovel() {
      NovelDataService.update(this.currentNovel.id, this.currentNovel)
        .then(response => {
          console.log(response.data);
          this.message = 'The novel was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteNovel() {
      NovelDataService.delete(this.currentNovel.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "novel" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getNovel(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>