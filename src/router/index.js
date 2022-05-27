import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signup from "../views/SignupView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/Signup",
        name: "signup",
        component: Signup,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
