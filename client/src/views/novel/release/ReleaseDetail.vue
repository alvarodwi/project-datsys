<template>
  <div>
    <div class="w-3/4 mx-auto">
      <back-button/>
    </div>
    <div class="flex flex-wrap">
      <div class="my-4 w-3/4 mx-auto">
        <ul class="flex cursor-pointer bg-transparent">
          <li>
            <a
              class="select-none text-sm font-semibold uppercase mb-4 py-2 px-6 rounded bg-steel-500 leading-normal border-b-2"
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
              class="select-none text-sm font-semibold uppercase mb-4 py-2 px-6 rounded bg-steel-500 leading-normal border-b-2"
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
                <div class="flex flex-col md:flex-row">
                  <div class="p-4">
                    <img
                      class="w-full h-auto"
                      src="../../../assets/img/adachi.jpeg"
                      alt="adachi"
                    />
                  </div>
                  <div class="p-4">
                    <h1
                      class="text-steel-500 font-semibold text-2xl md:text-4xl tracking-wide"
                    >
                      Adachi to Shimamura
                    </h1>
                    <p class="mt-2 text-steel-500 text-base md:text-xl mb-16">
                      安達としまむら
                    </p>

                    <h2
                      class="text-steel-500 font-semibold text-2xl tracking-wide"
                    >
                      Volume Number
                    </h2>
                    <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
                      1
                    </p>

                    <h2
                      class="text-steel-500 font-semibold text-2xl tracking-wide"
                    >
                      Release Date
                    </h2>
                    <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
                      March, 10 2013
                    </p>

                    <h2
                      class="text-steel-500 font-semibold text-2xl tracking-wide"
                    >
                      Pages
                    </h2>
                    <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
                      248
                    </p>
                  </div>
                </div>
                <div class="p-4 mb-8">
                  <h2
                    class="text-steel-500 font-semibold text-2xl tracking-wide"
                  >
                    Online Shops
                  </h2>
                  <a
                    class="mt-4 text-steel-500 text-base md:text-xl mb-8"
                    href=""
                    >gawr gura</a
                  >
                </div>
              </div>
              <div
                v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
              >
                <release-form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReleaseForm from "../../../components/crud/release/ReleaseForm";

export default {
  components: { ReleaseForm },
  name: "release-detail",
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
