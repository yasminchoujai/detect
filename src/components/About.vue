<template>
  <div class="features-section">
    <div class="features-header">
      <button class="feature-tag">About Us</button>
      <h2 class="animated-text">
        AI-Powered<span class="highlight"> Face & Emotion</span> Detection Web App
      </h2>
      <p class="animated-text">
        Experience the future of AI technology with our cutting-edge web app.
      </p>
    </div>
    <div class="features-content">
      <div class="features-images">
        <img src="../assets/AIGIRL2.png" alt="Project Image 1" class="animated-image image-1" />
      </div>
      <div class="features-text">
        <h2 class="animated-text title">About the project</h2>
        <p class="animated-text paragraph">
          The goal of the project was to develop an advanced face and emotion detection web
          application. Utilizing the latest AI technologies, our app offers real-time analytics and
          insights into user emotions and identities.
        </p>
        <p class="animated-text paragraph">
          By leveraging sophisticated algorithms, our solution provides accurate and efficient
          emotion detection, helping businesses understand user behavior and enhance customer
          experiences. The AI-powered system ensures privacy and security, adhering to the highest
          standards.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesSection',
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    document.querySelectorAll('.animated-text, .animated-image').forEach((el) => {
      observer.observe(el)
    })
  }
}
</script>

<style scoped>
.features-section {
  background-color: white;
  padding: 60px 20px;
  border-radius: 10px;
  margin: 5px;
}

.features-header {
  text-align: center;
  margin-bottom: 40px;
}

.feature-tag {
  border: none;
  cursor: default;
  background-color: #abdee4;
  color: #00175a;
  padding: 7px 10px;
  border-radius: 20px;
  font-weight: 600;
}

.features-header h2 {
  font-size: 36px;
  color: #00175a;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'orbitron', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.features-header h2 .highlight {
  color: #1992a8;
}

.features-header p {
  font-size: 16px;
  margin-bottom: 20px;
}

/* Animation for the image */

.animated-image {
  width: 80%;
  height: auto;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 2s ease-out,
    transform 2s ease-out;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 5px;
}

.animated-image.in-view {
  opacity: 1;
  transform: translateY(0);
}

.animated-image.image-1 {
  animation: floatAnimation 4s ease-in-out infinite;
}

.a
/* Animation for the text */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-text {
  opacity: 0;
  color: #00175a;
  transform: translateY(20px);
  transition:
    opacity 2s ease-out,
    transform 2s ease-out;
}

.animated-text.in-view {
  opacity: 1;
  transform: translateY(0);
}

.features-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.features-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: #abdee4;
  flex: 1;
  margin-left: 40px;
  color: #00175a;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
}

.features-text {
  flex: 1;
  margin-left: 40px;
  color: #00175a;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(30px);
}

.features-text h2 {
  font-size: 36px;
  color: #289bb6;
  font-family: 'orbitron', sans-serif;
  margin-bottom: 20px;
}

.features-text p {
  font-size: 16px;
  color: #00175a;
  line-height: 1.6;
  margin-bottom: 20px;
}
</style>
