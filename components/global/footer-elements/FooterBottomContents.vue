<template>
  <div class="footer__bottom--wrapper">
    <div class="social-icons__container">
      <a href="mailto:hello@tompa.in" target="_blank">
        <img
          src="@/assets/images/footer/tp-email.png"
          alt="an email icon"
          class="footer__bottom--social--btn footer__bottom--img"
        />
      </a>
      <a href="https://github.com/TJPain" target="_blank">
        <img
          src="@/assets/images/footer/tp-git.png"
          alt="The github logo"
          class="footer__bottom--social--btn footer__bottom--img"
        />
      </a>
      <a href="http://uk.linkedin.com/in/tjpain" target="_blank">
        <img
          src="@/assets/images/footer/tp-linkedin.png"
          alt="The LinkedIn logo"
          class="footer__bottom--social--btn footer__bottom--img"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterBottomContents',
}
</script>

<style lang="scss" scoped>
.footer__bottom--wrapper {
  margin-top: 25px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}

.social-icons__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.footer__bottom--img {
  height: 52px;
  width: auto;
  margin: 0 5px 0 5px;
}

a .footer__bottom--img {
  transition: all 0.4s ease;
  &:hover {
    opacity: 0.9;
    background: rgba(255, 255, 255, 0.2);
  }
}

.footer__bottom--app--btn {
  border-radius: 5px;
}

.footer__bottom--social--btn {
  border-radius: 50%;
}

@media only screen and (max-width: 600px) {
  .footer__bottom--wrapper {
    flex-direction: column;
  }

  .footer__bottom--col1,
  .footer__bottom--col2,
  .footer__bottom--col3 {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
