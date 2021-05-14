<template>
  <div class="flex flex-wrap">
    <div class="my-4 w-3/4 mx-auto">
      <ul class="flex cursor-pointer bg-transparent">
        <li>
          <a
            class="select-none text-sm font-semibold uppercase py-2 px-6 rounded bg-steel-500 leading-normal border-b-2"
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
            class="select-none text-sm font-semibold uppercase py-2 px-6 rounded bg-steel-500 leading-normal border-b-2"
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
              <div class="flex flex-col md:flex-row">
                <div class="p-4">
                  <img
                    class="w-full h-auto"
                    src="../../assets/img/adachi.jpeg"
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
                    Author
                  </h2>
                  <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">Hitoma Iruma</p>

                  <h2
                    class="text-steel-500 font-semibold text-2xl tracking-wide"
                  >
                    Illustrator
                  </h2>
                  <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">Non</p>

                  <h2
                    class="text-steel-500 font-semibold text-2xl tracking-wide"
                  >
                    Genre
                  </h2>
                  <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
                    Romance, School life, Yuri
                  </p>
                </div>
              </div>
              <div class="p-4 mb-12">
                <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
                  Plot
                </h2>
                <p class="mt-2 text-steel-500 text-base md:text-xl mt-4 mb-12 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis laudantium delectus vel repellendus provident labore
                  libero omnis ab necessitatibus nostrum accusamus quisquam
                  minus eum illum consequatur, eius voluptatibus dolor quos?
                  Possimus repellat reprehenderit distinctio neque quasi
                  aspernatur sapiente nihil ad.
                </p>

                <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
                  Label
                </h2>
                <p class="mt-2 text-steel-500 text-base md:text-xl mb-8">
                  Dengeki Bunko
                </p>

                <h2 class="text-steel-500 font-semibold text-2xl tracking-wide">
                  Links
                </h2>
                <a class="mt-4 text-steel-500 text-base md:text-xl mb-8" href=""
                  >gawr gura</a
                >
              </div>
              <div class="bg-gray-500 w-auto h-8 -mx-4">
              </div>
              <div>
                <div>
                </div>
              </div>
            </div>
            <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
              <novel-form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NovelForm from "../../components/crud/novel/NovelForm.vue";

export default {
  components: { NovelForm },
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
