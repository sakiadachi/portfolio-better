<template>
  <v-footer class="pa-10">
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <contact-links />
      </v-col>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Saki Adachi</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script lang="ts" setup>
import ContactLinks from '@/components/common/ContactLinks.vue'
</script>
