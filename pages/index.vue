<template>
  <div class="home">
    <HeroBanner />
    <p class="some-text" style="margin-top: 200px; background: white">
      orem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner'
export default {
  components: {
    HeroBanner,
  },
  layout: 'DefaultLayout',
  head() {
    return {
      title: 'Tom Pain | Full stack developer | MSc Computer Science',
      link: [
        {
          rel: 'canonical',
          href: 'https://tompa.in/',
        },
      ],
      meta: [
        // titles
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Tom Pain | Full stack developer | MSc Computer Science',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Tom Pain | Full stack developer | MSc Computer Science',
        },
        // descriptions
        {
          hid: 'description',
          name: 'description',
          content:
            'Full stack developer. Experience with Vue.js / Nuxt.js, Python, Django, SQL, GraphQL, and Java',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Full stack developer. Experience with Vue.js / Nuxt.js, Python, Django, SQL, GraphQL, and Java',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Full stack developer. Experience with Vue.js / Nuxt.js, Python, Django, SQL, GraphQL, and Java',
        },
        // keywords
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'full stack developer, python, front end, vue',
        },
        // links
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://tompa.in/',
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://tompa.in/',
        },
        // don't need to edit
        {
          hid: 'author',
          name: 'author',
          content: 'Tom Pain',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://tompa.in/assets/images/jpg/packed-OG-image.jpg',
        },
        {
          hid: 'og:image2',
          property: 'og:image',
          content: 'https://tompa.in/assets/images/jpg/packed-OG-image2.jpg',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://tompa.in/assets/images/jpg/packed-twitter-image.jpg',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://tompa.in/assets/images/jpg/packed-twitter-image.jpg',
        },
      ],
    }
  },
}
</script>
