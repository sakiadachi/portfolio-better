// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Works from '@/views/Works.vue'
import TodoList from '@/components/works/TodoList.vue'
import WorksHome from '@/components/works/WorksHome.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: '/works',
        name: 'works',
        component: Works,
        children: [
          { path: '/', name: 'works', component: WorksHome },
          {
            path: '/works/todoList',
            component: TodoList,
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
