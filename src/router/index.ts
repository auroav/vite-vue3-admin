/*
 * @Author: JeremyJone
 * @Date: 2021-10-12 16:00:00
 * @LastEditors: JeremyJone
 * @LastEditTime: 2021-10-12 16:12:45
 * @Description: 路由配置文件
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import Home from '@/pages/home/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    // 匹配全部其他内容
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "404" */ '@/pages/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由拦截器
router.beforeEach((to, from, next) => {
  // TODO: 自定义拦截内容

  next();
});

export async function setupRouter(app: App) {
  // 创建路由守卫
  app.use(router);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
export default router;
