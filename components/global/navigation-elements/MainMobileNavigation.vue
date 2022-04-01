<template>
  <div class="n-mobile__navigation">
    <a href="mailto:hello@tompa.in" class="n-navigation__cta n-mobile__cta"
      >Email Tom</a
    >
    <div
      class="mobileButton"
      :class="{ burger: mobileMenu }"
      @click="openMobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="n-mobile__submenu" :class="{ active: mobileMenu }">
      <div class="n-mobile__fscreen">
        <div
          class="n-fscreen__link"
          :class="{ active: aboutSelected }"
          @click="selectMobileSubmenu('aboutSelected')"
        >
          <div class="n-not__selected">
            About Us
            <img
              src="@/assets/images/header/arrow-right.svg"
              alt="arrow"
              class="n-arrow__right"
            />
          </div>
          <div class="n-selected">
            <span class="n-selected__back" @click.stop="backMobileMenu">
              <img
                src="@/assets/images/header/arrow-left.svg"
                alt="arrow"
                class="n-arrow__right"
              />
              Back
            </span>
            <span class="n-selected__title">About Us</span>
            <div v-show="aboutSelected" class="n-about__selected">
              <AboutSubmenu />
            </div>
          </div>
        </div>
        <div
          class="n-fscreen__link"
          :class="{ active: skiSelected }"
          @click="selectMobileSubmenu('skiSelected')"
        >
          <div class="n-not__selected">
            Ski
            <img
              src="@/assets/images/header/arrow-right.svg"
              alt="arrow"
              class="n-arrow__right"
            />
          </div>
          <div class="n-selected">
            <span class="n-selected__back" @click.stop="backMobileMenu">
              <img
                src="@/assets/images/header/arrow-left.svg"
                alt="arrow"
                class="n-arrow__right"
              />
              Back
            </span>
            <span class="n-selected__title">Ski</span>
            <div v-show="skiSelected" class="n-ski__selected">
              <SkiSubmenu />
            </div>
          </div>
        </div>
        <div
          class="n-fscreen__link"
          :class="{ active: citySelected }"
          @click="selectMobileSubmenu('citySelected')"
        >
          <div class="n-not__selected">
            City & sun
            <img
              src="@/assets/images/header/arrow-right.svg"
              alt="arrow"
              class="n-arrow__right"
            />
          </div>
          <div class="n-selected">
            <span class="n-selected__back" @click.stop="backMobileMenu">
              <img
                src="@/assets/images/header/arrow-left.svg"
                alt="arrow"
                class="n-arrow__right"
              />
              Back
            </span>
            <span class="n-selected__title">City & sun</span>
            <div v-show="citySelected" class="n-city__selected">
              <CitySubmenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutSubmenu from '@/components/global/navigation-elements/dropdown-elements/AboutSubmenu'
import CitySubmenu from '@/components/global/navigation-elements/dropdown-elements/CitySubmenu'
import SkiSubmenu from '@/components/global/navigation-elements/dropdown-elements/SkiSubmenu'
export default {
  name: 'MainMobileNavigation',
  components: {
    AboutSubmenu,
    CitySubmenu,
    SkiSubmenu,
  },
  data() {
    return {
      mobileMenu: false,
      aboutSelected: false,
      skiSelected: false,
      citySelected: false,
    }
  },
  methods: {
    openMobileMenu() {
      this.mobileMenu = !this.mobileMenu
      document.querySelector('body').classList.toggle('mobileMenuOpened')
      this.backMobileMenu()
    },
    selectMobileSubmenu(selected) {
      this[selected] = true
    },
    backMobileMenu() {
      this.aboutSelected = false
      this.skiSelected = false
      this.citySelected = false
    },
  },
}
</script>

<style lang="scss" scoped>
.n-mobile__navigation {
  display: none;
}
.mobileButton {
  position: relative;
  width: 36px;
  height: 32px;
  border-radius: 2px;
  top: -3px;
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 80%;
    background: #4f2d87;
    border-radius: 4px;
    opacity: 1;
    left: 0;
    right: 0;
    margin: auto;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }
  span:first-child {
    top: 9px;
  }
  span:nth-child(2) {
    top: 18px;
    width: 60%;
    margin-left: 10%;
  }
  span:nth-child(3) {
    top: 18px;
    width: 60%;
    margin-left: 10%;
  }
  span:nth-child(4) {
    top: 27px;
  }
}
.burger {
  span:first-child {
    top: 16px;
    width: 0;
    left: 50%;
  }
  span:nth-child(2) {
    transform: rotate(45deg);
    width: 80%;
  }
  span:nth-child(3) {
    transform: rotate(-45deg);
    width: 80%;
  }
  span:nth-child(4) {
    top: 16px;
    width: 0;
    left: 50%;
  }
}
@media all and (max-width: 1024px) {
  .mobileButton {
    display: block;
  }
  .n-mobile__navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .n-mobile__cta {
    display: inline-block;
    background: #4f2d87;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    margin: 0 25px;
    padding: 6px 15px;
    font-size: 13px;
    line-height: 22px;
    font-weight: 500;
  }
  .mobile__fscreen.active {
    display: block;
  }
  .n-mobile__submenu {
    position: absolute;
    top: 66px;
    left: 50%;
    width: 100vw;
    z-index: 999;
    background-color: #fff;
    min-height: calc(100vh);
    transform: translateX(-5000px);
    transition: all 0.4s ease;
    opacity: 0;
    &.active {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
  .n-fscreen__link {
    font-size: 16px;
    line-height: 24px;
    padding: 16px 24px;
    color: #464860;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    &:hover {
      cursor: pointer;
    }
    &:last-child {
      border-bottom: 1px solid #e4e4e4;
    }
    & > a {
      color: #464860;
    }
  }
  .n-not__selected {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .n-selected {
    display: none;
    position: relative;
  }
  .n-fscreen__link.active {
    & .n-not__selected {
      display: none;
    }
    & .n-selected {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      & .n-submenu__container {
        display: block;
        position: static;
        opacity: 1;
        width: 100%;
        height: auto;
        box-shadow: none;
        border-top: 1px solid #e4e4e4;
        max-height: calc(100vh - 123px);
        overflow-y: scroll;
        padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
        box-sizing: content-box; /* So the width will be 100% + 17px */
        pointer-events: all;
      }
    }
  }
  .n-fscreen__link.hide__mobile--submenu {
    display: none;
  }
  .n-selected__title {
    font-weight: 500;
    color: #4f2d87;
    margin: auto auto 16px auto;
  }
  .n-selected__back {
    margin: 0 0 16px 0;
  }
  .n-mobile__sscreen {
    display: none;
  }
  .n-about__selected,
  .n-city__selected,
  .n-ski__selected {
    min-width: calc(100% + 48px);
    padding: 16px 0 0 0;
    border-top: 1px solid #e4e4e4;
  }
}
</style>
