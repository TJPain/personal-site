<template>
  <header class="header__container">
    <div class="header__wrapper">
      <a href="/" class="header__logo-container">
        <img
          src="@/assets/images/header/tp-logo.png"
          alt="tompa.in"
          class="header__logo-icon"
        />
        <a class="header__logo-text" href="/">tompa.in</a>
      </a>
      <MainNavigation />
      <MainMobileNavigation />
    </div>
  </header>
</template>

<script>
import MainNavigation from '@/components/global/navigation-elements/MainNavigation'
import MainMobileNavigation from '@/components/global/navigation-elements/MainMobileNavigation'

export default {
  name: 'MainHeader',
  components: {
    MainNavigation,
    MainMobileNavigation,
  },
  props: {
    whiteCta: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.header__container {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
  width: 100%;
  background-color: #fff;
  top: 0;
  border-bottom: 1px solid #e3e3e3;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
}
.header__logo-container {
  display: block;
  width: auto;
  cursor: pointer;
}
.header__logo-text {
  color: #4f2d87;
  font-size: 22px;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
  text-decoration: unset;
}

.header__logo-text::after {
  content: '';
  width: 0;
  height: 2px;
  display: block;
  background: #4f2d87;
  transition: 300ms;
}

.header__logo-text:hover::after {
  width: 100%;
}

.header__logo-icon {
  background-size: cover;
  width: auto;
  display: inline-block;
  height: 25px;
  color: #fff;
  margin-right: 6px;
  top: 4px;
  position: relative;
  margin-bottom: 3px;
}

@media all and (min-width: 668px) and (max-width: 1270px) {
  .header__wrapper {
    width: calc(100% - 100px);
    padding: 0;
  }
}
@media all and (max-width: 1024px) {
  .header__wrapper {
    height: 66px;
    position: fixed;
    top: 0;
    width: calc(100%);
    z-index: 999;
    padding: 0 15px;
    background-color: #fff;
    border-bottom: 1px solid #e3e3e3;
  }
  .logo {
    width: auto;
  }
  .logo-desktop {
    display: none;
  }
  .logo-mobile {
    display: block;
    width: 31px;
  }
}
</style>
