<template>
  <div class="container mx-auto px-4 sm:px-8 max-w-8xl rounded-lg">
    <back-button />
    <div class="py-8">
      <div class="flex w-full">
        <div class="py-2 text-sepia-500 flex flex-col w-4/5">
          <h1 class="text-4xl font-semibold tracking-wider">
            Labels
          </h1>
          <p class="text-lg">
            A list of labels we currently indexes.
          </p>
        </div>
        <div class="flex flex-row-reverse w-1/5">
          <button
            class="self-end py-2 px-4 my-4 bg-sepia-600 hover:bg-sepia-700 focus:ring-sepia-500 focus:ring-offset-sepia-200 text-steel-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            @click="$router.push('label-add')"
          >
            Add Label
          </button>
        </div>
      </div>
      <div class="container">
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-500 w-full py-2 px-4 bg-sepia-500 text-steel-700 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-steel-600 focus:border-transparent"
          placeholder="search name..."
          v-model="searchName"
          v-on:change="handleUpdateParams"
        />
      </div>
      <div class="container flex">
        <SortButton
          class="w-1/2"
          :options="['name', 'novel_count']"
          :default="'name'"
          @input="
            sortBy = $event.sort;
            ordering = $event.direction;
            handleUpdateParams();
          "
        />
        <PageSizeButton
          class="w-1/2 justify-end"
          :options="pageSizes"
          :default="5"
          @input="
            pageSize = $event;
            handleUpdateParams();
          "
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
                <th
                  scope="col"
                  class="px-5 py-3 bg-sepia-600  border-b border-steel-200 text-steel-500"
                >
                  URL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(label, index) in labels" :key="index">
                <td
                  class="p-4 border-b-2 border-steel-300 bg-sepia-500 text-steel-500"
                >
                  <div class="font-semibold">
                    {{ label.name }}
                  </div>
                  <div class="text-sm">
                    {{ label.jpName }}
                  </div>
                  <router-link :to="'/label/' + label.id" class="text-sm"
                    >Details</router-link
                  >
                </td>
                <td
                  class="p-4 border-b-2 border-steel-300 bg-sepia-500 text-steel-500"
                >
                  {{ label.link }}
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
import LabelDataService from "../../services/LabelDataService";

export default {
  name: "label-list",
  data() {
    return {
      labels: [],
      searchName: "",
      sortBy: "name",
      ordering: "asc",

      page: 1,
      totalRows: 0,
      totalPages: 0,
      pageSize: 5,

      pageSizes: [5, 10, 20],
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
    retrieveLabel() {
      const params = this.getRequestParams(
        this.searchName,
        this.page,
        this.pageSize,
        this.sortBy,
        this.ordering
      );

      console.log(params);

      LabelDataService.getAll(params)
        .then((response) => {
          const pagingData = response.data.data;
          this.labels = pagingData.result;
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
      this.retrieveLabel();
    },

    handlePageChange(value) {
      this.page = value;
      this.retrieveLabel();
    },

    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveLabel;
    },
  },
  mounted() {
    this.retrieveLabel();
  },
};
</script>
