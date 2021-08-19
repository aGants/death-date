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
  },
  {
    path: '/question/3',
    name: 'QuestionThree',
    component: () => import( '../views/QuestionThree.vue')
  },
  {
    path: '/question/4',
    name: 'QuestionFour',
    component: () => import( '../views/QuestionFour.vue')
  },
  {
    path: '/question/5',
    name: 'QuestionFive',
    component: () => import( '../views/QuestionFive.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import( '../views/Result.vue')
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import( '../views/Data.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
