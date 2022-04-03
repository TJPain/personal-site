<template>
  <div class="coming-soon">
    <div class="coming__top-content">
      <div class="coming__left-container">
        <h1 class="coming__title">This page is coming soon!</h1>
        <p>
          I only had a weekend to make this site but will add some content
          here soon... on that, if you find any issues please add a pull request
          to
          <a
            target="_blank"
            href="https://github.com/TJPain/personal-site"
            class="coming__link"
            >GitHub</a
          >
          😂
        </p>
      </div>
      <div class="coming__right-container">
        <div class="coming__gif-container">
          <img
            class="coming__gif"
            src="@/assets/images/about/coming-soon.gif"
            alt="a gif of a person on an electric cart"
          />
          <div class="coming__dots"></div>
          <img
            class="coming__lines"
            src="@/assets/images/decoration/lines-4.png"
          />
        </div>
      </div>
    </div>
    <Pacman />
  </div>
</template>

<script>
import Pacman from '@/components/about/Pacman'
export default {
  name: 'ComingSoon',
  components: {
    Pacman,
  },
}
</script>

<style lang="scss" scoped>
.coming-soon {
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: 120px auto 0 auto;
}
.coming__top-content {
  display: flex;
  flex-direction: row;
}
.coming__left-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 60px;
}
.coming__title {
  color: #464860;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
}
.coming__gif-container {
  position: relative;
}
.coming__dots {
  top: -25px;
  left: -45px;
  display: block;
  position: absolute;
  width: 140px;
  height: 140px;
  z-index: -1;
  background: url(~@/assets/images/decoration/dots-sprite-2.png) -186px -10px;
}
.coming__lines {
  right: -15px;
  display: block;
  position: absolute;
  bottom: -10px;
  width: 100px;
  height: 100px;
  z-index: 99;
}
.coming__link {
  color: #4f2d87;
}
@media all and (max-width: 1270px) {
  .coming-soon {
    width: calc(100% - 100px);
    padding: 0;
  }
}
@media all and (max-width: 1024px) {
  .coming-soon {
    margin-top: 90px;
    width: 100%;
    padding: 0 15px;
  }
}
@media all and (max-width: 870px) {
  .coming-soon {
    display: block;
    margin: 85px auto;
    max-width: 95%;
  }
  .coming__top-content {
    display: block;
    text-align: center;
  }
  .coming__left-container {
    padding-right: unset;
  }
  .coming__gif-container {
    margin-top: 20px;
  }
  .coming__gif {
    max-width: 100%;
    height: auto;
  }
  .coming__lines,
  .coming__dots {
    display: none;
  }
}
</style>
