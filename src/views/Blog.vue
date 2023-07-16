<template>
  <div>
    <blog-nav-bar></blog-nav-bar>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import BlogNavBar from '@/components/blog/BlogNavBar.vue'
</script>
