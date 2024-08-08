<template>
  <div id="app" class="container">
    <Header />
    <MainContent />
    <Features />
    <About />
    <Footer />

    <button @click="scrollToTop" class="back-to-top" v-show="showButton">↑</button>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MainContent from '../components/MainContent.vue'
import Features from '../components/Features.vue'
import About from '../components/About.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    MainContent,
    Features,
    About,
    Footer
  },
  data() {
    return {
      showButton: false
    }
  },
  mounted() {
    this.addIntersectionObserver()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    addIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      }, options)

      const elements = document.querySelectorAll(
        '.feature, .text-content, .ourfeatures h1, .about-img, .about-text'
      )
      elements.forEach((element) => {
        observer.observe(element)
      })
    },
    handleScroll() {
      this.showButton = window.scrollY > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.container {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #289bb6;
  height: 100vh;
  margin: 0%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #289bb6;
  color: #fff;
  border-radius: 50%;
  border: #fff solid 1px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
}
.back-to-top:hover {
  background-color: #eb57c2;
}
</style>
