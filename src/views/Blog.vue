<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-sheet rounded="lg">
          <v-list rounded="lg">
            <v-list-item
              v-for="link in links"
              :key="link.text"
              link
              :href="link.href"
            >
              <v-list-item-title> {{ link.text }} </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item link color="grey-lighten-4">
              <v-list-item-title> Refresh </v-list-item-title>
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
const links = [
  {
    text: 'todo list',
    disabled: false,
    href: '/blog/todo-list',
  },
  {
    text: 'resizable element',
    disabled: false,
    href: '/blog/resizable-element',
  },
  {
    text: '3',
    disabled: false,
    href: '/',
  },
]
</script>

<style lang="scss" scoped></style>
