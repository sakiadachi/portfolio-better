// Composables
import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/components/blog/todoList/TodoList.vue'
import ResizableElement from '@/components/blog/ResizableElement/ResizableElement.vue'
import BlogVue from '@/views/BlogPage.vue'
import BlogHome from '@/components/blog/BlogHome.vue'
import Home from '@/views/HomePage.vue'
import ClipboardApp from '@/components/blog/clipboardApp/ClipboardApp.vue'

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
      {
        path: '/blog/clipboard-app',
        component: ClipboardApp,
        name: 'blog-clipboard-app',
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
