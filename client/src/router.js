import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/novel",
      name: "novel",
      component: () => import("./components/DataTableNovel"),
    },
    {
      path: "/author",
      name: "author",
      component: () => import("./components/DataTableNovel"),
    },
    {
      path: "/illustrator",
      name: "illustrator",
      component: () => import("./components/DataTableNovel"),
    },
    {
      path: "/label",
      name: "label",
      component: () => import("./components/DataTableNovel"),
    },
  ],
});
