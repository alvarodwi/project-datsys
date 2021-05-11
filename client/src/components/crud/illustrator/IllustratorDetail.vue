<template>
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
            <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
              <p>
                A
              </p>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <p>
                B
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "novel-detail",
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
