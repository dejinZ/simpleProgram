import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Resources from './view/Resources/Main.vue'
import QuestionBank from './view/QuestionBank/Main.vue'
import Record from './view/Record/Main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'Resources',
    },
    {
      path: '/Resources',
      component: Resources,
    },
    {
      path: '/QuestionBank',
      component: QuestionBank,
    },
    {
      path: '/Record',
      component: Record,
    },
  ],
})

export default router
