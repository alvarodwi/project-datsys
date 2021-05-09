<template>
  <div>
    <h1>Data Table Novel</h1>

    <div>
      <t-input v-model="searchTitle" @input="handleUpdateParams()" />
    </div>

    <div>
      <div>
        <t-rich-select
          v-model="sortBy"
          :options="['title', 'total_volume', 'last_release']"
          @change="handleUpdateParams()"
        ></t-rich-select>
      </div>
    </div>

    <t-table
      :headers="[
        'Title',
        'JP Title',
        'Author',
        'Illustrator',
        'Total Volume',
        'Last Release',
      ]"
      :data="novels"
    >
      <template slot="row" slot-scope="props">
        <tr
          :class="[
            props.trClass,
            props.rowIndex % 2 === 0 ? 'bg-gray-100' : '',
          ]"
        >
          <td :class="props.tdClass">
            {{ props.row.title }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.jpTitle }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.author.name }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.illustrator.name }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.totalVolume }}
          </td>
          <td :class="props.tdClass">
            {{ moment(props.row.lastRelease).format("MMMM DD, YYYY") }}
          </td>
        </tr>
      </template>
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
      sortBy: "title",
      ordering: "asc",

      page: 1,
      count: 0,
      pageSize: 10,

      pageSizes: [10, 20, 40],
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
          this.count = pagingData.totalItems;
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
