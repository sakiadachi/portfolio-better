<script lang="ts" setup>
import dayjs from 'dayjs'
import ResizableElementExample from './ResizableElementExample.vue'
import ResizableElementHorizontalExample from './ResizableElementHorizontalExample.vue'

const dateTime = dayjs('2023/07/16 17:00:00')
</script>
<template>
  <v-card flat>
    <v-card-title
      >上下ドラッグで、リサイズできるエレメントを作る【Javascript】</v-card-title
    >
    <v-card-subtitle>
      <time :datetime="`${dateTime.valueOf()}`">{{
        dateTime.format('YY/MM/DD h:mm')
      }}</time>
    </v-card-subtitle>

    <v-card-text>
      スマホでよくある、エレメントの上部を上下に引っ張って高さを変えるような実装をご紹介します。
      <div class="resizable-element__working-example mx-auto border-md">
        <resizable-element-example />
      </div>
      <div class="resizable-element__working-example mx-auto border-md mt-12">
        <resizable-element-horizontal-example />
      </div>
    </v-card-text>
  </v-card>
</template>
<style lang="scss" scoped>
.resizable-element {
  &__working-example {
    width: 90vw;
    height: 30rem;
    position: relative;
  }
}
</style>
