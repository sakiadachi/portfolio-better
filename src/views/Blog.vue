<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-sheet rounded="lg">
          <v-list rounded="lg">
            <v-list-item
              v-for="link in links"
              :key="link.text"
              :to="link.href"
              active-class="blog-link--active"
              exact
            >
              <v-list-item-title> {{ link.text }} </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col cols="9">
        <v-sheet min-height="70vh" rounded="lg">
          <router-view />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import router from '@/router'
const links = [
  {
    text: 'resizable element',
    disabled: false,
    href: '/blog/resizable-element',
  },
  {
    text: 'todo list',
    disabled: false,
    href: '/blog/todo-list',
  },
  {
    text: '/',
    disabled: false,
    href: '/blog',
  },
]

const currentRoutePath = router.currentRoute.value.path
console.log(currentRoutePath)
</script>

<style lang="scss" scoped>
.blog-link {
  &--active::after {
    content: '⭐️';
    display: block;
  }
}
</style>
