<template>
  <footer class="footer-section">
    <div class="footer-content">
      <div class="footer-subscribe">
        <p>Join us on the journey to an effortless experience.</p>
        <p>Stay updated with tips, tricks, and exclusive content.</p>
        <div class="subscribe-form">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </div>
        <p class="privacy-note">By signing up, you agree to our <a href="#">Privacy Policy</a>.</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h3>SOCIAL</h3>
          <ul class="social-media">
            <li>
              <a href="#"
                ><i class="fab fa-instagram"></i>
                <div class="link">instagram</div></a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fab fa-youtube"></i>
                <div class="link">youtube</div></a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fab fa-tiktok"></i>
                <div class="link">tiktok</div></a
              >
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>OFFICIAL</h3>
          <ul>
            <li><router-link to="/product">Product</router-link></li>
            <li><router-link to="/features">Features</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li><a href="mailto:hello@faceme.com">Dtect@gmail.com</a></li>
            <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">&copy; 2024 Dtect. All rights reserved.</a></li>
          </ul>
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
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  width: 100vw;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
  margin-bottom: 20px;
}

.footer-subscribe {
  max-width: 400px;
  margin-right: 20px;
}

.footer-subscribe p {
  margin: 10px 0;
}

.subscribe-form {
  display: flex;
  margin: 10px 0;
}

.subscribe-form input {
  padding: 10px 15px;
  flex: 1;
  border: 1px solid transparent;
  border-radius: 25px 0 0 25px;
  background-color: aliceblue;
  color: #333;
  font-size: 14px;
  outline: none;
  transition:
    background-color 0.3s,
    border-color 0.3s;
}

.subscribe-form input::placeholder {
  color: #597379;
}

.subscribe-form input:focus {
  background-color: white;
  border-color: #289bb6;
}

.subscribe-form button {
  border: none;
  background-color: aliceblue;
  padding: 10px 15px;
  color: #289bb6;
  border-radius: 0 25px 25px 0;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.subscribe-form button:hover {
  background-color: #289bb6;
  color: white;
  border: rgba(255, 255, 255, 0.662) solid 1px;
}

.footer-links {
  display: flex;
  justify-content: space-between;
}

.footer-column {
  flex: 1;
  min-width: 150px;
  margin-right: 30px;
}

.footer-column h3 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
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
  font-size: 14px;
  transition: color 0.3s;
}

.footer-column a:hover {
  color: #d1faff;
}

.social-media i {
  margin-right: 20px;
}

.social-media a {
  display: flex;
  align-items: center;
}

.social-media a:hover i {
  color: #d1faff;
}

.privacy-note a {
  color: #d1faff;
  text-decoration: underline;
}

.privacy-note a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  flex-wrap: wrap;
}

.country-region p {
  margin: 0;
  font-size: 14px;
}

.afterpay-logo img {
  height: 30px;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-column {
    margin-bottom: 20px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
}

.social-media i {
  margin-right: 20px;
}
.link {
  margin-left: 10px;
}
</style>
