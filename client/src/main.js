import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import VueTailwind from "vue-tailwind";
import { TPagination } from "vue-tailwind/dist/components";

import SortButton from './components/base/SortButton'
import BackButton from './components/base/BackButton'

const settings = {
  "t-pagination": {
    component: TPagination,
    props: {
      classes: {
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
};

Vue.use(VueTailwind, settings)
Vue.component('SortButton',SortButton)
Vue.component('BackButton',BackButton)

Vue.config.productionTip = false
Vue.prototype.dayjs = require("dayjs")
Vue.prototype._ = require("lodash")

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
