// Composables
import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/blog/todoList/TodoList.vue'
import ResizableElement from '@/components/blog/ResizableElement/ResizableElement.vue'
import BlogVue from '@/views/BlogPage.vue'
import BlogHome from '@/components/blog/BlogHome.vue'
import Home from '@/views/HomePage.vue'

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
        path: '',
        component: BlogHome,
        name: 'blog-home',
      },
      {
        path: '/blog/resizable-element',
        component: ResizableElement,
        name: 'blog-resizable-element',
      },
      {
        path: '/blog/todo-list',
        component: TodoList,
        name: 'blog-todo-list',
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
