import {createRouter, createWebHashHistory} from "vue-router";
import {UserLayout, TabLayout, RouteView, BlankLayout} from '@/components/layouts'

const routes = [
    {
        path: "/",
        name: "/",
        redirect: '/radar/home',
        component: BlankLayout,
        meta: {
            title: "首页",
            keepAlive: false
        },
        children: [
            {
                path: "/radar/home",
                name: "home",
                component: () => import("../views/home/index.vue"),
            },
        ],
    },
    // 模块一路由
    {
        path: "/radar/cover",
        name: "cove",
        component: TabLayout,
        meta: {
            title: "模块一",
            keepAlive: true
        },
        children: [
            {
                path: "blockOne",
                name: "blockOne",
                meta: {
                    title: "首页",
                    keepAlive: false
                },
                component: () => import("../views/cover/index.vue"),
            }
        ],
    },
    // 模块二路由
    {
        path: "/radar/cover2",
        name: "cove2",
        component: TabLayout,
        meta: {
            title: "模块二",
            keepAlive: true
        },
        children: [
            {
                path: "blockTwo",
                name: "blockTwo",
                component: () => import("../views/block/index.vue"),
            }
        ],
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
