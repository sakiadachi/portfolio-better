<template>
  <div
    ref="resizableExampleRef"
    :style="{ '--width': width }"
    class="resizable-element-horizontal d-flex w-full"
  >
    <v-list class="resizable-element-horizontal__menu-list">
      <v-list-subheader>Tonal Variant</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        color="primary"
        variant="tonal"
      >
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
    <div
      @mousedown="onMousedown"
      class="resizable-element-horizontal__resize-bar h-full bg-yellow"
    ></div>
    <div class="resizable-element-horizontal__tag-list-body bg-pink">
      <!-- <v-chip-group multiple selected-class="text-primary" class="">
        <v-chip v-for="n in 45" :key="n"> タグの名前 {{ n }} </v-chip>
      </v-chip-group> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const resizableExampleRef = ref<HTMLDivElement | null>(null)
const width = ref('120px')

const onMousedown = () => {
  const resizableBarHeight = 16 * 2
  const startDragging = (e: MouseEvent) => {
    const windowWidth = window.innerWidth
    console.log(e)
    if (resizableExampleRef.value) {
      const { x } = resizableExampleRef.value.getBoundingClientRect()
      width.value = `${windowWidth - x - 2 - e.pageX}px`
    }
  }
  const stopDragging = () => {
    document.removeEventListener('mousemove', startDragging)
    document.removeEventListener('mouseup', stopDragging)
  }
  document.addEventListener('mousemove', startDragging)
  document.addEventListener('mouseup', stopDragging)
}
const items = [
  { type: 'subheader', title: 'Your Favorite Cats' },
  {
    prependAvatar: 'http://placekitten.com/200',
    title: '猫',
    subtitle:
      'テキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    prependAvatar: 'http://placekitten.com/200',
    title: '猫',
    subtitle:
      'テキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    prependAvatar: 'http://placekitten.com/200',
    title: '猫',
    subtitle:
      'テキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    prependAvatar: 'http://placekitten.com/200',
    title: '猫',
    subtitle:
      'テキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    prependAvatar: 'http://placekitten.com/200',
    title: '猫',
    subtitle:
      'テキストテキストテキストテキストテキストテキストテキストテキスト',
  },
  {
    prependAvatar: 'http://placekitten.com/200',
    title: '猫',
    subtitle:
      'テキストテキストテキストテキストテキストテキストテキストテキスト',
  },
]
</script>
<style lang="scss" scoped>
.resizable-element-horizontal {
  // display: grid;
  // height: 100%;
  // width: 100%l
  // grid-template-columns: 100%;
  // position: relative;
  // grid-template-rows: 1fr 2rem var(--width);
  &__menu-list {
    // grid-area: 1 / 1 / 2 / 2;
    flex-basis: var(--width);
  }
  &__resize-bar {
    grid-area: 2 / 1 / 3 / 2;
    cursor: col-resize;
    width: 2px;
  }
  &__tag-list-body {
    grid-area: 3 / 1 / 4 / 2;
  }
}
</style>
