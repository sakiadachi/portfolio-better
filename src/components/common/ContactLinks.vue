<template>
  <ul>
    <li class="contact-links__link d-inline-block">
      <a href="mailto:hello@sakiadachi.com">Email</a>
    </li>
    <li class="contact-links__link d-inline-block">
      <a href="https://github.com/sakiadachi" target="_blank">GitHub</a>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.contact-links {
  &__link {
    &:nth-child(odd) {
      &::after {
        content: '/';
        display: inline-block;
        padding: 0 1rem;
      }
    }
  }
}
</style>
