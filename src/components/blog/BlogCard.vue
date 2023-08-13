<template>
  <v-row>
    <v-col v-for="link in links" :key="link.text" cols="5">
      <v-card class="blog-card__card" height="200" :to="link.href" theme="dark">
        <v-img :src="link.bgIcon">
          <v-card-title class="text-white" v-text="link.text"></v-card-title
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import check from '@/assets/blog/check.png'
import colResize from '@/assets/blog/col-resize.png'

defineProps({
  link: String,
  title: String,
})
const links = [
  {
    text: 'Resizable Element',
    disabled: false,
    href: '/blog/resizable-element',
    bgIcon: colResize,
  },
  {
    text: 'Todo List',
    disabled: false,
    href: '/blog/todo-list',
    bgIcon: check,
  },
]
</script>
<style lang="scss" scoped>
.blog-card {
  &__card {
    &::after {
      content: var(--icon);
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: auto;
    }
  }
}
</style>
