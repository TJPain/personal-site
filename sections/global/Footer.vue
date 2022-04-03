<template>
  <footer
    class="footer__container"
    @mouseenter="hideQuotesBar"
    @mouseleave="showQuotesBar"
  >
    <section class="footer__top--container">
      <span class="footer__top--left"></span>
      <svg
        class="footer__top--centre-shape"
        :class="{ greyBackground: greyBackground }"
        viewBox="0 0 80 32"
      >
        <path
          d="M0 0v32h80v-32c-1.2 0-2.576 0.214-3.2 0.4-6.868 2.049-10.4 7.2-13.998 13.892-5.005 9.308-12.17 16.946-22.802 16.946s-18-7.238-22.802-16.946c-4.036-8.161-8.077-11.781-14.798-13.892-0.728-0.229-1.6-0.4-2.4-0.4z"
        ></path>
      </svg>
      <button
        id="back-to-top-btn"
        class="footer__back-to-top"
        @click.prevent="scrollToTop"
      >
        <span>Back to top</span>
      </button>
      <span class="footer__top--right"></span>
    </section>
    <section class="footer__contents">
      <div class="footer__contents--container">
        <div class="footer__value--prop--wrapper">
          <h3 class="footer__value--prop">
            Thinking about a project? Get in touch!
          </h3>
        </div>
        <FooterBottomContents />
      </div>
    </section>
  </footer>
</template>

<script>
import FooterBottomContents from '@/components/global/footer-elements/FooterBottomContents'

export default {
  name: 'MainFooter',
  components: {
    FooterBottomContents,
  },
  props: {
    greyBackground: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToTop() {
      document.querySelector('#__nuxt').scrollIntoView({
        behavior: 'smooth',
      })
    },
    hideQuotesBar() {
      this.$nuxt.$emit('hide-quotes-bar')
    },
    showQuotesBar() {
      this.$nuxt.$emit('show-quotes-bar')
    },
  },
}
</script>

<style lang="scss" scoped>
.footer__container {
  position: relative;
  width: 100%;
  margin-top: 80px;
  padding: 10px 0 0 0;
  background-color: #fff;
}

.footer__top--container {
  position: absolute;
  width: 100%;
  height: 41px;
  top: 5px;
  left: 0;
  z-index: 2;
  background-color: #343648;
  display: flex;
  justify-content: center;
}

.footer__top--left {
  background-color: #343648;
  left: 0;
  display: block;
  position: absolute;
  width: calc(50% - 49px);
  height: 100%;
}

.footer__top--right {
  background-color: #343648;
  right: 0;
  display: block;
  position: absolute;
  width: calc(50% - 49px);
  height: 100%;
}

.footer__top--centre-shape {
  width: 100px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -50px;
  fill: #343648;
  background-color: #fff;
  z-index: -1;
}

.footer__top--centre-shape.greyBackground {
  background-color: #f9f9fb;
}

.footer__back-to-top {
  position: relative;
  background-image: url(~@/assets/images/icons/footer-back-to-top.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 20px;
  width: 16px;
  border: none;
  background-color: unset;
  transition: all 0.4s ease;
}
.footer__top--centre-shape:hover {
  cursor: pointer;
}
.footer__back-to-top span {
  display: none;
}

.footer__top--centre-shape:hover + .footer__back-to-top,
.footer__back-to-top:hover {
  animation-duration: 0.5s;
  animation-name: BounceArrow;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  cursor: pointer;
}

@keyframes BounceArrow {
  from {
    transform: none;
  }

  to {
    transform: scale(1.1) translateY(-3px);
  }
}

.footer__back-to-top:focus {
  outline: 0;
}

.footer__contents {
  position: relative;
  top: 41px;
  background-color: #343648;
  width: 100%;
  padding-top: 40px;
  margin-top: -40px;
}

.footer__contents--container {
  width: 100%;
  max-width: 1140px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.footer__value--prop--wrapper {
  width: 100%;
  max-width: 550px;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
}

.footer__value--prop {
  font-family: Rubik, sans-serif;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  line-height: 26px;
  font-weight: 500;
}

@media all and (max-width: 900px) {
  .footer__container {
    margin-top: 20px;
  }
  .footer__value--prop {
    max-width: 95%;
    margin: auto;
  }
}
</style>
