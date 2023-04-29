<template>
  <div class="cv__personal">
    <div class="cv__personal-container">
      <div class="cv__personal-img-contact">
        <div class="cv__personal-img-container">
          <img
            src="@/assets/images/cv/tom-pain.jpg"
            alt="Tom Pain"
            class="cv__portrait"
          />
          <h1 class="cv__personal-title">Tom Pain</h1>
        </div>
        <div class="cv__contact-container">
          <div class="cv__contact-details">
            <img
              src="@/assets/images/cv/briefcase-purple.png"
              alt="a briefcase icon"
              class="cv__contact-icon"
            />
            <p class="cv__contact-text">Full stack engineer</p>
          </div>
          <div class="cv__contact-details">
            <img
              src="@/assets/images/cv/home-purple.png"
              alt="an icon of a house"
              class="cv__contact-icon"
            />
            <p class="cv__contact-text">UK based - I only work remotely</p>
          </div>
          <div class="cv__contact-details">
            <img
              src="@/assets/images/cv/email-purple.png"
              alt="an email icon"
              class="cv__contact-icon"
            />
            <a
              href="mailto:hello@tompa.in"
              class="cv__contact-text contact-link"
              >hello@tompa.in</a
            >
          </div>
          <div class="cv__contact-details">
            <img
              src="@/assets/images/cv/github-purple.png"
              alt="The GitHub logo"
              class="cv__contact-icon"
            />
            <a
              href="https://github.com/TJPain"
              target="_blank"
              class="cv__contact-text contact-link"
              >GitHub</a
            >
          </div>
          <div class="cv__contact-details">
            <img
              src="@/assets/images/cv/linkedin-purple.png"
              alt="the LinkedIn logo"
              class="cv__contact-icon"
            />
            <a
              href="http://uk.linkedin.com/in/tjpain"
              target="_blank"
              class="cv__contact-text contact-link"
              >LinkedIn</a
            >
          </div>
        </div>
      </div>
      <div class="cv__bio">
        <p class="bio__text">
          I currently work in a full stack role (predominantly backend) in the Growth
          Engineering Team at Midnite, an esports gambling company. We build products
          for user acquisition and retention with Vue.js and TypeScript on the frontend
          and Python and Flask on the backend. I am also heavily involved in building
          internal tools for our Trading Team.
        </p>
        <p class="bio__text">
          Prior to Midnite, I spent five years building a travel start-up where I
          was responsible for technology and product. When the pandemic started,
          I decided to build upon this hands-on development experience with a
          part-time MSc in Computer Science with Artificial Intelligence, which
          I have almost completed - my current grade average is 78% (distinction).
          For the research project I am building an AI for creating high-frequency
          trading strategies for the EUR/USD currency pair. This deep learning algorithm
          is built with Python and runs on AWS with real time data to fully automate
          trades on Oanda. 
        </p>
        <p class="bio__text">
          Most of my experience is with Vue.js and Python including Flask, Django,
          NumPy, pandas, Matplotlib, SciPy and scikit-learn. I also have some 
          experience with Java.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CvPersonal',
}
</script>

<style lang="css" scoped>
.cv__personal {
  height: auto;
}
.cv__personal-container {
  border-radius: 10px;
  min-height: 200px;
  width: 100%;
  height: auto;
  background-color: #fff;
  box-shadow: 0 7px 18px 5px hsla(0, 0%, 61.2%, 0.16);
  transition: box-shadow 0.25s linear;
}
.cv__personal-img-container {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
  position: relative;
}
.cv__portrait {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
}
.cv__personal-title {
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}
.cv__contact-container {
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid #e4e4e4;
}
.cv__contact-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
.cv__contact-icon {
  height: auto;
  width: 25px;
  margin-right: 12px;
}
.cv__contact-text {
  margin-bottom: unset;
  color: #464860;
}
.contact-link {
  cursor: pointer;
  transition: all ease 0.5;
  &:hover {
    color: #4f2d87;
  }
}
.cv__bio {
  padding: 20px;
}
@media all and (max-width: 750px) {
  .cv__personal-container {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
  }
  .cv__personal-img-contact {
    border-right: 1px solid #e4e4e4;
    width: 40%;
  }
  .cv__contact-container {
    border-bottom: unset;
  }
  .cv__portrait {
    border-radius: 10px 0 0 0;
  }
  .cv__bio {
    width: 60%;
    padding-right: 30px;
  }
  .cv__contact-container {
    padding-left: 30px;
  }
}
@media all and (max-width: 600px) {
  .cv__bio,
  .cv__contact-container {
    padding: 20px;
  }
}
@media all and (max-width: 500px) {
  .cv__personal-container {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  .cv__personal-img-contact {
    border-right: unset;
    width: 100%;
  }
  .cv__contact-container {
    border-bottom: 1px solid #e4e4e4;
  }
  .cv__portrait {
    border-radius: 10px 10px 0 0;
  }
  .cv__bio {
    width: 100%;
  }
}
</style>
