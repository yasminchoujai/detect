<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-links">
        <div class="footer-column">
          <img src="../assets/logo.png" alt="logo" class="logo" />
          <p>Email: <a href="mailto:hello@clause.com">hello@faceme.com</a></p>
          <p>Phone: <a href="tel:+621987654321">+62 1987 654 321</a></p>
        </div>
        <div class="footer-column">
          <h3>Solution</h3>
          <ul>
            <li><a href="#">Why Cequence</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">OpenAI</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Customers</h3>
          <ul>
            <li><a href="#">Procurement</a></li>
            <li><a href="#">Sales</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Medium</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact Sales</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 FaceMe. All rights reserved.</p>
        <div class="social-media">
          <a href="#" class="social-icon"
            ><img src="../assets/images__1_-removebg-preview.png" alt="Twitter"
          /></a>
          <a href="#" class="social-icon"><img src="../assets/linkedin.png" alt="LinkedIn" /></a>
          <a href="#" class="social-icon"><img src="../assets/INSTAGRMA.png" alt="Instagram" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-section {
  background-color: #289bb6;
  color: white;
  text-align: left;
  width: 100%;
  margin: 10px;
  padding-bottom: 40px;
  padding-top: 40px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin-bottom: 20px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.logo {
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
}

.footer-column h3 {
  margin-bottom: 10px;
  font-size: 18px;
  font-family: 'orbitron', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin: 5px 0;
}

.footer-column a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #d1faff;
}

.footer-bottom {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-top: 1px solid white;
}

.social-media {
  display: flex;
}

.social-icon {
  margin: 0 10px;
}

.social-icon img {
  width: 20px;
  height: 20px;
}
</style>
