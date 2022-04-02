<template>
  <div class="cv__layout-columns">
    <div class="cv__personal-container">some personal stuff</div>
    <div class="cv__layout-rows">
      <div class="cv__experience-container">jobs</div>
      <div class="cv__experience-container">education</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvLayout',
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
.cv__personal-container {
  border: 1px solid blue;
  border-radius: 10px;
  min-height: 400px;
  width: 100%;
  height: auto;
}
.cv__experience-container {
  border: 1px solid blue;
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  height: auto;
}
</style>
