import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/1',
    name: '1',
    component: () => import('@/pages/001.vue'),
  },
]

export default routes
