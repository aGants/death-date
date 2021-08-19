import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question/2',
    name: 'QuestionTwo',
    component: () => import( '../views/QuestionTwo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
