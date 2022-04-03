<template>
  <div class="portfolio">
    <h2 class="portfolio__title">Selected past work</h2>
    <div class="portfolio__cards-container">
      <div
        v-for="(item, index) in portfolio"
        :key="index"
        class="portfolio__card"
        data-aos="fade-up"
        :data-aos-delay="200 + index * 100"
        data-aos-once="true"
      >
        <img
          :src="item.imgSrc"
          :alt="item.imgAlt"
          class="portfolio__card-img"
        />
        <div class="portfolio__img-overlay"></div>
        <div class="portfolio__tag-container">
          <div v-for="(tag, i) in item.tags" :key="i" class="portfolio__tag">
            {{ tag }}
          </div>
        </div>
        <div class="portfolio__card-text-container">
          <h3 class="portfolio__card-title">
            {{ item.title }}
          </h3>
          <p v-if="item.text" class="portfolio__card-text">{{ item.text }}</p>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            v-if="item.html"
            class="portfolio__card-v-html"
            v-html="item.html"
          ></div>
        </div>
        <div class="portfolio__git">
          <a
            v-if="item.gitLink"
            :href="item.gitLink"
            target="_blank"
            class="portfolio__git-container"
          >
            <img
              src="@/assets/images/icons/github-purple.png"
              alt="tompa.in"
              class="portfolio__git-icon"
            />
            <a class="portfolio__git-text" :href="item.gitLink" target="_blank"
              >View on GitHub</a
            >
          </a>
          <div v-else class="portfolio__git-soon-container">
            <img
              src="@/assets/images/icons/github-grey.png"
              alt="tompa.in"
              class="portfolio__git-soon-icon"
            />
            <p v-if="item.comingSoon" class="portfolio__git-soon-text">
              GitHub link coming soon
            </p>
            <p v-else class="portfolio__git-soon-text">Private repository 🤷‍♂️</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',
  data() {
    return {
      portfolio: [
        {
          title: 'ETL and data visualisation application',
          text: 'I am currently building an ETL application which extracts and cleans CSV data, adds it to a MySQL database, and provides data visulisations to a custom GUI.',
          imgSrc: '/images/portfolio/meme-gen.jpg',
          imgAlt: 'A Python and MySQL code snippet',
          tags: ['Python', 'MySQL', 'pandas', 'NumPy', 'Matplotlib'],
          comingSoon: true,
        },
        {
          title: 'Packed website',
          html: `<p>Packed is my old company (see my <a href="/cv">CV</a>), I built the <a href="https://packed.co/" rel="nofollow" target="_blank" >website</a> with Nuxt.js using Strapi as a headless CMS. It also used Ghost for the blog.</p>`,
          imgSrc: '/images/portfolio/packed-site.jpg',
          imgAlt: 'A screenshot of the Packed website',
          tags: [
            'Nuxt.js',
            'Strapi',
            'GraphQL',
            'Vue Apollo',
            'AWS',
            'Cloudflare',
          ],
          private: true,
        },
        {
          title: 'Packed app',
          text: 'Along with the Packed website, I product managed the Packed apps, which were built with React Native and listed on both the App Store and Play Store.',
          imgSrc: '/images/portfolio/packed-app.jpg',
          imgAlt: 'A timeline of the Packed app',
          tags: ['React Native', 'AWS'],
          private: true,
        },
        {
          title: 'This site',
          text: `I built this in a weekend but check out the code if you're interested. It utilises continuous deployment on Netlify and is distributed via Cloudflare.`,
          imgSrc: '/images/portfolio/personal-site.jpg',
          imgAlt: 'A screenshot of the tompa.in website',
          tags: ['Nuxt.js', 'Cloudflare', 'Netlify'],
          gitLink: 'https://github.com/TJPain/personal-site',
        },
        {
          title: 'Python meme generator 😂',
          text: `A multimedia command-line and web application to dynamically generate memes, including an image with overlaid text.`,
          imgSrc: '/images/portfolio/meme-gen2.jpg',
          imgAlt: 'A screenshot of the tompa.in website',
          tags: ['Python', 'Flask', 'pandas', 'Pillow'],
          gitLink: 'https://github.com/TJPain/python-flask-meme-generator/',
        },
        {
          title: 'Command line large dataset query tool',
          text: `The tool etracts JSON data, loads it into a database and allows users to query and filter NASA/JPL's very large near-Earth objects dataset.`,
          imgSrc: '/images/portfolio/neo.jpg',
          imgAlt: 'A screenshot of the tompa.in website',
          tags: ['Python', 'Various python modules'],
          gitLink: 'https://github.com/TJPain/python-near-earth-objects',
        },
        {
          title: 'Blog site',
          text: `I wanted to try building a site with a Django back end and a Vue front end. I used Graphene to create the GraphQL API and Apollo to query the API.`,
          imgSrc: '/images/portfolio/django-vue-blog.jpg',
          imgAlt: 'A screenshot of the tompa.in website',
          tags: ['Django', 'Vue.js', 'Graphene', 'GraphQL', 'Vue Apollo'],
          gitLink: 'https://github.com/TJPain/django-vue-graphql-blog-site',
        },
        {
          title: 'Location-based web app',
          text: `A web-based geolocation app showing you shops and nearby places of interest using OpenStreetMap and the Overpass places API. `,
          imgSrc: '/images/portfolio/geodjango.jpg',
          imgAlt: 'A screenshot of the tompa.in website',
          tags: ['Django', 'GeoDjango', 'PostgreSQL'],
          gitLink: 'https://github.com/TJPain/geodjango-app',
        },
        {
          title: 'Secret Drinks Club Shopify',
          html: `<p>A quick project for a friend, I built a Vue.js landing page for the <a href="https://www.secretdrinksclub.com/" rel="nofollow" target="_blank" >Secret Drinks Club</a> and added a Shopify shop.</p>`,
          imgSrc: '/images/portfolio/sdc.jpg',
          imgAlt: 'A screenshot of the tompa.in website',
          tags: ['Vue.js', 'Shopify', 'Cloudflare', 'Netlify'],
          private: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio {
  width: 100%;
  max-width: 1170px;
  height: auto;
  margin: auto;
}
.portfolio__title {
  color: #464860;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
}
.portfolio__cards-container {
  display: flex;
  flex-wrap: wrap;
}
.portfolio__card {
  box-shadow: 0 7px 18px 5px hsla(0, 0%, 61.2%, 0.16);
  border-radius: 7px;
  margin-bottom: 30px;
  width: 31%;
  margin-left: 1%;
  margin-right: 1%;
  position: relative;
}
.portfolio__card-img {
  object-fit: cover;
  width: 100%;
  height: 165px;
  max-height: 165px;
  display: block;
  overflow: hidden;
  border-radius: 7px 7px 0 0;
}
.portfolio__img-overlay {
  height: 100px;
  width: 100%;
  position: absolute;
  border-radius: 7px 7px 0 0;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(41, 39, 39, 0.7) 100%
  );
}
.portfolio__tag-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 15px;
  left: 15px;
  padding-right: 15px;
}
.portfolio__tag {
  color: #fff;
  margin-bottom: 10px;
  background: #38c4b0;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  display: inline-block;
}
.portfolio__card-text-container {
  width: 100%;
  min-height: 80px;
  border-radius: 0 0 7px 7px;
  padding: 25px 25px 50px 25px;
  border-top: 1px solid #e4e4e4;
}
.portfolio__card-title {
  color: #464860;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
.portfolio__git {
  position: absolute;
  bottom: 25px;
  left: 25px;
}
.portfolio__git-container {
  display: block;
  width: 141px;
  cursor: pointer;
}
.portfolio__git-icon {
  background-size: cover;
  width: auto;
  display: inline-block;
  height: 16px;
  color: #fff;
  margin-right: 6px;
  top: 4px;
  position: relative;
  margin-bottom: 3px;
}
.portfolio__git-text {
  color: #4f2d87;
  font-size: 16px;
  font-family: 'Rubik', sans-serif;
  text-decoration: unset;
}
.portfolio__git-text::after {
  content: '';
  width: 0;
  height: 1px;
  display: block;
  background: #4f2d87;
  transition: 300ms;
}
.portfolio__git-text:hover::after {
  width: 100%;
}
.portfolio__git-soon-container {
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.portfolio__git-soon-text {
  margin-bottom: unset;
}
.portfolio__git-soon-icon {
  background-size: cover;
  width: auto;
  height: 16px;
  color: #fff;
  margin-right: 6px;
}
/deep/ .portfolio__card-v-html {
  p {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    color: #464860;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  a {
    text-decoration: underline;
    color: #4f2d87;
  }
  ul {
    margin-bottom: 15px;
  }
  li {
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    color: #464860;
    font-weight: 400;
    line-height: 1.5;
  }
}
@media (max-width: 1024px) {
  .portfolio {
    width: 100%;
  }
}
@media (max-width: 900px) {
  .portfolio {
    padding: 0 10px;
  }
  .portfolio__card {
    width: 48%;
    margin-left: 1%;
    margin-right: 1%;
  }
}
@media (max-width: 650px) {
  .portfolio {
    padding: 0 15px;
  }
  .portfolio__card {
    width: 100%;
  }
}
</style>
