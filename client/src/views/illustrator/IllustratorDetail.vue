<template>
  <div>
    <div class="w-3/4 mx-auto">
      <button
        class="py-4 px-4 flex justify-center items-center my-4 bg-sepia-500 hover:bg-sepia-700 focus:ring-sepia-500 focus:ring-offset-sepia-200 text-steel-500 w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
        @click="$router.go(-1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
            fill="rgba(59,73,84,1)"
          />
        </svg>
        <span class="mx-2">Back</span>
      </button>
    </div>
    <div class="flex flex-wrap">
      <div class="my-4 w-3/4 mx-auto">
        <ul class="flex cursor-pointer bg-transparent">
          <li>
            <a
              class="text-sm font-semibold uppercase py-2 px-6 rounded bg-steel-500 leading-normal border-b-2"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-sepia-500 border-sepia-500': openTab !== 1,
                'text-steel-500 bg-sepia-500 border-steel-500': openTab === 1,
              }"
            >
              Detail
            </a>
          </li>
          <li>
            <a
              class="text-sm font-semibold uppercase py-2 px-6 rounded bg-steel-500 leading-normal border-b-2"
              v-on:click="toggleTabs(2)"
              v-bind:class="{
                'text-sepia-500 border-sepia-500': openTab !== 2,
                'text-steel-500 bg-sepia-500 border-steel-500': openTab === 2,
              }"
            >
              Edit
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col break-words bg-sepia-500 mb-6 shadow-lg rounded"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div
                v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
              >
                <illustrator-detail-card />
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <illustrator-form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IllustratorForm from "../../components/crud/illustrator/IllustratorForm.vue";
import IllustratorDetailCard from "../../components/crud/illustrator/IllustratorDetailCard.vue";

export default {
  components: { IllustratorForm, IllustratorDetailCard },
  name: "illustrator-detail",
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
