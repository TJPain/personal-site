<template>
  <nav class="n-main__navigation">
    <ul class="n-navigation__list">
      <li class="n-navigation__item">
        <span>About us</span>
        <AboutSubmenu />
      </li>
      <li class="n-navigation__item">
        <span>Ski</span>
        <SkiSubmenu />
      </li>
      <li class="n-navigation__item">
        <span>City & Sun</span>
        <CitySubmenu />
      </li>
      <li v-if="!whiteCta" class="">
        <a href="mailto:hello@tompa.in" class="n-navigation__cta"
          >Say hello</a
        >
      </li>
      <li v-if="whiteCta" class="">
        <a href="mailto:hello@tompa.in" class="n-navigation__cta-white"
          >Say hello</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import AboutSubmenu from '@/components/global/navigation-elements/dropdown-elements/AboutSubmenu'
import CitySubmenu from '@/components/global/navigation-elements/dropdown-elements/CitySubmenu'
import SkiSubmenu from '@/components/global/navigation-elements/dropdown-elements/SkiSubmenu'
export default {
  name: 'MainNavigation',
  components: {
    AboutSubmenu,
    CitySubmenu,
    SkiSubmenu,
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
.n-navigation__list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 83px;
}
.n-navigation__item {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 25px;
  color: #464860;
  font-size: 16px;
  border-top: 3px solid transparent;
  transition: all 0.4s ease;
  &:hover {
    border-top: 3px solid #4f2d87;
    background: #f8f8ff;
  }
  & span:hover {
    cursor: pointer;
  }
  &:hover.no-hover {
    border-top: 3px solid transparent;
    background: #fff;
  }
  &:hover .n-submenu__container {
    left: 0;
    opacity: 1;
    height: auto;
    transform: translateY(0);
    z-index: 1000;
    border-top: 1px solid #e4e4e4;
    pointer-events: all;
  }
}
.n-navigation__link {
  color: #464860;
}
.n-navigation__cta {
  display: inline-block;
  background: #4f2d87;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  padding: 13px 30px;
  transition: all 0.4s ease;
  height: 45px;
  box-sizing: border-box;
  line-height: 1.3;
  margin-left: 15px;
  &:hover {
    opacity: 0.8;
  }
}

.n-navigation__cta-white {
  background: #fff;
  color: #4f2d87;
  border: 1px solid #4f2d87;
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  padding: 13px 30px;
  transition: all 0.4s ease;
  height: 45px;
  box-sizing: border-box;
  line-height: 1.1;
  &:hover {
    opacity: 0.9;
    background: #e2d9f2;
  }
}

@media all and (max-width: 1024px) {
  .n-main__navigation {
    display: none;
  }
}
</style>
