<template>
  <v-container>
    <blog-card />
  </v-container>
</template>
<script lang="ts" setup>
import BlogCard from './BlogCard.vue'
defineProps({
  link: String,
  title: String,
})
</script>
