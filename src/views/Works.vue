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

      <v-col>
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
    href: '/works/todoList',
  },
  {
    text: '2',
    disabled: false,
    href: '/',
  },
  {
    text: '3',
    disabled: false,
    href: '/',
  },
]
</script>

<style lang="scss" scoped>
.works-page {
  height: 100%;

  &__link:after {
    content: '/';
    margin-left: 0.5rem;
  }
}
</style>
