<template>
  <div class="features-section">
    <div class="intro-section" ref="intro">
      <div class="intro-content">
        <div class="intro-text">
          <span class="tag">Features</span>
          <h2>
            Our Features With
            <span class="highlight">
              <br />
              AI-Powered
            </span>
            Analytics
          </h2>
        </div>
        <div class="intro-paragraph">
          <p></p>
        </div>
        <div class="intro-button">
          <a href="#features" class="get-started">
            Get Started
            <img src="../assets/arrow.png" class="arrow" />
          </a>
        </div>
      </div>
    </div>
    <div class="features-grid">
      <div class="feature-card card-1" ref="card1">
        <h3>01</h3>
        <h4>Real-Time Face Recognition</h4>
        <p>Instantly identify and verify individuals using advanced face recognition technology.</p>
      </div>
      <div class="feature-card" ref="card2">
        <h3>02</h3>
        <h4>Emotion Detection</h4>
        <p>Analyze facial expressions to determine the emotional state of users in real time.</p>
      </div>
      <div class="feature-card" ref="card3">
        <h3>03</h3>
        <h4>Comprehensive Analytics</h4>
        <p>Gain insights into user behavior and trends with detailed analytics and reporting.</p>
      </div>
      <div class="feature-card" ref="card4">
        <h3>04</h3>
        <h4>Privacy and Security</h4>
        <p>Ensure data privacy and security with our robust encryption and compliance measures.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
  mounted() {
    this.addIntersectionObserver()
  },
  methods: {
    addIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateIntro()
            this.animateCards()
            observer.disconnect()
          }
        })
      }, options)

      observer.observe(this.$refs.intro)
    },
    animateIntro() {
      const introText = this.$refs.intro.querySelector('.intro-text')
      const introParagraph = this.$refs.intro.querySelector('.intro-paragraph')
      const introButton = this.$refs.intro.querySelector('.intro-button')

      // Add animation class with delays
      setTimeout(() => {
        introText.classList.add('animate-in-text')
      }, 0)
      setTimeout(() => {
        introParagraph.classList.add('animate-in-paragraph')
      }, 300)
      setTimeout(() => {
        introButton.classList.add('animate-in-button')
      }, 600)
    },
    animateCards() {
      const cards = [this.$refs.card1, this.$refs.card2, this.$refs.card3, this.$refs.card4]
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate-in')
        }, index * 300)
      })
    }
  }
}
</script>

<style scoped>
.features-section {
  object-fit: contain;
  background-size: cover;
  padding: 60px 20px;
  margin-left: 30px;
  margin-right: 30px;
}

.intro-section {
  text-align: center;
  margin-bottom: 40px;
}

.intro-text,
.intro-paragraph,
.intro-button {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.intro-text.animate-in-text {
  opacity: 1;
  transform: translateY(0);
}

.intro-paragraph.animate-in-paragraph {
  opacity: 1;
  transform: translateY(0);
}

.intro-button.animate-in-button {
  opacity: 1;
  transform: translateY(0);
}

.intro-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
  text-align: left;
}

.tag {
  background-color: #abdee4;
  color: #00175a;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: 600;
  margin-right: 25px;
}

.intro-section h2 {
  font-size: 36px;
  color: #00175a;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'orbitron', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.intro-section h2 .highlight {
  color: #1992a8;
}

.intro-paragraph p {
  font-size: 16px;
  color: #00175a;
  margin-bottom: 20px;
}

.get-started {
  background-color: #87c9bf;
  border: none;
  padding: 8px 25px;
  width: 140px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  border-radius: 20px;
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  align-items: center; /* Aligns items (image and text) vertically in the center */
  justify-content: space-between;
}

.get-started:hover {
  background-color: #abdee4;
  color: #135161;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.feature-card {
  background-color: rgb(241, 244, 244);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    box-shadow 0.5s ease;
}

.feature-card:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.feature-card h3 {
  font-size: 24px;
  color: #00175a;
  margin-bottom: 10px;
  font-family: 'orbitron', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.feature-card h4 {
  font-size: 20px;
  color: #1993a8;
  margin-bottom: 10px;
  font-family: 'orbitron', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.feature-card p {
  font-size: 14px;
  color: #00175a;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
  animation: fadeInUp 0.8s ease-out forwards;
}

.card-1 {
  background-color: #1993a8;
  color: white;
}

.card-1 p {
  color: rgb(234, 234, 234);
}

.card-1 h4 {
  color: #d1faff;
}

.card-1 h3 {
  color: rgb(234, 234, 234);
}

.arrow {
  border-radius: 100px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
}
</style>
