<template>
  <div class="cv__layout-columns" data-aos="fade-right " data-aos-once="true">
    <CvPersonal />
    <div class="cv__layout-rows" data-aos="fade-up " data-aos-once="true">
      <div class="cv__experience-container"><CvWork /></div>
      <div class="cv__experience-container"><CvEducation /></div>
      <div class="cv__experience-container cv__cta-container">
        <p>Want to know more? Drop me an email</p>
        <div class="">
          <a href="mailto:hello@tompa.in" class="cv__cta-btn">Say hello</a>
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
.cv__cta-btn {
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
  margin-top: 8px;
  &:hover {
    opacity: 0.8;
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
</style>
