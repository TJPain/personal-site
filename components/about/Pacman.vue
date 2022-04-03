<template>
  <div class="pacman">
    <h3 class="pacman-title">Here's Pacman in the meantime...</h3>
    <div class="game" style="text-align: center">
      <iframe
        src="https://funhtml5games.com?embed=pacman"
        style="width: 342px; height: 490px; border: none"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pacman',
}
</script>

<style lang="scss" scoped>
.pacman {
  max-width: unset;
  width: 100%;
  padding-top: 80px;
}
.pacman-title {
  text-align: center;
  margin-bottom: 30px;
  color: #464860;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
  font-weight: 700;
}
.game {
  height: auto;
}
@media all and (max-width: 370px) {
  .pacman {
    display: none;
  }
}
</style>
