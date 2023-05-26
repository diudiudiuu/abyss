import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		path: "/",
		component: () => import(/* webpackChunkName: "layout" */ "@/views/layout.vue"),
		children: [
			{
				path: "/",
				name: "/",
				meta: {
					auth: false,
				},
				component: () => import(/* webpackChunkName: "index" */ "@/views/index.vue")
			},
		]

	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/'
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(async (to, from, next) => {
	next()
})

export default router;