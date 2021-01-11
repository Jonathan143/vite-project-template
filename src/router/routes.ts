import { RouteRecordRaw } from 'vue-router'

/**
 * 路由注册
 */
const routes: RouteRecordRaw[] = []

/**
 * 在主框架内显示
 */
const frameIn: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: () => import('/@/layout/HeaderAside/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('/@/views/Home.vue'),
      },
    ],
  },
  ...routes,
]

/**
 * 在主框架之外显示
 */
const frameOut: RouteRecordRaw[] = []

/**
 * 错误页面
 */
const errorPage: RouteRecordRaw[] = []

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [...frameIn, ...frameOut, ...errorPage]
