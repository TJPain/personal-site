<template>
  <div class="hero-banner">
    <client-only>
      <parallax :speed-factor="0.4" class="hero__image">
        <img
          src="@/assets/images/home/hero-banner-image.jpg"
          alt="mountains in the sun"
        />
      </parallax>
    </client-only>
    <img
      src="@/assets/images/home/hero-banner-image.jpg"
      alt="mountains in the sun"
      class="hero_img-mobile"
    />
    <div class="hero__contents-wrapper">
      <div class="hero__textbox-wrapper">
        <div class="hero__text-container">
          <div class="hero__container-top">
            <img
              src="@/assets/images/home/tom-pain.jpg"
              alt="Tom Pain"
              class="hero__portrait"
            />
            <div class="hero__title-container">
              <p class="hero__title">Hi!</p>
              <h1 class="hero__title">I'm Tom Pain</h1>
            </div>
          </div>
          <p class="hero__title hero__title-mobile">Hi! I'm Tom Pain</p>
          <p class="hero__text">
            A full-stack engineer, most experienced with Python, including Flask and Django, on the backend
            and Vue.js along with vanilla JavaScript and TypeScript on the frontend. 
          </p>
          <div class="hero__dots"></div>
          <img
            class="hero__lines"
            src="@/assets/images/decoration/lines-4.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  name: 'HeroBanner',
  components: {
    Parallax,
  },
}
</script>

<style lang="scss" scoped>
.hero-banner {
  min-height: calc(1vh - 83px);
  margin: 83px 0 50px 0;
  overflow: hidden;
  position: relative;
}
.hero__contents-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.hero__textbox-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1170px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.hero__text-container {
  position: relative;
  height: 400px;
  width: 400px;
  border-radius: 10px;
  background: rgb(79, 45, 135);
  background: linear-gradient(
    132deg,
    rgba(79, 45, 135, 1) 0%,
    rgba(107, 68, 171, 1) 35%,
    rgba(147, 111, 208, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  color: #fff;
}
.hero__container-top {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
}
.hero__portrait {
  height: 100px;
  widows: 100px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-right: 20px;
}
.hero__title,
.hero__subtitle,
.hero__text {
  color: #fff;
  font-family: 'Rubik', sans-serif;
}
.hero__title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}
.hero__title-mobile {
  display: none;
}
.hero__lines {
  position: absolute;
  bottom: -20px;
  right: -15px;
  width: 95px;
  height: 95px;
  z-index: 99;
}
.hero_img-mobile {
  display: none;
}
@media (max-width: 1270px) {
  .hero__textbox-wrapper {
    max-width: unset;
    width: calc(100% - 100px);
  }
}
@media (max-width: 1024px) {
  .hero__textbox-wrapper {
    width: 100%;
    padding: 0 15px;
  }
  .hero-banner {
    min-height: calc(1vh - 66px);
    margin-top: 66px;
  }
}
@media (max-width: 650px) {
  .hero-banner {
    width: auto;
    max-height: 700px;
  }
  .hero__image {
    display: none;
  }
  .hero_img-mobile {
    display: block;
  }
}
@media (max-width: 450px) {
  .hero__text-container {
    max-width: 100%;
  }
}
@media (max-width: 370px) {
  .hero-banner {
    min-height: unset;
  }
  .hero__container-top {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    width: 100%;
  }
  .hero__title-container {
    display: none;
  }
  .hero__text-container {
    height: 500px;
    margin-top: 80px;
  }
  .hero__title-mobile {
    display: unset;
  }
}
</style>
