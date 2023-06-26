<template>
  <div class="works-page px-4 pt-8 pb-10">
        <ul class="d-inline-block">
            <li class="works-link grey--text">
                <a href="works/todolist">todo list</a>
            </li>
        </ul>
    </div>
  <router-view />
</template>

<style lang="scss" scoped>
.works-page {
  height: 100%;

  &__link:after {
    content: '/';
    margin-left: 0.5rem;
  }
}
</style>