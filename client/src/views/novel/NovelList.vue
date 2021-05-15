<template>
  <div class="container mx-auto px-4 sm:px-8 max-w-8xl rounded-lg">
    <back-button />
    <div class="py-8">
      <div class="flex w-full">
        <div class="py-2 text-sepia-500 flex flex-col w-4/5">
          <h1 class="text-4xl font-semibold tracking-wider">
            Novels
          </h1>
          <p class="text-lg">
            A list of novels we currently indexes.
          </p>
        </div>
        <div class="flex flex-row-reverse w-1/5">
          <button
            class="self-end py-2 px-4 my-4 bg-sepia-600 hover:bg-sepia-700 focus:ring-sepia-500 focus:ring-offset-sepia-200 text-steel-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            @click="$router.push('novel-add')"
          >
            Add Novel
          </button>
        </div>
      </div>
      <div class="container">
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-500 w-full py-2 px-4 bg-sepia-500 text-steel-700 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-steel-600 focus:border-transparent"
          placeholder="search title..."
          v-model="searchTitle"
          v-on:change="handleUpdateParams"
        />
      </div>
      <div class="container flex">
        <SortButton
          class="w-1/2"
          :options="['title', 'last_release', 'volume_count']"
          :default="'title'"
          @input="
            sortBy = $event.sort;
            ordering = $event.direction;
            handleUpdateParams();
          "
        />
        <PageSizeButton
          class="w-1/2 justify-end"
          :options="pageSizes"
          :default="3"
          @input="
            pageSize = $event;
            handleUpdateParams();
          "
        />
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full rounded-lg overflow-hidden">
          <div v-for="(novel, index) in novels" :key="index">
            <novel-card :novel="novel"></novel-card>
          </div>
          <div
            class="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <t-pagination
              :total-items="totalRows"
              :per-page="pageSize"
              :limit="3"
              v-model="page"
              @change="handlePageChange"
              variant="inverted"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../../components/base/BackButton.vue";
import NovelCard from "../../components/crud/novel/NovelCard.vue";
import NovelDataService from "../../services/NovelDataService";

export default {
  name: "novel-list",
  components: {
    NovelCard,
    BackButton,
  },
  data() {
    return {
      novels: [],
      searchTitle: "",
      sortBy: "title",
      ordering: "asc",

      page: 1,
      totalRows: 0,
      totalPages: 0,
      pageSize: 10,

      pageSizes: [3, 6, 12],
    };
  },
  methods: {
    getRequestParams(searchTitle, page, pageSize, sortBy, ordering) {
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

      if (sortBy) {
        params["sort_by"] = sortBy;
      }

      if (ordering) {
        params["order"] = ordering;
      }

      return params;
    },
    retrieveNovel() {
      const params = this.getRequestParams(
        this.searchTitle,
        this.page,
        this.pageSize,
        this.sortBy,
        this.ordering
      );

      console.log(params);

      NovelDataService.getAll(params)
        .then((response) => {
          const pagingData = response.data.data;
          this.novels = pagingData.result;
          this.totalRows = pagingData.totalItems;
          this.totalPages = pagingData.totalPages;
          console.log(pagingData);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    handleUpdateParams() {
      this.page = 1;
      this.retrieveNovel();
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
