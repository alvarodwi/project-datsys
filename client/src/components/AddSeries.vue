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
          v-model="series.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="jp_title">JP Title</label>
        <input
          class="form-control"
          id="jp_title"
          required
          v-model="series.jp_title"
          name="jp_title"
        />
      </div>

      <button @click="saveSeries" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newSeries">Add</button>
    </div>
  </div>
</template>

<script>
import SeriesDataService from "../services/SeriesDataService";

export default {
  name: "add-series",
  data() {
    return {
      series: {
        id: null,
        title: "",
        jp_title: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {
    saveSeries() {
      var data = {
        title: this.series.title,
        jp_title: this.series.jp_title
      };

      SeriesDataService.create(data)
        .then(response => {
          this.series.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newSeries() {
      this.submitted = false;
      this.series = {};
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