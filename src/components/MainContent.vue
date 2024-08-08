<template>
  <main class="main-content">
    <div class="text-content" ref="textContent">
      <h1 class="animate">AI Face Recognition</h1>
      <p class="animate">
        Technology to refine its intelligent global offerings and industry-specific AR video effects
        solutions. From real-time beautification, reshaping, and makeup, to portrait separation, we
        understand your aesthetic.
      </p>
      <button class="request-demo animate">
        Request a demo<img src="../assets/arrow.png" class="arrow" />
      </button>
      <div class="chart">
        <p><span>10k+</span> <br />company used</p>
        <p><span>100% </span><br />anti-spoofing</p>
      </div>
    </div>
    <div class="image-content">
      <img src="../assets/AIGIRL-removebg-preview.png" alt="Facial Recognition" class="theface" />
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainContent',
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
            const elements = this.$refs.textContent.querySelectorAll('.animate')
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-in')
              }, index * 300) // delay each element by 300ms
            })
            observer.unobserve(entry.target)
          }
        })
      }, options)

      const elements = this.$refs.textContent.querySelectorAll('.animate')
      observer.observe(elements[0])
    }
  }
}
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.text-content {
  max-width: 500px;
  margin-left: 80px;
}

.text-content h1,
.text-content p,
.request-demo {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 1.5s ease,
    transform 1.5s ease;
}

.text-content h1.animate-in,
.text-content p.animate-in,
.request-demo.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.text-content h1 {
  font-size: 60px;
  margin-bottom: 20px;
  font-family: 'orbitron', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.text-content p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: 300;
}

.request-demo {
  background-color: #87c9bf;
  border: none;
  padding: 8px 20px;
  width: 210px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  border-radius: 20px;
  margin-top: 60px;
  text-decoration: none;
  display: flex;
  align-items: center; /* Aligns items (image and text) vertically in the center */
  justify-content: space-between;
}

.request-demo:hover {
  background-color: #abdee4;
  color: #135161;
}

.chart {
  display: flex;
  width: 100%;
  font-size: medium;
  color: white;
}

span {
  font-size: larger;
}

.chart p {
  color: white;
}

.theface {
  height: 78vh;
  margin-top: 78px;
}
.arrow {
  border-radius: 100px;
  height: 30px;
  width: 30px;
  margin-left: 10px;
}
</style>
