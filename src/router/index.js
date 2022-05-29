import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signup from "../views/SignupView.vue";
import Settings from "../views/SettingsView.vue";
import Preference from "../views/PreferenceView.vue";
import ErrorView from "../views/ErrorView.vue";

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
    {
        path: "/settings",
        name: "settings",
        component: Settings,
    },
    {
        path: "/preference",
        name: "preference",
        component: Preference,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404notfound",
        component: ErrorView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
