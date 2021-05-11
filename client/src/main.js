import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import VueTailwind from "vue-tailwind";
import { TPagination } from "vue-tailwind/dist/components";

const settings = {
  "t-pagination": {
    component: TPagination,
    props: {
      classes: {
        wrapper:
          "table border-collapse text-center bg-sepia-600 mx-auto shadow-sm text-base",
        element:
          "w-8 h-8 border border-gray-300 table-cell hover:border-gray-100 text-gray-500",
        activeElement:
          "w-8 h-8 border border-gray-300 border-gray-300 table-cell hover:border-gray-600",
        disabledElement: "w-8 h-8 border border-gray-300 table-cell",
        ellipsisElement: "w-8 h-8 border border-gray-300 hidden md:table-cell",
        activeButton:
          "bg-gray-500 w-full h-full text-sepia-500 hover:bg-gray-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-gray-600 focus:outline-none focus:ring-opacity-50",
        disabledButton:
          "opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out",
        button:
          "hover:bg-sepia-300 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-gray-600 focus:outline-none focus:ring-opacity-50",
        ellipsis: "",
      },
    },
  },
};

Vue.use(VueTailwind, settings);

Vue.config.productionTip = false;
Vue.prototype.dayjs = require("dayjs");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
