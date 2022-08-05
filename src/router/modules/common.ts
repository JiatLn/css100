import type { RouteRecordRaw } from 'vue-router'

// auto import route at /pages/demo/*.vue
const modules = import.meta.glob('/src/pages/demo/*.vue')
const demoRoutes: RouteRecordRaw[] = Object.entries(modules).map(([_, comp], idx) => {
  return {
    path: `/demo/${idx + 1}`,
    name: String(idx + 1),
    component: comp,
  } as unknown as RouteRecordRaw
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  ...demoRoutes,
]

export default routes
