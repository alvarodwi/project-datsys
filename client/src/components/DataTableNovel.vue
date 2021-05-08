<template>
  <div>
    <h1>Data Table Novel</h1>

    <t-table :headers="['Title', 'JP Title', 'Genre', 'Link']" :data="novels">
    </t-table>
  </div>
</template>

<script>
import NovelDataService from "../services/NovelDataService";

export default {
  name: "novel-list",
  data() {
    return {
      novels: [],
      searchTitle: "",

      page: 1,
      count: 0,
      pageSize: 10,

      pageSizes: [10, 20, 40],
    };
  },
  methods: {
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};

      if (searchTitle) {
        params["title"] = searchTitle;
      }

      if (page) {
        params["page"] = page - 1;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },

    retrieveNovel() {
      const params = this.getRequestParams(
        this.searchTitle,
        this.page,
        this.pageSize
      );

      NovelDataService.getAll(params)
        .then((response) => {
          const pagingData = response.data.data;
          this.novels = pagingData.result;
          this.count = pagingData.totalItems;
          console.log(pagingData);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    handlePageChange(value) {
      this.page = value;
      this.retrieveNovel();
    },

    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveNovel;
    },
  },
  mounted() {
    this.retrieveNovel();
  },
};
</script>
