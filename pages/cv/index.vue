<template>
  <div class="cv">
    <p class="some-text" style="margin-top: 200px">This is a CV... probably</p>
  </div>
</template>

<script>
export default {
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
