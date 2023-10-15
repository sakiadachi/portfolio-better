<template>
  <v-app-bar class="app-bar" flat>
    <v-container class="fill-height d-flex align-center">
      <v-app-bar-nav-icon class="me-10 ms-4">
        <v-btn href="/" icon :ripple="false">
          <v-avatar :image="LogoRound"></v-avatar>
        </v-btn>
      </v-app-bar-nav-icon>

      <v-btn
        v-for="(link, index) in links"
        :key="index"
        :href="link.href"
        variant="text"
        :ripple="false"
      >
        {{ link.text }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          density="compact"
          hide-details
          variant="solo"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
<script lang="ts" setup>
import LogoRound from '@/assets/logo_round.png'
const links = [
  {
    text: 'home',
    disabled: false,
    href: '/',
  },
  {
    text: 'blog',
    disabled: false,
    href: '/blog',
  },
]
</script>
