// Composables
import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/blog/todoList/TodoList.vue'
import ResizableElement from '@/components/blog/ResizableElement/ResizableElement.vue'
import BlogVue from '@/views/Blog.vue'
import BlogHome from '@/components/blog/BlogHome.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogVue,
    children: [
      {
        path: '/blog',
        component: BlogHome,
      },
      {
        path: '/blog/resizable-element',
        component: ResizableElement,
      },
      {
        path: '/blog/todo-list',
        component: TodoList,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
