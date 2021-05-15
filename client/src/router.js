import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home"),
    },
    {
      path: "/novel",
      name: "novel",
      component: () => import("./views/novel/NovelList"),
    },
    {
      path: "/novel/:id",
      name: "novel-detail",
      component: () => import("./views/novel/NovelDetail"),
    },
    {
      path: "/author",
      name: "author",
      component: () => import("./views/author/AuthorList"),
    },
    {
      path: "/author/:id",
      name: "author-detail",
      component: () => import("./views/author/AuthorDetail"),
    },
    {
      path: "/illustrator",
      name: "illustrator",
      component: () => import("./views/illustrator/IllustratorList"),
    },
    {
      path: "/illustrator/:id",
      name: "illustrator-detail",
      component: () => import("./views/illustrator/IllustratorDetail"),
    },
    {
      path: "/label",
      name: "label",
      component: () => import("./views/label/LabelList"),
    },
    {
      path: "/label/:id",
      name: "label-detail",
      component: () => import("./views/label/LabelDetail"),
    },
    {
      path: "/novel-add",
      name: "novel-add",
      component: () => import("./views/novel/NovelCreate"),
    },
    {
      path: "/illustrator-add",
      name: "illustrator-add",
      component: () => import("./views/illustrator/IllustratorCreate"),
    },
    {
      path: "/author-add",
      name: "author-add",
      component: () => import("./views/author/AuthorCreate"),
    },
    {
      path: "/label-add",
      name: "label-add",
      component: () => import("./views/label/LabelCreate"),
    },
    {
      path: "/release/:id",
      name: "release-detail",
      component: () => import("./views/novel/release/ReleaseDetail"),
    },
    {
      path: "/novel/:id/release-add",
      name: "release-add",
      component: () => import("./views/novel/release/ReleaseCreate"),
    },
  ],
});
