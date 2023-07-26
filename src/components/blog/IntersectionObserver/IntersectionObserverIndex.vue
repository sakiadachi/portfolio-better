<script lang="ts" setup>
import dayjs from 'dayjs'

const dateTime = dayjs('2023/07/26 17:00:00')
</script>
<template>
  <v-card flat>
    <v-card-title>Intersection Observerを使ってみる</v-card-title>
    <v-card-subtitle>
      <time :datetime="`${dateTime.valueOf()}`">{{
        dateTime.format('YY/MM/DD h:mm')
      }}</time>
    </v-card-subtitle>

    <v-card-text>
      Intersection Observerを使います。
      <div class="resizable-element__working-example mx-auto border-md"></div>
      <div
        class="resizable-element__working-example mx-auto border-md mt-12"
      ></div>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped></style>
