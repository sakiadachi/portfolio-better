<template>
  <v-container>
    <v-row class="d-flex" :class="{ 'flex-column-reverse': mobile }">
      <v-col :cols="mobile ? 12 : 3">
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

      <v-col :cols="mobile ? 12 : 9">
        <v-sheet min-height="70vh" rounded="lg">
          <router-view />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

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
</script>
