<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Series List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(serie, index) in series"
          :key="index"
          @click="setActiveSeries(serie, index)"
        >
          {{ serie.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllSeries">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentSeries">
        <h4>Series</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentSeries.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentSeries.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentSeries.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/series/' + currentSeries.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Series...</p>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesDataService from "../services/SeriesDataService";

export default {
  name: "series-list",
  data() {
    return {
      series: [],
      currentSeries: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveSeries() {
      SeriesDataService.getAll()
        .then(response => {
          this.series = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveSeries();
      this.currentSeries = null;
      this.currentIndex = -1;
    },

    setActiveSeries(tutorial, index) {
      this.currentSeries = tutorial;
      this.currentIndex = index;
    },

    removeAllSeries() {
      SeriesDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      SeriesDataService.findByTitle(this.title)
        .then(response => {
          this.series = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveSeries();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>