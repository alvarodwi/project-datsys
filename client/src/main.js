import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import VueTailwind from "vue-tailwind";
import { TPagination, TRichSelect } from "vue-tailwind/dist/components";

import SortButton from "./components/base/SortButton";
import BackButton from "./components/base/BackButton";
import PageSizeButton from "./components/base/PageSizeButton";

const settings = {
  "t-pagination": {
    component: TPagination,
    props: {
      classes: {
        wrapper:
          "table rounded-lg border-collapse text-center bg-sepia-600 mx-auto text-lg",
        element:
          "w-12 h-12 rounded-lg table-cell hover:border-steel-100 text-steel-500",
        activeElement: "w-12 h-12 table-cell hover:border-steel-600",
        disabledElement: "w-12 h-12 table-cell",
        ellipsisElement: "w-12 h-12 hidden md:table-cell",
        activeButton:
          "bg-steel-500 w-full h-full text-sepia-500 hover:bg-steel-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-steel-600 focus:outline-none focus:ring-opacity-50",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-sepia-400 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-steel-600 focus:outline-none focus:ring-opacity-50",
        ellipsis: "",
      },
      variants: {
        inverted: {
          wrapper:
            "table rounded-lg border-collapse text-center bg-steel-600 mx-auto text-lg",
          element:
            "w-12 h-12 rounded-lg table-cell hover:border-sepia-100 text-sepia-500",
          activeElement: "w-12 h-12 table-cell hover:border-sepia-600",
          disabledElement: "w-12 h-12 table-cell",
          ellipsisElement: "w-12 h-12 hidden md:table-cell",
          activeButton:
            "bg-sepia-500 w-full h-full text-steel-500 hover:bg-sepia-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-sepia-600 focus:outline-none focus:ring-opacity-50",
          disabledButton:
            "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
          button:
            "hover:bg-steel-400 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-sepia-600 focus:outline-none focus:ring-opacity-50",
          ellipsis: "",
        },
      },
    },
  },
  "t-rich-select": {
    component: TRichSelect,
    props: {
      fixedClasses: {
        wrapper: "relative",
        buttonWrapper: "inline-block relative w-full",
        selectButton:
          "w-full flex text-left justify-between items-center px-3 py-2 text-steel-500 transition duration-100 ease-in-out border rounded shadow-sm focus:border-steel-500 focus:ring-2 focus:ring-steel-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg",
        selectButtonLabel: "block truncate",
        selectButtonPlaceholder: "block truncate",
        selectButtonIcon: "fill-current flex-shrink-0 ml-1 h-4 w-4",
        selectButtonClearButton:
          "rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition duration-100 ease-in-out",
        selectButtonClearIcon: "fill-current h-3 w-3",
        dropdown:
          "absolute w-full z-10 -mt-1 absolute border-b border-l border-r rounded-b shadow-sm z-10",
        dropdownFeedback: "",
        loadingMoreResults: "",
        optionsList: "overflow-auto",
        searchWrapper: "inline-block w-full",
        searchBox: "inline-block w-full",
        optgroup: "",
        option: "cursor-pointer",
        disabledOption: "opacity-50 cursor-not-allowed",
        highlightedOption: "cursor-pointer",
        selectedOption: "cursor-pointer",
        selectedHighlightedOption: "cursor-pointer",
        optionContent: "",
        optionLabel: "truncate block",
        selectedIcon: "fill-current h-4 w-4",
        enterClass: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveClass: "",
        leaveActiveClass: "",
        leaveToClass: "",
      },
      classes: {
        wrapper: "",
        buttonWrapper: "",
        selectButton:
          "px-3 py-2 text-steel-500 transition duration-100 ease-in-out bg-steel-300 border border-steel-300 rounded shadow-sm focus:border-gray-500 focus:ring-2 focus:ring-steel-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
        selectButtonLabel: "",
        selectButtonTagWrapper: "-mx-2 -my-2.5 py-1 pr-8",
        selectButtonTag:
          "bg-gray-500 block disabled:cursor-not-allowed disabled:opacity-50 duration-100 ease-in-out focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded shadow-sm text-sm text-white transition white-space-no m-0.5 max-w-full overflow-hidden h-8 flex items-center",
        selectButtonTagText: "px-3",
        selectButtonTagDeleteButton:
          "-ml-1.5 h-full hover:bg-gray-600 hover:shadow-sm inline-flex items-center px-2 transition",
        selectButtonTagDeleteButtonIcon: "",
        selectButtonPlaceholder: "text-steel-500",
        selectButtonIcon: "text-steel-600",
        selectButtonClearButton:
          "hover:bg-gray-100 text-steel-600 rounded transition duration-100 ease-in-out",
        selectButtonClearIcon: "",
        dropdown:
          "-mt-1 bg-geyser-500 border-b border-steel-300 border-l border-r rounded-b shadow-sm",
        dropdownFeedback: "pb-2 px-3 text-steel-400 text-sm",
        loadingMoreResults: "pb-2 px-3 text-steel-400 text-sm",
        optionsList: "",
        searchWrapper: "p-2 placeholder-steel-400",
        searchBox:
          "px-3 py-2 bg-steel-50 text-sm rounded border focus:outline-none focus:shadow-outline border-steel-300",
        optgroup: "text-steel-400 uppercase text-xs py-1 px-2 font-semibold",
        option: "",
        disabledOption: "",
        highlightedOption: "bg-gray-100",
        selectedOption:
          "font-semibold bg-steel-100 bg-gray-500 font-semibold text-steel-500",
        selectedHighlightedOption:
          "font-semibold bg-steel-100 bg-gray-600 font-semibold text-steel-500",
        optionContent: "flex justify-between items-center px-3 py-2",
        optionLabel: "",
        selectedIcon: "",
        enterClass: "opacity-0",
        enterActiveClass: "transition ease-out duration-100",
        enterToClass: "opacity-100",
        leaveClass: "opacity-100",
        leaveActiveClass: "transition ease-in duration-75",
        leaveToClass: "opacity-0",
      },
    },
  },
};

Vue.use(VueTailwind, settings);
Vue.component("SortButton", SortButton);
Vue.component("BackButton", BackButton);
Vue.component("PageSizeButton", PageSizeButton);

Vue.config.productionTip = false;
Vue.prototype.dayjs = require("dayjs");
Vue.prototype._ = require("lodash");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
