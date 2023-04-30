<template>
  <div class="cv__work-container">
    <h2 class="cv__work-title">Education & Qualifications</h2>
    <div class="edu__accordion">
      <div
        v-for="(qual, index) in quals"
        :key="index"
        class="edu__accordion-item"
        :class="checkClass(index)"
        @click="toggleAccordion(`tab${index}`)"
      >
        <div class="edu__accordion-item-header">
          <div class="edu__accordion-overview-container">
            <div v-if="qual.imgSrc" class="edu__logo-container">
              <img :src="qual.imgSrc" :alt="qual.imgAlt" class="edu__logo" />
            </div>
            <div v-if="qual.institution" class="edu__item-text-container">
              <div v-if="qual.grade" class="edu__accordion-company-title">
                {{ qual.dates }}: {{ qual.institution }} - {{ qual.title }}:
                {{ qual.grade }}
              </div>
              <div v-else class="edu__accordion-company-title">
                {{ qual.dates }}: {{ qual.institution }} - {{ qual.title }}
              </div>
            </div>
            <div v-else class="edu__accordion-company-title">
              Other qualifications
            </div>
          </div>
        </div>
        <div v-if="qual.institution" class="edu__accordion-item-body">
          <div v-if="qual.bullets" class="edu__accordion-achievements">
            <ul class="edu__achievements-list">
              <li v-for="(item, i) in qual.bullets" :key="i">
                <div>{{ item }}</div>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="edu__accordion-item-body">
          <div class="edu__others">
            <ul v-for="(other, i) in others" :key="i" class="edu__others-item">
              <li class="edu__others-title">
                {{ other.dates }}: {{ other.institution }} - {{ other.title }}
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
  name: 'CvEducation',
  data() {
    return {
      activeTab: 'tab',
      quals: [
        {
          institution: 'University of York',
          title: 'MSc Computer Science with Artificial Intelligence',
          dates: '2020-2022',
          imgSrc: '/images/cv/logos/york.png',
          imgAlt: 'The University of York logo',
          bullets: [
            'Current grade average: 78% (distinction) with just the dissertation / research project remaining',
            'Modules: AI and Machine Learning, Applied AI, Algorithms and Data Structures, Advanced Programming, Big Data Analytics, Computer Architecture and Operating Systems, Computer and Mobile Networks, Software Engineering, and an AI-based research project',
            'Built a Python and MySQL ETL and data visualisation application for Advanced Programming',
            'For my research project, I am building an AI for creating high-frequency trading strategies for the EUR/USD currency pair. This deep learning algorithm is built with Python and Tensorflow and runs on AWS with real time-data to fully automate trades on Oanda.'
          ],
        },
        {
          institution: 'Harvard University',
          title:
            'HarvardX CS50 Computer Science & CS50W Computer Science for Web Programming',
          dates: '2020-2021',
          imgSrc: '/images/cv/logos/harvard.png',
          imgAlt: 'The Harvard University logo',
          bullets: [
            'A 6-month course covering two modules using Python, JavaScript, SQL and frameworks like Django and React',
          ],
        },
        {
          institution:
            'University of Pennsylvania, The Wharton Business School',
          title: 'Business Strategy & Entrepreneurship',
          dates: '2016',
          imgSrc: '/images/cv/logos/wharton.png',
          imgAlt: 'The University of Pennsylvania Wharton Business School logo',
          bullets: [
            'Part of the Wharton MBA, this is a six month assessed remote learning course',
          ],
        },
        {
          institution: 'Durham University',
          title: 'MSc Finance and Investment',
          dates: '2008-2009',
          imgSrc: '/images/cv/logos/durham.png',
          imgAlt: 'The Durham University logo',
          grade: 'Merit',
          bullets: [
            'Recognised by the CFA Charter, covering at least 70% of the CFA curriculum',
          ],
        },
        {
          institution: 'Durham University',
          title: 'BA (Hons) Accounting and Finance',
          dates: '2005-2008',
          imgSrc: '/images/cv/logos/durham.png',
          imgAlt: 'The Durham University logo',
          grade: '2:1',
          bullets: [
            'College life member, college Vice President in final year and Entertainments Officer in second year. President of the college Ski Club for two years and organiser of two ski trips. Represented the university at rugby and squash',
          ],
        },
        {
          others: true,
        },
      ],
      others: [
        {
          institution: 'Udacity',
          title: 'Python Nanodegree (two-month assessed course)',
          dates: '2021',
        },
        {
          institution: 'Microsoft',
          title: 'Azure AI Fundamentals',
          dates: '2021',
        },
        {
          institution: 'Udemy',
          title: 'Vue.js The Complete Guide',
          dates: '2020',
        },
        {
          institution: 'Codecademy',
          title: 'Web Development Path with React',
          dates: '2020',
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
.edu__accordion {
  width: 100%;
  max-width: 1000px;
  margin: 32px auto;
  border-bottom: 1px solid #e4e4e4;
}
.edu__accordion-item {
  background-color: #fff;
  color: #464860;
  border-top: 1px solid #e4e4e4;
}
.edu__accordion-item-header {
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
.edu__accordion-item-header:hover {
  color: #4f2d87;
}
.edu__accordion-item-header::after {
  content: url(~@/assets/images/icons/accordion-down.svg);
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s linear;
}
.opened .edu__accordion-item-header::after {
  transform: translateY(-50%) rotate(180deg);
}
.edu__accordion-overview-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.edu__logo-container {
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  border: 1px solid #e4e4e4;
  padding: 18px 12px 12px 12px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edu__logo {
  width: 100%;
  height: auto;
}
.edu__accordion-dates {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
}
.edu__accordion-item-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s linear;
}
.opened .edu__accordion-item-body {
  opacity: 1;
  max-height: none;
  overflow: auto;
}
.edu__accordion-item-body-content {
  padding: 16px 0;
  line-height: 24px;
  border-top: 1px solid #e4e4e4;
}
.edu__accordion-link-item {
  display: flex;
  flex-direction: row;
}
.edu__accordion-link {
  margin-left: 3px;
  cursor: pointer;
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
.edu__accordion-achievements {
  margin-bottom: 16px;
}
.edu__achievements-title {
  font-weight: 700;
}
.edu__achievements-list {
  list-style-type: disc;
  margin-left: 0;
  padding-left: 20px;
  padding-top: 8px;
}
.edu__others {
  padding-top: 5px;
}
.edu__others-item {
  margin-bottom: 8px;
  padding-left: 20px;
  list-style-type: disc;
  margin-left: 0;
}
.edu__others-title-bold {
  font-weight: 600;
}
@media all and (max-width: 750px) {
  .edu__logo-container {
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
  .edu__logo-container {
    display: none;
  }
}
</style>
