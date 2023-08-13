<script lang="ts" setup>
import { ref } from 'vue'

const resizableExampleRef = ref<HTMLDivElement | null>(null)
const tagListHeight = ref('120px')

const onMousedown = () => {
  const resizableBarHeight = 16 * 2
  const startDragging = (e: MouseEvent) => {
    const windowHeight = window.innerHeight

    if (resizableExampleRef.value) {
      const { y } = resizableExampleRef.value.getBoundingClientRect()
      tagListHeight.value = `${
        windowHeight - y - resizableBarHeight - e.pageY
      }px`
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
<template>
  <div
    ref="resizableExampleRef"
    :style="{ '--height': tagListHeight }"
    class="resizable-element-example"
  >
    <v-list
      :items="items"
      item-props
      lines="three"
      class="resizable-element-example__cat-list"
    >
      <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle"></div>
      </template>
    </v-list>
    <div
      @mousedown="onMousedown"
      class="resizable-element-example__resize-bar bg-black w-full h-full bg-yellow"
    />
    <div class="resizable-element-example__tag-list-body overflow-y-auto">
      <v-chip-group multiple selected-class="text-primary" class="w-full">
        <v-chip v-for="n in 45" :key="n"> タグの名前 {{ n }} </v-chip>
      </v-chip-group>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.resizable-element-example {
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  position: relative;
  grid-template-rows: 1fr 2rem var(--height);
  &__cat-list {
    grid-area: 1 / 1 / 2 / 2;
  }
  &__resize-bar {
    grid-area: 2 / 1 / 3 / 2;
    cursor: row-resize;
  }
  &__tag-list-body {
    grid-area: 3 / 1 / 4 / 2;
  }
}
</style>
