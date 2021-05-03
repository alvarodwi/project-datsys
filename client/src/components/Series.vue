<template>
  <div v-if="currentSeries" class="edit-form">
    <h4>Series</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentSeries.title"
        />
      </div>
      <div class="form-group">
        <label for="jp_title">JP Title</label>
        <input type="text" class="form-control" id="jp_title"
          v-model="currentSeries.jp_title"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2"
      @click="deleteSeries"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateSeries"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Series...</p>
  </div>
</template>

<script>
import SeriesDataService from "../services/SeriesDataService";

export default {
  name: "series",
  data() {
    return {
      currentSeries: null,
      message: ''
    };
  },
  methods: {
    getSeries(id) {
      SeriesDataService.get(id)
        .then(response => {
          this.currentSeries = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateSeries() {
      SeriesDataService.update(this.currentSeries.id, this.currentSeries)
        .then(response => {
          console.log(response.data);
          this.message = 'The series was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteSeries() {
      SeriesDataService.delete(this.currentSeries.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "series" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getSeries(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>