<template>
  <div class="n-submenu__container">
    <div class="n-submenu__grid">
      <div class="n-submenu__column">
        <nuxt-link to="/#portfolio" @click.native="$emit('close-menu')">
          <h3 class="n-submenu__title n-submenu__link__hover">
            Selected past work
          </h3>
        </nuxt-link>
        <ul class="n-submenu__list">
          <li class="n-submenu__item">
            <nuxt-link
              to="/#trading"
              class="n-submenu__link n-submenu__link__hover"
              @click.native="$emit('close-menu')"
            >
              High-frequency trading algorithm 
            </nuxt-link>
          </li>
          <li class="n-submenu__item">
            <nuxt-link
              to="/#etl"
              class="n-submenu__link n-submenu__link__hover"
              @click.native="$emit('close-menu')"
            >
              ETL and data visualisation application
            </nuxt-link>
          </li>
          <li class="n-submenu__item">
            <nuxt-link
              to="/#sdc"
              class="n-submenu__link n-submenu__link__hover"
              @click.native="$emit('close-menu')"
            >
              The Secret Drinks Club Shopify
            </nuxt-link>
          </li>
          <li class="n-submenu__item">
            <nuxt-link
              to="/#personal"
              class="n-submenu__link n-submenu__link__hover"
              @click.native="$emit('close-menu')"
            >
              This site
            </nuxt-link>
          </li>
          <li class="n-submenu__item">
            <nuxt-link
              to="/#geodjango"
              class="n-submenu__link n-submenu__link__hover"
              @click.native="$emit('close-menu')"
            >
              Location-based web app
            </nuxt-link>
          </li>
          <li class="n-submenu__item">
            <nuxt-link
              to="/#packed"
              class="n-submenu__link n-submenu__link__hover"
              @click.native="$emit('close-menu')"
            >
              Packed website
            </nuxt-link>
          </li>
          <li class="n-submenu__item">
            <nuxt-link
              to="/#packed-app"
              class="n-submenu__link n-submenu__link__hover"
              @click.native="$emit('close-menu')"
            >
              The Packed iOS and Android app
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="n-submenu__column">
        <a href="https://github.com/TJPain" target="_blank"
          ><h3 class="n-submenu__title n-submenu__link__hover">
            Selected GitHub Repos
          </h3></a
        >
        <ul class="n-submenu__list">
          <li class="n-submenu__item">
            <a
              href="https://github.com/TJPain/chat-gpt-agent-with-memory-microservice"
              target="_blank"
              class="n-submenu__link n-submenu__link__hover"
              >Chat GPT agent with memory microservice</a
            >
          </li>
          <li class="n-submenu__item">
            <a
              href="https://github.com/TJPain/python-flask-meme-generator/"
              target="_blank"
              class="n-submenu__link n-submenu__link__hover"
              >Python meme generator</a
            >
          </li>
          <li class="n-submenu__item">
            <a
              href="https://github.com/TJPain/geodjango-app"
              target="_blank"
              class="n-submenu__link n-submenu__link__hover"
              >Location-based web app
            </a>
          </li>
          <li class="n-submenu__item">
            <a
              href="https://github.com/TJPain/python-near-earth-objects"
              target="_blank"
              class="n-submenu__link n-submenu__link__hover"
              >Command line large dataset query tool</a
            >
          </li>
          <li class="n-submenu__item">
            <a
              href="https://github.com/TJPain/django-vue-graphql-blog-site"
              target="_blank"
              class="n-submenu__link n-submenu__link__hover"
              >Django, Vue, GraphQL blog site</a
            >
          </li>
          <li class="n-submenu__item">
            <a
              href="https://github.com/TJPain/python-django-diary"
              target="_blank"
              class="n-submenu__link n-submenu__link__hover"
              >Django, Python, SQLite diary app
            </a>
          </li>
        </ul>
        <a
          href="https://github.com/TJPain"
          target="_blank"
          class="n-submenu__applink"
        >
          GitHub profile
          <svg
            class="n-submenu__appicon"
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.83614 4.26859L6.22626 0.658632C6.12322 0.555585 5.98588 0.499023 5.83943 0.499023C5.69283 0.499023 5.55557 0.555666 5.45252 0.658632L5.12477 0.986462C5.02181 1.08935 4.96508 1.22677 4.96508 1.37329C4.96508 1.51974 5.02181 1.66179 5.12477 1.76467L7.23072 3.87526H0.540018C0.238356 3.87526 0 4.11142 0 4.41316V4.87663C0 5.17837 0.238356 5.43834 0.540018 5.43834H7.25461L5.12485 7.56071C5.02189 7.66376 4.96516 7.79744 4.96516 7.94396C4.96516 8.09033 5.02189 8.22596 5.12485 8.32893L5.4526 8.6557C5.55565 8.75875 5.69291 8.8149 5.83951 8.8149C5.98596 8.8149 6.1233 8.75801 6.22634 8.65497L9.83622 5.04509C9.93951 4.94172 9.99632 4.80373 9.99591 4.65704C9.99623 4.50987 9.93951 4.3718 9.83614 4.26859Z"
              fill="#4F2D87"
            />
          </svg>
        </a>
      </div>
      <div class="n-submenu__column">
        <!-- <a href="#"
          ><h3 class="n-submenu__title n-submenu__link__hover">Case studies</h3></a
        > -->
        <h3 class="n-submenu__title">Case studies - coming soon</h3>
        <ul class="n-submenu__bloglist">
          <li class="n-submenu__blogitem">
            <div class="n-submenu__bloglink">
              <img
                src="@/assets/images/header/packed-site-thumb.jpg"
                alt="blog image"
                class="n-submenu__blogimage"
              />
              The Packed website replatform. From Gulp.js to Vue.js
            </div>
          </li>
          <li class="n-submenu__blogitem">
            <div class="n-submenu__bloglink">
              <img
                src="@/assets/images/header/packed-app.jpg"
                alt="blog image"
                class="n-submenu__blogimage"
              />
              Cheaply launching an iOS and Android app with React Native
            </div>
          </li>
          <li class="n-submenu__blogitem">
            <div class="n-submenu__bloglink">
              <img
                src="@/assets/images/header/sdc-thumb.jpg"
                alt="blog image"
                class="n-submenu__blogimage"
              />
              Launching a Shopify store in a weekend
            </div>
          </li>
        </ul>
        <!-- <a href="#" class="n-submenu__applink">
          See all blogs
          <svg
            class="n-submenu__appicon"
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.83614 4.26859L6.22626 0.658632C6.12322 0.555585 5.98588 0.499023 5.83943 0.499023C5.69283 0.499023 5.55557 0.555666 5.45252 0.658632L5.12477 0.986462C5.02181 1.08935 4.96508 1.22677 4.96508 1.37329C4.96508 1.51974 5.02181 1.66179 5.12477 1.76467L7.23072 3.87526H0.540018C0.238356 3.87526 0 4.11142 0 4.41316V4.87663C0 5.17837 0.238356 5.43834 0.540018 5.43834H7.25461L5.12485 7.56071C5.02189 7.66376 4.96516 7.79744 4.96516 7.94396C4.96516 8.09033 5.02189 8.22596 5.12485 8.32893L5.4526 8.6557C5.55565 8.75875 5.69291 8.8149 5.83951 8.8149C5.98596 8.8149 6.1233 8.75801 6.22634 8.65497L9.83622 5.04509C9.93951 4.94172 9.99632 4.80373 9.99591 4.65704C9.99623 4.50987 9.93951 4.3718 9.83614 4.26859Z"
              fill="#4F2D87"
            />
          </svg>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioMenu',
}
</script>

<style lang="scss" scoped>
.n-submenu__container {
  height: 0;
  position: absolute;
  top: 83px;
  transform: translateY(-20px);
  overflow: hidden;
  opacity: 0;
  left: 0;
  width: 100vw;
  z-index: -100;
  background-color: #fff;
  box-shadow: -10px 10px 40px rgba(155, 155, 155, 0.16);
  border-top: none;
  transition: all 0.4s ease, z-index 0s linear, border-top 0s ease;
  pointer-events: none;
  transition-delay: 0.1s;
}

.n-submenu__grid {
  max-width: 1170px;
  margin: 0 auto;
  padding: 32px 0 24px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 29px;
}
.n-submenu__column {
  border-right: 1px solid #e4e4e4;
  &:last-child {
    border-right: none;
  }
}
.n-submenu__title {
  margin: 0 0 14px 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.05em;
  color: #464860;
}

.n-submenu__list,
.n-submenu__bloglist {
  list-style: none;
  padding: 0;
  margin: 0;
}
.n-submenu__item {
  display: block;
  margin: 0 0 14px 0;
}
.n-submenu__imagewrap img {
  transition: all 0.4s ease;
  height: 50px;
  &:hover {
    opacity: 0.9;
    background: #e2d9f2;
  }
}
.n-submenu__link__hover {
  transition: all 0.4s ease-in-out;
}
.n-submenu__link__hover:hover {
  text-decoration: underline;
  color: #4f2d87;
}
.n-submenu__link,
.n-submenu__apptext {
  font-size: 16px;
  line-height: 24px;
  color: #464860;
}
.n-submenu__appicon {
  margin: 0 0 0 4px;
  transition: all 0.3s ease;
}
.n-submenu__applink {
  display: block;
  margin: 20px 0 24px 0;
  color: #4f2d87;
  &:hover .n-submenu__appicon {
    margin: 0 0 0 8px;
  }
}
.n-submenu__appimages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  height: 50px;
}
.n-submenu__blogitem {
  display: block;
}
.n-submenu__blogimage {
  margin: 0 20px 0 0;
  height: 80px;
}
.n-submenu__bloglink {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 10px 0;
  font-size: 16px;
  line-height: 24px;
  color: #464860;
}
@media all and (max-width: 1200px) {
  .n-submenu__blogimage {
    margin: 0 10px 0 0;
    width: 93px;
    height: 80px;
    object-fit: cover;
  }
}
@media all and (min-width: 668px) and (max-width: 1270px) {
  .n-submenu__grid {
    width: calc(100% - 100px);
  }
}
@media all and (max-width: 1024px) {
  .n-submenu__grid {
    width: 100%;
    padding: 0 0 100px 0;
    grid-template-columns: 1fr;
  }
  .n-submenu__column {
    padding: 24px 10px 20px 5px;
    border-right: none;
    border-bottom: 1px solid #e4e4e4;
    &:last-child {
      border-bottom: none;
    }
  }
}
@media all and (max-width: 380px) {
  .n-submenu__imagewrap img {
    height: 45px;
  }
}
</style>
