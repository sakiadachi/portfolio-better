<script lang="ts" setup>
const links = [
  {
    text: 'home',
    disabled: false,
    href: '/',
  },
  {
    text: 'works',
    disabled: false,
    href: '/works',
  },
  {
    text: 'blog',
    disabled: false,
    href: '/blog',
  },
  {
    text: 'contact',
    disabled: false,
    href: '/contact',
  },
]
</script>

<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        :ripple="false"
      >
        {{ link.text }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>
