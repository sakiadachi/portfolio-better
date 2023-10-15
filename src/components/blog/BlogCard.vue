<template>
  <v-row class="d-flex">
    <v-col v-for="l in links" :key="l.text" style="flex-basis: 200px">
      <v-card
        class="blog-card__card"
        max-height="200"
        :to="l.href"
        theme="dark"
      >
        <v-img :src="l.bgIcon">
          <v-card-title class="text-white">{{ l.text }}</v-card-title></v-img
        >
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import check from '@/assets/blog/check.png'
import colResize from '@/assets/blog/col-resize.png'

defineProps({
  link: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
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
