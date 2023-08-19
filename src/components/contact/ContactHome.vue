<template>
  <v-row class="d-flex justify-center h-100 pt-8">
    <v-col cols="12" class="position-relative w-full">
      <div class="contact-home__card-container">
        <v-card
          elevation="0"
          position="relative"
          class="contact-home__card pa-4 rounded-xl"
        >
          <v-card-title class="font-weight-bold text-h4"
            >こんにちは👋</v-card-title
          >
          <v-card-text class="contact-home__intro-text text-body-1 mt-8">{{
            intro
          }}</v-card-text>

          <v-card-actions class="px-4">
            <contact-links />
          </v-card-actions>
        </v-card>
      </div>
    </v-col>
    <v-col cols="10" class="my-12">
      <ascii-art-computer />
    </v-col>
    <v-col cols="10" class="my-12">
      <h2>ログ</h2>
      <p class="mb-8">実装方法のブログなど</p>
      <blog-card />
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import AsciiArtComputer from './AsciiArtComputer.vue'
import BlogCard from '../blog/BlogCard.vue'
import ContactLinks from '@/components/common/ContactLinks.vue'
const intro =
  '足立 咲\nフリーランス フロントエンドエンジニア,デザイナー（ごく稀に）\n\nVue / React / Flutter / TypeScript / JavaScript\n\n東京在住\nラーメン、猫、コリドラスとオトシンクルスが好きです🐠'
</script>
<style lang="scss" scoped>
.contact-home {
  &__card-container {
    &::before {
      content: '';
      border: 0.15rem dashed;
      position: absolute;
      bottom: -1rem;
      right: 2rem;
      margin-left: 0;
      display: block;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      z-index: 1;
    }
    &::after {
      content: '';
      border: 0.15rem dashed;
      position: absolute;
      bottom: -3rem;
      right: 6rem;
      margin-left: 0;
      display: block;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      z-index: 1;
    }
  }
  &__card {
    border: 0.15rem dashed;
  }
  &__intro-text {
    white-space: pre-wrap;
    line-height: 1.5 !important;
  }
}
</style>
