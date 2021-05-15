<template>
  <div class="bg-sepia-500 w-3/4 mx-auto rounded-lg">
    <div class="flex w-full flex-row">
      <div class="pt-4 text-steel-500">
        <h1 class="text-2xl font-semibold tracking-wider">
          {{ $route.params.id ? "Update Release" : "Create Release" }}
        </h1>
      </div>
      <div class="ml-auto" :class="{ hidden: !$route.params.id }">
        <button
          class="self-end py-2 px-4 mt-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-sepia-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
          @click="
            deleteRelease();
            $router.go(-1);
          "
        >
          Delete
        </button>
      </div>
    </div>
    <div v-if="!submitted">
      <div class="my-8">
        <label for="volumeNumber" class="text-steel-500">Volume Number</label>
        <input
          type="text"
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="volumeNumber"
          required
          v-model="release.volumeNumber"
          name="VolumeNumber"
        />
      </div>
      <div class="form-group mt-4">
        <label for="date">Date</label>
        <input
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="date"
          type="date"
          required
          v-model="release.date"
          name="date"
        />
      </div>
      <div class="my-8">
        <label for="page">Page Count</label>
        <input
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="page"
          required
          v-model="release.page"
          name="page"
        />
      </div>
      <div class="form-group mt-4">
        <label for="storeUrl">Store URL</label>
        <input
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="storeUrl"
          required
          v-model="release.storeUrl"
          name="storeUrl"
        />
      </div>
      <div class="form-group mt-4">
        <label for="coverUrl">Cover URL</label>
        <input
          class="rounded-lg border-transparent flex-1 appearance-none border border-steel-300 w-full py-2 px-4 bg-gray-300 text-steel-500 placeholder-steel-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          id="coverUrl"
          required
          v-model="release.coverUrl"
          name="coverUrl"
        />
      </div>
      <div class="flex w-full">
        <div class="ml-auto">
          <button
            type="submit"
            class="self-end py-2 px-4 mt-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            @click="saveRelease"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-lg tracking-wider">
        Release {{ $route.params.id ? "updated" : "created" }} successfully
      </h4>
      <button
        class="py-2 px-4 mt-4 bg-steel-600 hover:bg-steel-700 focus:ring-steel-500 focus:ring-offset-steel-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        @click="init()"
      >
        {{ $route.params.id ? "Update" : "Create" }} Again
      </button>
    </div>
  </div>
</template>

<script>
import ReleaseDataService from "../../../services/ReleaseDataService";

export default {
  name: "release-form",
  data() {
    return {
      release: {},
      submitted: false,
    };
  },
  methods: {
    init() {
      this.release = {
        id: null,
        volumeNumber: "",
        date: "",
        page: "",
        storeUrl: "",
        coverUrl: "",
        novelId: this.$route.params.novelId,
      };
      if (this.$route.params.id) this.getRelease(this.$route.params.id);
      this.submitted = false;
    },
    getRelease(id) {
      ReleaseDataService.get(id)
        .then((response) => {
          this.release = response.data.data;
          this.release.date = this.dayjs(this.release.date).format(
            "YYYY-MM-DD"
          );
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    saveRelease() {
      var data = {
        volumeNumber: this.release.volumeNumber,
        page: this.release.page,
        date: this.release.date,
        coverUrl: this.release.coverUrl,
        storeUrl: this.release.storeUrl,
        novelId: this.release.novelId,
      };

      if (this.$route.params.id) {
        ReleaseDataService.update(this.release.id, this.release)
          .then((response) => {
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        ReleaseDataService.create(data)
          .then((response) => {
            this.release.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    deleteRelease() {
      ReleaseDataService.delete(this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "release" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
