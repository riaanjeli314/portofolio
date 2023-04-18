import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/home.vue";
import fyi from "@/views/fyi.vue";
import portofolio from "@/views/portofolio.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: home,
    },
    {
        path: "/fyi",
        name: "fyi",
        component: fyi,
    },
    {
        path: "/portofolio",
        name: "portofolio",
        component: portofolio,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;