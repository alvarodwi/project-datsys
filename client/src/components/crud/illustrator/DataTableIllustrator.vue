<template>
  <div class="container mx-auto px-4 sm:px-8 max-w-8xl rounded-lg">
    <div class="py-8">
      <div class="py-2 text-sepia-500">
        <h1 class="text-4xl font-semibold tracking-wider">
          Illustrators
        </h1>
        <p class="text-lg">
          A list of illustrator of illustrators we currently indexes.
        </p>
      </div>
      <div class="container min-w-full">
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-500 w-full py-2 px-4 bg-sepia-500 text-steel-700 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-steel-600 focus:border-transparent"
          placeholder="search name..."
          v-model="searchName"
          v-on:change="handleUpdateParams"
        />
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr class="font-bold text-left text-lg">
                <th
                  scope="col"
                  class="px-5 py-3 bg-sepia-600  border-b border-steel-200 text-steel-500"
                >
                  Name
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(illustrator, index) in illustrators" :key="index">
                <td
                  class="p-4 border-b-2 border-steel-300 bg-sepia-500 text-steel-500"
                >
                  <div class="font-semibold">
                    {{ illustrator.name }}
                  </div>
                  <div class="text-sm">
                    {{ illustrator.jpName }}
                  </div>
                  <router-link
                    :to="'/illustrator/' + illustrator.id"
                    class="text-sm"
                    >Details</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 bg-sepia-500 py-5 flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <t-pagination
              :total-items="totalRows"
              :per-page="pageSize"
              :limit="3"
              v-model="page"
              @change="handlePageChange"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IllustratorDataService from "../../../services/IllustratorDataService";

export default {
  name: "illustrator-list",
  data() {
    return {
      illustrators: [],
      searchName: "",
      sortBy: "name",
      ordering: "asc",

      page: 1,
      totalRows: 0,
      totalPages: 0,
      pageSize: 10,

      pageSizes: [10, 20, 40],
    };
  },
  methods: {
    getRequestParams(searchName, page, pageSize, sortBy, ordering) {
      let params = {};

      if (searchName) {
        params["name"] = searchName;
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
    retrieveIllustrator() {
      const params = this.getRequestParams(
        this.searchName,
        this.page,
        this.pageSize,
        this.sortBy,
        this.ordering
      );

      console.log(params);

      IllustratorDataService.getAll(params)
        .then((response) => {
          const pagingData = response.data.data;
          this.illustrators = pagingData.result;
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
      this.retrieveIllustrator();
    },

    handlePageChange(value) {
      this.page = value;
      this.retrieveIllustrator();
    },

    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveIllustrator;
    },
  },
  mounted() {
    this.retrieveIllustrator();
  },
};
</script>
