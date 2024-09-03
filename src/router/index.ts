import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aos from 'aos';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectDetailView.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  Aos.init(); // Initialize AOS
  next();
});
export default router
