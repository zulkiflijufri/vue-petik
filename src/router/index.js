import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import axios from "axios";

// import Home from "@/views/home/Index.vue";

// defaul baseURL / Endpoint API
axios.defaults.baseURL = "http://localhost:8000";

const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/home/Index"),
        },
        {
            path: "/post",
            name: "post",
            component: () => import("@/views/post/Index"),
        },
        {
            path: "/post/:slug",
            name: "detail_post",
            component: () => import("@/views/post/Show"),
        },
        {
            path: "/tag/:slug",
            name: "detail_tag",
            component: () => import("@/views/tag/Show"),
        },
        {
            path: "/category/:slug",
            name: "detail_category",
            component: () => import("@/views/category/Index"),
        },
        {
            path: "/event",
            name: "event",
            component: () => import("@/views/event/Index"),
        },
        {
            path: "/event/:slug",
            name: "detail_event",
            component: () => import("@/views/event/Show"),
        },
        {
            path: "/photo",
            name: "photo",
            component: () => import("@/views/photo/Index"),
        },
        {
            path: "/video",
            name: "video",
            component: () => import("@/views/video/Index"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("@/views/contact/Index"),
        },
    ],
    mode: "history",
});

export default router;
