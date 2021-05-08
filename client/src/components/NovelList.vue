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
      <h4>Novel List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(novel, index) in novels"
          :key="index"
          @click="setActiveNovel(novel, index)"
        >
          {{ novel.title }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllNovel">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentNovel">
        <h4>Novel</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentNovel.title }}
        </div>
        <div>
          <label><strong>JP Title:</strong></label> {{ currentNovel.jp_title }}
        </div>

        <a class="badge badge-warning"
          :href="'/novel/' + currentNovel.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Novel...</p>
      </div>
    </div>
  </div>
</template>

<script>
import NovelDataService from "../services/NovelDataService";

export default {
  name: "novel-list",
  data() {
    return {
      novels: [],
      currentNovel: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveNovel() {
      NovelDataService.getAll()
        .then(response => {
          this.novels = response.data.data.result;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveNovel();
      this.currentNovel = null;
      this.currentIndex = -1;
    },

    setActiveNovel(novel, index) {
      this.currentNovel = novel;
      this.currentIndex = index;
    },

    removeAllNovel() {
      NovelDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchTitle() {
      NovelDataService.findByTitle(this.title)
        .then(response => {
          this.novels = response.data.data.result;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveNovel();
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