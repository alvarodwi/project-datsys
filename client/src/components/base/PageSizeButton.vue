<template>
  <div class="flex w-64">
    <div class="w-1/4 mt-4 relative" v-on-clickaway="closeDropdown">
      <div :class="{ open: open }">
        <button
          type="button"
          @click="open = !open"
          class="relative w-full bg-sepia-500 border-r border-steel-500 text-steel-500 rounded-md shadow-lg px-3 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-grey-500 focus:border-grey-500 sm:text-sm"
        >
          <span class="flex items-center">
            <span class="ml-3 block truncate">
              {{ selected }}
            </span>
            <span class="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                  fill="rgba(59,73,84,1)"
                />
              </svg>
            </span>
          </span>
        </button>
        <div
          class="absolute mt-1 w-full z-10 rounded-md bg-sepia-500 shadow-lg"
          :class="{ hidden: !open }"
        >
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            class="max-h-56 rounded-md py-1 text-base ring-1 ring-steel-500 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <li
              id="listbox-item-0"
              role="option"
              class="text-gray-900 cursor-default hover:bg-grey-500 hover:text-steel-500 relative py-2 pl-3 pr-9"
              v-for="(option, i) of options"
              :key="i"
              @click="
                selected = option;
                open = false;
                emitValue();
              "
            >
              <div class="flex items-center">
                <span class="ml-3 block font-normal truncate">
                  {{ option }}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "sort-button",
  mixins: [clickaway],
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
      sortDir: "asc",
    };
  },
  methods: {
    closeDropdown() {
      this.open = false;
    },
    emitValue() {
      this.$emit("input", this.selected);
    },
  },
  mounted() {
    this.emitValue;
  },
};
</script>
