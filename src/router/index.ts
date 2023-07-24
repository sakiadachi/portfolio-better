// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import TodoList from '@/components/blog/todoList/TodoList.vue'
import ResizableElement from '@/components/blog/ResizableElement/ResizableElement.vue'
import BlogVue from '@/views/Blog.vue'
import BlogCardVue from '@/components/blog/BlogCard.vue'

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
        component: BlogCardVue,
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
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
