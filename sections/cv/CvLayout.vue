<template>
  <div class="cv__layout-columns">
    <CvPersonal />
    <div class="cv__layout-rows">
      <div class="cv__experience-container"><CvWork /></div>
      <div class="cv__experience-container"><CvEducation /></div>
      <div class="cv__experience-container cv__cta-container">
        <p>
          Want to know more? Drop me an email. You can also download my CV below
          👇
        </p>
        <div class="btns__container">
          <a href="mailto:hello@tompa.in" class="cv__cta-btn">Say hello</a>
          <a
            href="/images/cv/tom-pain-cv-jul-23.pdf"
            target="_blank"
            class="cv__cta-btn btn-white"
            >Download CV</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CvPersonal from '@/components/cv/CvPersonal'
import CvWork from '@/components/cv/CvWork'
import CvEducation from '@/components/cv/CvEducation'
export default {
  name: 'CvLayout',
  components: {
    CvPersonal,
    CvWork,
    CvEducation,
  },
}
</script>

<style lang="scss" scoped>
li {
  font-family: 'Rubik', sans-serif;
}
.cv__layout-columns {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0px 10px;
  max-width: 1170px;
  width: 100%;
  margin: 110px auto;
}
.cv__layout-rows {
  display: flex;
  flex-direction: column;
}
.cv__experience-container {
  border-radius: 10px;
  width: 100%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 7px 18px 5px hsla(0, 0%, 61.2%, 0.16);
  transition: box-shadow 0.25s linear;
  margin-bottom: 10px;
}
.cv__cta-container {
  padding: 30px;
}
.btns__container {
  display: flex;
  flex-direction: row;
}
.cv__cta-btn {
  display: inline-block;
  background: #4f2d87;
  border: 2px solid #4f2d87;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  padding: 10px 30px 14px 30px;
  transition: all 0.4s ease;
  height: 45px;
  min-width: 160px;
  width: auto;
  box-sizing: border-box;
  line-height: 1.3;
  margin: 8px 15px 0 0;
  &:hover {
    opacity: 0.8;
  }
}
.cv__cta-btn.btn-white {
  color: #4f2d87;
  background: #fff;
  &:hover {
    opacity: 0.9;
    background: #e2d9f2;
  }
}
@media all and (max-width: 1024px) {
  .cv__layout-columns {
    margin-top: 90px;
  }
}
@media all and (max-width: 750px) {
  .cv__layout-columns {
    display: block;
    margin: 85px auto;
    max-width: 95%;
  }
}
@media all and (max-width: 750px) {
  .btns__container {
    flex-direction: column;
  }
  .cv__cta-btn {
    width: 100%;
    margin: 8px 0;
  }
}
</style>
