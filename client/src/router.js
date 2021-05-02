import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/series",
            name: "series",
            component: () => import("./components/SeriesList")
        },
        {
            path: "/series/:id",
            name: "series-details",
            component: () => import("./components/Series")
        },
        {
            path: "/series/add",
            name: "series-add",
            component: () => import("./components/AddSeries")
        }
    ]
});