<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
    <common-footer />
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from './components/common/AppBar.vue'
import CommonFooter from './components/common/CommonFooter.vue'
</script>
