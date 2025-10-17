import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  mode: "hash",
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "默认",
      redirect: "/chat"
    },
    {
      path: "/chat",
      name: "聊天页面",
      component: () => import('@/pages/chat/Chat.vue')
    },
  ]
})
// router.beforeEach(async(to, from, next) => {
// });

export default router