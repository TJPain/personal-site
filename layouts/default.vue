<template>
  <div class="default-layout">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../sections/global/Header.vue'

export default {
  name: 'default-layout',
  components: {
    Header,
  },
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.sticky--header__layout {
  padding-top: 83px;
}

@media all and (max-width: 1024px) {
  .sticky--header__layout {
    padding-top: 66px;
    overflow: hidden;

    &.mobileMenuActive {
      overflow-y: hidden;
    }
  }
}
</style>
