<template>
  <v-container>
    <v-row>
      <v-col v-for="link in links" :key="link.text" cols="4">
        <v-card height="200" :href="link.href">{{ link.text }}</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
defineProps({
  link: String,
  title: String,
})
const links = [
  {
    text: 'Resizable Element',
    disabled: false,
    href: '/blog/resizable-element',
  },
  {
    text: 'Todo List',
    disabled: false,
    href: '/blog/todo-list',
  },
  {
    text: '3',
    disabled: false,
    href: '/',
  },
]
</script>
