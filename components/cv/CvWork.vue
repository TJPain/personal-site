<template>
  <div class="cv__work-container">
    <h2 class="cv__work-title">Work Experience</h2>
    <div class="jobs__accordion">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="jobs__accordion-item"
        :class="checkClass(index)"
        @click="toggleAccordion(`tab${index}`)"
      >
        <div class="jobs__accordion-item-header">
          <div class="jobs__accordion-overview-container">
            <div v-if="job.imgSrc" class="job__logo-container">
              <img :src="job.imgSrc" :alt="job.imgAlt" class="job__logo" />
            </div>
            <div class="job__item-text-container">
              <div v-if="job.company" class="jobs__accordion-company-title">
                {{ job.company }} - {{ job.title }}
              </div>
              <div v-else class="jobs__accordion-company-title">
                Other roles
              </div>
              <div class="jobs__accordion-dates">{{ job.dates }}</div>
            </div>
          </div>
        </div>
        <div v-if="job.company" class="jobs__accordion-item-body">
          <div class="jobs__accordion-item-body-content">
            <div v-if="job.href" class="jobs__accordion-link-item">
              <p>Website:</p>
              <a
                :href="job.href"
                class="jobs__accordion-link"
                rel="nofollow"
                target="_blank"
                >{{ job.href }}</a
              >
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="jobs__text" v-html="job.text"></div>
          </div>
          <div v-if="job.achievements" class="jobs__accordion-achievements">
            <ul class="jobs__achievements-list">
              <li v-for="(item, i) in job.achievements" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="jobs__tag-container">
            <div v-for="(tag, i) in job.tags" :key="i" class="jobs__tag">
              {{ tag }}
            </div>
          </div>
        </div>
        <div v-else class="jobs__accordion-item-body">
          <div class="jobs__others">
            <ul v-for="(other, i) in others" :key="i" class="jobs__others-item">
              <li>
                <div class="jobs__others-title">
                  <span class="jobs__others-title-bold"
                    >{{ other.company }} - {{ other.title }}</span
                  >
                  ({{ other.dates }}): {{ other.text }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvWork',
  data() {
    return {
      jobs: [
        {
          company: 'Midnite',
          imgSrc: '/images/cv/logos/midnite-icon.png',
          imgAlt: 'The Midnite logo',
          title: 'Software Engineer (back-end)',
          href: 'https://www.midnite.com/',
          dates: 'May 2022 - to date',
          text: `<p style="margin-bottom: unset">Midnite is post-series A ($32m raised) betting platform with a focus on user experience. Technical challenges arise from the large volume of live, risk-adjusted data; operations in 11 highly regulated countries with two distinct brands; and support for multiple languages, currencies, and rapidly growing scale. Since joining, wagering has grown from $1.3M in my first month to over $60M per month and up to $3.5M per day on peak days.</p>`,
          achievements: [
            'I currently lead our first AI personalisation and recommendations product. This has now been rolled out on casino with an almost instant c. 20% increase in 7 and 30 day retention. I am now working on sportsbook personalisation. As part of the work, I refactored our content apis reducing home page latency from over a second to around 300ms while allowing clients to lazy load content.',
            `Designed and implemented a decoupled, event-driven data pipeline leveraging PostgreSQL's Listen/Notify feature to stream events to Kafka.`,
            `Worked in a small team to design and build a casino and a virtuals product from scratch. Within two weeks of launch, casino more than doubled company revenue and virtuals added another 5%. Casino achieved $140M in wagering in its first 12 months and now has a run rate of over $1M per day.`,
            `Built the back-end split testing framework.`,
            `Full stack development for new welcome and sign-up bonus products to improve customer acquisition.`,
            `Engineered an algorithm for dynamic pricing adjustments based on risk assessment and bet volumes.`,
            `Built a prize allocation service for a free-to-play game, factoring in users’ predicted LTV, recent betting history, and reward accumulation to boost engagement via statistically driven prize selection.`,
          ],
          tags: [
            'Python',
            'Flask',
            'SQLAlchemy',
            'AWS',
            'Docker',
            'Vue.js',
            'TypeScript',
          ],
        },
        {
          company: 'Packed',
          imgSrc: '/images/cv/logos/packed-icon.jpg',
          imgAlt: 'The Packed logo',
          title: 'Co-Founder and Software Engineer (full stack)',
          dates: 'March 2017 - March 2022',
          text: `<p style="margin-bottom: unset">Packed provided a marketplace of trusted and reliable holidays for groups.</p>`,
          achievements: [
            'Featured in The Times, the Evening Standard, the Metro and Condé Nast',
            'Built the MVP product using Python / Django, GraphQL, Vue, and AWS integrating Twilio, Google Dialogflow, and WorldPay for payments',
            'Managed three overseas contract developers, a contract designer, and a mobile app development agency',
            'Designed and launched a React Native app with 10,000+ users across iOS and Android',
            'Responsible for the analytics stack and technical SEO, growing organic traffic to >10k users per month',
            'Achieved sales of up to £230k per month, amassed 2,600 customers, and generated £2.3m in sales before closure due to COVID-19',
          ],
          tags: ['Python', 'Django', 'Vue.js', 'Cloudflare', 'SQL', 'AWS'],
        },
        {
          company: 'True',
          title: 'Senior Associate',
          href: 'https://trueplatform.com/',
          imgSrc: '/images/cv/logos/true.jpg',
          imgAlt: 'The True Search logo',
          dates: 'December 2016 - August 2017',
          text: `<p style="margin-bottom: unset">I worked closely with US and European tier-1 venture capital funds to help them strengthen the boards of their portfolio investments, regularly helping US technology companies scale into EMEA.</p>`,
        },
        {
          company: 'Oliver James Associates',
          title:
            'Head of Digital, Marketing and Design & Development Practices',
          imgSrc: '/images/cv/logos/oja.png',
          imgAlt: 'The Oliver James Associates logo',
          href: 'https://www.oliverjames.com/',
          dates: 'January 2015 - December 2016',
          text: `<p style="margin-bottom: unset">I built the teams from scratch, was promoted three times in two years and managed 14 people.</p>`,
        },
        {
          company: 'Outgoing',
          title: 'Product Manager',
          imgSrc: '/images/cv/logos/outgoing.png',
          imgAlt: 'The outgoing logo',
          href: 'https://www.outgoing.co.uk/',
          dates: 'May 2011 - September 2013',
          text: `<p>I was responsible for the department’s financial performance, delivering all aspects of the passenger experience, and managing six full-time staff and up to 110 seasonal staff. Increased passenger numbers from 1,600 in 2010/11 to almost 15,000 passengers in 2012/13.</p>`,
        },
        {
          others: true,
        },
      ],
      others: [
        {
          company: 'Sisu Capital Ltd',
          title: 'Intern, Distressed Debt and Operations',
          dates: 'December 2007 - February 2008',
          text: 'Internship at a distressed debt hedge fund',
        },
        {
          company: '3D Currency Management',
          title: 'Intern',
          dates: 'September 2007 - October 2007',
          text: 'Internship at a hedge fund trading securitised debt in the FX market.',
        },
        {
          company: 'Sigma Wealth Management',
          title: 'Intern and continued part-time work',
          dates: 'July 2007 - August 2009',
          text: 'Developed a model to track fund-based renewal, researched investment opportunities and assisted with report writing and due diligence.',
        },
      ],
      tab0: false,
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
    }
  },
  computed: {
    checkClass() {
      return (index) => {
        if (index === 0 && this.tab0 === true) return 'opened'
        if (index === 1 && this.tab1 === true) return 'opened'
        if (index === 2 && this.tab2 === true) return 'opened'
        if (index === 3 && this.tab3 === true) return 'opened'
        if (index === 4 && this.tab4 === true) return 'opened'
        if (index === 5 && this.tab5 === true) return 'opened'
        else return 'closed'
      }
    },
  },
  methods: {
    toggleAccordion(item) {
      const flag = this[item]
      // Close all opened
      this.tab0 = false
      this.tab1 = false
      this.tab2 = false
      this.tab3 = false
      this.tab4 = false
      this.tab5 = false
      // Toggle selected
      this[item] = !flag
    },
  },
}
</script>

<style lang="css" scoped>
li {
  font-family: 'Rubik', sans-serif;
}
.cv__work-container {
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 30px;
}
.cv__work-title {
  color: #464860;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}
.jobs__accordion {
  width: 100%;
  max-width: 1000px;
  margin: 32px auto;
  border-bottom: 1px solid #e4e4e4;
}
.jobs__accordion-item {
  background-color: #fff;
  color: #464860;
  border-top: 1px solid #e4e4e4;
}
.jobs__accordion-item-header {
  padding: 8px 48px 8px 0;
  min-height: 56px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-weight: 600;
}
.jobs__accordion-item-header:hover {
  color: #4f2d87;
}
.jobs__accordion-item-header::after {
  content: url(~@/assets/images/icons/accordion-down.svg);
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s linear;
}
.opened .jobs__accordion-item-header::after {
  transform: translateY(-50%) rotate(180deg);
}
.jobs__accordion-overview-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.jobs__accordion-dates {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.job__logo-container {
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  border: 1px solid #e4e4e4;
  padding: 10px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.job__logo {
  width: 100%;
  height: auto;
}
.jobs__accordion-item-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s linear;
}
.opened .jobs__accordion-item-body {
  opacity: 1;
  max-height: none;
  overflow: auto;
}
.jobs__accordion-item-body-content {
  padding: 16px 0;
  line-height: 24px;
}
.jobs__accordion-link-item {
  display: flex;
  flex-direction: row;
}
.jobs__accordion-link {
  margin-left: 3px;
  cursor: pointer;
  color: #4f2d87;
}
/deep/ .text__content {
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
.jobs__accordion-achievements {
  margin-bottom: 16px;
}
.jobs__achievements-title {
  font-weight: 700;
}
.jobs__achievements-list {
  list-style-type: disc;
  margin-left: 0;
  padding-left: 20px;
}
.jobs__others {
  padding-top: 5px;
}
.jobs__others-item {
  margin-bottom: 12px;
  padding-left: 20px;
  list-style-type: disc;
  margin-left: 0;
}
.jobs__others-title-bold {
  font-weight: 600;
}
.jobs__tag-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 16px;
}
.jobs__tag {
  color: #fff;
  background: #4f2d87;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  margin: 0 10px 4px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  display: inline-block;
}
@media all and (max-width: 750px) {
  .job__logo-container {
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
  }
}
@media all and (max-width: 600px) {
  .cv__work-container {
    padding: 30px 20px;
  }
}
@media all and (max-width: 450px) {
  .job__logo-container {
    display: none;
  }
}
</style>
