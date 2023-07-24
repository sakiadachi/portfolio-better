<script lang="ts" setup>
const links = [
  {
    text: 'blog',
    disabled: false,
    href: '/',
  },
  {
    text: 'works',
    disabled: false,
    href: '/works',
  },

  {
    text: 'contact',
    disabled: false,
    href: '/contact',
  },
]
</script>

<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

      <v-btn
        v-for="link in links"
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
