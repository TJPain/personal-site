<template>
  <div class="cv__work-container">
    <h2 class="cv__work-title">Work Experience</h2>
    <div class="jobs__accordion">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="jobs__accordion-item"
        :class="{ opened: activeTab === `tab-${index}` }"
        @click="jumpToTab(`tab-${index}`)"
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
                rel="“nofollow”"
                target="_blank"
                >{{ job.href }}</a
              >
            </div>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="jobs__text" v-html="job.text"></div>
          </div>
          <div v-if="job.achievements" class="jobs__accordion-achievements">
            <p class="jobs__achievements-title">Key achievements:</p>
            <ul class="jobs__achievements-list">
              <li v-for="(item, i) in job.achievements" :key="i">
                <div>{{ item }}</div>
              </li>
            </ul>
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
      activeTab: 'tab',
      jobs: [
        {
          company: 'Packed',
          href: 'https://packed.co/',
          imgSrc: '/images/cv/logos/packed-icon.jpg',
          imgAlt: 'The Packed logo',
          title: 'Co-Founder, responsible for technology and product',
          dates: 'March 2017 - March 2022',
          text: `<p style="margin-bottom: unset">Packed provided a marketplace of trusted and reliable holidays for groups, and the tools they needed to effortlessly plan and book their trips. Pre-covid, we were in a very strong position with sales of up to £230k per month, however, after refunding significant client funds for cancelled trips and two years with very little revenue, the company was in a financially difficult position, and we took the decision to close.</p>`,
          achievements: [
            'Over 2,600 customers and £2.3m in sales',
            'Average review score of 4.98 / 5 from 250+ reviews',
            'Featured in The Times, the Evening Standard, the Metro and Condé Nast',
            'I built the original website using gulp.js and then the latest website with Vue.js, Strapi as a headless CMS and Vue Apollo to integrate GraphQL',
            'Managed three overseas contract developers who predominantly built our booking system on Salesforce along with a contract designer and a mobile app development agency in Serbia',
            'Designed and launched a React Native mobile app on the App Store and Play Store, which had almost 10,000 users',
            'Responsible for all technical SEO, growing organic traffic to >10k users per month',
            'Responsible for our on-site and in-app analytics stack including Google Tag Manager, Google Analytics, Mixpanel, Branch, and Segment. Improved on-site conversion resulting in a projected LTV-CAC of 9.6x',
          ],
        },
        {
          company: 'True',
          title: 'Senior Associate',
          href: 'https://trueplatform.com/',
          imgSrc: '/images/cv/logos/true.jpg',
          imgAlt: 'The True Search logo',
          dates: 'December 2016 - August 2017',
          text: `<p style="margin-bottom: unset">I worked closely with US and European tier-1 venture capital and private equity funds to help them strengthen the boards of their portfolio investments and regularly helped US technology companies to scale into EMEA. The role was diverse and blended long consultation periods with the delivery of high-profile executive search placements across board-level functions (predominantly CTO, CPO, and CMO) in all technology verticals.</p>`,
        },
        {
          company: 'Oliver James Associates',
          title: 'Associate Director',
          imgSrc: '/images/cv/logos/oja.png',
          imgAlt: 'The Oliver James Associates logo',
          href: 'https://www.oliverjames.com/',
          dates: 'January 2015 - December 2016',
          text: `<p style="margin-bottom: unset">Following success in Actuarial, Risk & Compliance, Finance, and Change Management, I was approached by OJA to establish a new Digital desk. On the back of strong sales and bottom-line performance for the Digital team, I started Design & Engineering and Marketing recruitment teams which I managed concurrently. I was promoted three times in two years and managed a team of 14 people. I also led the UK-wide diversification into non-Financial Services sectors.</p>`,
        },
        {
          company: 'Page Group',
          title: 'Senior Consultant, Digital',
          imgSrc: '/images/cv/logos/page.png',
          imgAlt: 'The Page Group logo',
          href: 'https://www.page.com/',
          dates: 'October 2013 - January 2015',
          text: `<p style="margin-bottom: unset">Responsible for forming and growing the Digital recruitment team in the North West.</p>`,
        },

        {
          company: 'Outgoing',
          title: 'Product Manager',
          imgSrc: '/images/cv/logos/outgoing.png',
          imgAlt: 'The outgoing logo',
          href: 'https://www.outgoing.co.uk/',
          dates: 'May 2011 - September 2013',
          text: `<p>Outgoing is an independent travel company that carried over 40,000 passengers per year. I was employed in a sales role but was quickly promoted to Product Manager for the Ski division where I was responsible for the department’s financial performance, leading the sales team, delivering all aspects of the passenger experience, managing a team of up to 110 seasonal staff as well as six full time employees, and laying the foundations for future business growth.</p>
          <p style="margin-bottom: unset">Increased passenger numbers from 1,600 in 2010/11 to almost 15,000 passengers in 2012/13, transforming the department’s financial performance from a small loss to a net profit of £280,000 for the 2012/13 season.</p>`,
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
          text: 'An IFA for high-net-worth individuals. I developed a model to track fund-based renewal, researched new investment opportunities and assisted with report writing and due diligence.',
        },
      ],
    }
  },
  methods: {
    jumpToTab(tab) {
      this.activeTab = tab
    },
  },
}
</script>

<style lang="scss" scoped>
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
}
.opened .jobs__accordion-item-header::after {
  content: url(~@/assets/images/icons/accordion-up.svg);
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
  border-top: 1px solid #e4e4e4;
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
  border-top: 1px solid #e4e4e4;
  padding-top: 16px;
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
