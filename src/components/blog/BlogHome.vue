<template>
  <v-container>
    <blog-card />
  </v-container>
</template>
<script lang="ts" setup>
import BlogCard from './BlogCard.vue'
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
</script>
