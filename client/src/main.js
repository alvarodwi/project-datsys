import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "moment";
import "@/assets/css/tailwind.css";
import VueTailWind from "vue-tailwind/dist/full";

import {
  TPagination,
  TTable,
  TInput,
  TRichSelect,
} from "vue-tailwind/dist/components";

const settings = {
  "t-pagination": {
    component: TPagination,
    props: {
      classes: {
        wrapper: "table border-collapse text-center bg-white mx-auto shadow-sm",
        element:
          "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
        activeElement:
          "w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600",
        disabledElement: "w-8 h-8 border border-gray-200 table-cell",
        ellipsisElement: "w-8 h-8 border border-gray-200 hidden md:table-cell",
        activeButton:
          "bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        ellipsis: "",
      },
      variants: {
        rounded: {
          wrapper: "bg-white mx-auto text-center flex space-x-2",
          element: "w-8 h-8 rounded-full",
          activeElement: "w-8 h-8 rounded-full",
          disabledElement: "w-8 h-8 rounded-full",
          ellipsisElement: "w-8 h-8 rounded-full hidden md:inline",
          activeButton:
            "border border-blue-500 bg-blue-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          disabledButton:
            "border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out",
          button:
            "border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          ellipsis: "",
        },
      },
    },
  },
  "t-table": {
    component: TTable,
    props: {
      classes: {
        table:
          "min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border",
        thead: "",
        theadTr: "",
        theadTh: "px-3 py-2 font-semibold text-left bg-gray-100 border-b",
        tbody: "bg-white divide-y divide-gray-100",
        tr: "",
        td: "px-3 py-2 whitespace-no-wrap",
        tfoot: "",
        tfootTr: "",
        tfootTd: "",
      },
      variants: {
        thin: {
          td: "p-1 whitespace-no-wrap text-sm",
          theadTh: "p-1 font-semibold text-left bg-gray-100 border-b text-sm",
        },
      },
    },
  },
  "t-input": {
    component: TInput,
    props: {
      fixedClasses:
        "block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
      classes:
        "text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",
      variants: {
        danger: "border-red-300 bg-red-50 placeholder-red-200 text-red-900",
        success:
          "border-green-300 bg-green-50 placeholder-gray-400 text-green-900",
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
          "w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",
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
        selectButton: "bg-white border-gray-300",
        selectButtonLabel: "",
        selectButtonPlaceholder: "text-gray-400",
        selectButtonIcon: "text-gray-600",
        selectButtonClearButton: "hover:bg-blue-100 text-gray-600",
        selectButtonClearIcon: "",
        dropdown: "bg-white border-gray-300",
        dropdownFeedback: "pb-2 px-3 text-gray-400 text-sm",
        loadingMoreResults: "pb-2 px-3 text-gray-400 text-sm",
        optionsList: "",
        searchWrapper: "p-2 placeholder-gray-400",
        searchBox:
          "px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300",
        optgroup: "text-gray-400 uppercase text-xs py-1 px-2 font-semibold",
        option: "",
        disabledOption: "",
        highlightedOption: "bg-blue-100",
        selectedOption:
          "font-semibold bg-gray-100 bg-blue-500 font-semibold text-white",
        selectedHighlightedOption:
          "font-semibold bg-gray-100 bg-blue-600 font-semibold text-white",
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
      variants: {
        danger: {
          selectButton: "border-red-300 bg-red-50 text-red-900",
          selectButtonPlaceholder: "text-red-200",
          selectButtonIcon: "text-red-500",
          selectButtonClearButton: "hover:bg-red-200 text-red-500",
          dropdown: "bg-red-50 border-red-300",
        },
        success: {
          selectButton: "border-green-300 bg-green-50 text-green-900",
          selectButtonIcon: "text-green-500",
          selectButtonClearButton: "hover:bg-green-200 text-green-500",
          dropdown: "bg-green-50 border-green-300",
        },
      },
    },
  },
};

Vue.use(VueTailWind, settings);

Vue.prototype.moment = moment;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
