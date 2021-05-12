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
      component: () => import("./components/crud/novel/DataTableNovel"),
    },
    {
      path: "/novel/:id",
      name: "novel-detail",
      component: () => import("./components/crud/novel/NovelDetail"),
    },
    {
      path: "/author",
      name: "author",
      component: () => import("./components/crud/author/DataTableAuthor"),
    },
    {
      path: "/author/:id",
      name: "author-detail",
      component: () => import("./components/crud/author/AuthorDetail"),
    },
    {
      path: "/illustrator",
      name: "illustrator",
      component: () =>
        import("./components/crud/illustrator/DataTableIllustrator"),
    },
    {
      path: "/illustrator/:id",
      name: "illustrator-detail",
      component: () =>
        import("./components/crud/illustrator/IllustratorDetail"),
    },
    {
      path: "/label",
      name: "label",
      component: () => import("./components/crud/label/DataTableLabel"),
    },
    {
      path: "/label/:id",
      name: "label-detail",
      component: () => import("./components/crud/label/LabelDetail"),
    },
    {
      path: "/novel-add",
      name: "novel-add",
      component: () => import("./components/crud/novel/NovelForm"),
    },
    {
      path: "/illustrator-add",
      name: "illustrator-add",
      component: () => import("./components/crud/illustrator/IllustratorForm"),
    },
    {
      path: "/author-add",
      name: "author-add",
      component: () => import("./components/crud/author/AuthorForm"),
    },
    {
      path: "/label-add",
      name: "label-add",
      component: () => import("./components/crud/label/LabelForm"),
    },
    {
      path: "/novel-debug",
      name: "novel-debug",
      component: () => import("./components/crud/novel/NovelCard"),
    },
    {
      path: "/author-debug",
      name: "author-debug",
      component: () => import("./components/crud/author/AuthorCard"),
    },
  ],
});
