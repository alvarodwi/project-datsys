import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/novel",
      name: "novel",
      component: () => import("./components/NovelList"),
    },
    {
      path: "/novel/:id",
      name: "novel-details",
      component: () => import("./components/Novel"),
    },
    {
      path: "/novel/add",
      name: "add-novel",
      component: () => import("./components/AddNovel"),
    },
  ],
});
