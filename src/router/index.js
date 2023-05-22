import { createRouter, createWebHistory } from "vue-router";
import { useVariableStore } from '@/pinia/variable'

const routes = [
	{
		path: "/",
		name: "",
		meta: {
			auth: false,
		},
		component: () => import(/* webpackChunkName: "index" */ "@/views/index.vue")
	},
	{
		path: '/404',
		name: '404',
		meta: {
			auth: false,
		},
		component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404'
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		const variable = useVariableStore()
		if (variable.scrollbar) {
			variable.scrollbar.scrollTo(0, 0)
		}
	}
})

router.beforeEach(async (to, from, next) => {
	next()
})

export default router;