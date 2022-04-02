<template>
  <div class="cv__layout-columns" data-aos="fade-right " data-aos-once="true">
    <CvPersonal />
    <div class="cv__layout-rows" data-aos="fade-up " data-aos-once="true">
      <div class="cv__experience-container"><CvWork /></div>
      <div class="cv__experience-container">education</div>
    </div>
  </div>
</template>

<script>
import CvPersonal from '@/components/cv/CvPersonal'
import CvWork from '@/components/cv/CvWork'
export default {
  name: 'CvLayout',
  components: {
    CvPersonal,
    CvWork,
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 0px;
  grid-template-areas:
    '.'
    '.';
}
.cv__experience-container {
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 7px 18px 5px hsla(0, 0%, 61.2%, 0.16);
  transition: box-shadow 0.25s linear;
}
</style>
