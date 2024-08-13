<template>
  <div id="app">
    <div class="container">
      <div class="video-container">
        <div v-if="isLoading" class="spinner"></div>
        <img
          v-else
          :src="videoFeedUrl"
          alt="Emotion Detection Feed"
          @load="handleLoad"
          @error="handleError"
        />
      </div>
      <div class="info-container">
        <h1>For <span class="highlight"> optimal experience </span>, Please make sure that:</h1>
        <div class="cards">
          <div container="camera-card">
            <img src="../assets/web-camera.png" class="laptop" />
            <p>Your camera is located<span class="highlight"> on the top </span> of your screen</p>
          </div>
          <div container="facing-card">
            <img src="../assets/face3.png" class="face" />

            <p>You are<span class="highlight"> facing </span> the camera</p>
          </div>
          <div container="room-card">
            <img src="../assets/brightness.png" class="laptop" />
            <p>You are in a <span class="highlight"> well-lit</span> room</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Ensure this matches the Django server address and port
      videoFeedUrl: 'http://127.0.0.1:8001/video_feed/',
      isLoading: true
    }
  },

  methods: {
    handleLoad() {
      this.isLoading = false
    },
    handleError() {
      this.isLoading = true
    }
  },
  mounted() {
    console.log('Checking video feed availability...')
    const img = new Image()
    img.src = this.videoFeedUrl
    img.onload = this.handleLoad
    img.onerror = this.handleError
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #fff; /* Set the background color */
  font-family: Poppins, sans-serif; /* Optional: Set a default font */
}

#app {
  text-align: center;
}
.spinner {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #29bcd6; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.info-container h1 {
  font-weight: 500;
  font-size: 24px;
  margin-left: 20px;
  padding: 5px;
}
.info-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #eef2f5;
  width: 600px;
  height: 100vh;
}
.container {
  display: flex;
  flex-direction: row;
}

.cards div {
  border-radius: 15px;
  margin: 15px;
  padding: 10px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  background-color: #fff;
}

.cards div:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
}
.video-container {
  width: 80vw;
  height: 94vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.laptop {
  width: 40px;
  height: 40px;
}
.face {
  width: 30px;
  height: 30px;
}
img {
  width: 100%;
  height: auto;
}
.highlight {
  color: #29bcd6;
  font-weight: 600;
}
</style>
