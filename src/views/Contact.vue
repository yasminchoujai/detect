<template>
  <div class="contact-container">
    <router-link to="/" class="back-button">
      <i class="fa fa-arrow-left icon"></i>
    </router-link>
    <div class="contact-content">
      <div class="contact-form">
        <h2>Chat to our team</h2>
        <p class="subtitle">
          Need help with something? Want a demo? Get in touch with our friendly team, and we'll get
          back to you within 2 hours.
        </p>
        <form>
          <div class="input-group">
            <div class="input-container">
              <i class="fa fa-user input-icon"></i>
              <input type="text" placeholder="First name" />
            </div>
            <div class="input-container">
              <i class="fa fa-user input-icon"></i>
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div class="input-group">
            <div class="input-container">
              <i class="fa fa-briefcase input-icon"></i>
              <input type="text" placeholder="Job title" />
            </div>
            <div class="input-container">
              <i class="fa fa-envelope input-icon"></i>
              <input type="email" placeholder="Work email" />
            </div>
          </div>
          <div class="input-group">
            <div class="input-container">
              <i class="fa fa-phone input-icon"></i>
              <input type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
          <div class="input-group">
            <div class="employee-selection">
              <button type="button" class="employee-button">I'm a solo creator</button>
              <button type="button" class="employee-button">I'm part of a team</button>
            </div>
          </div>
          <button type="submit" class="submit-button">Get in touch</button>
        </form>
      </div>
      <div class="contact-image">
        <img src="../assets/contactimg.png" alt="Contact Image" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Contact',
  components: {
    Header
  }
}
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #f0f4f8;
}

.contact-content {
  display: flex;
  max-width: 1000px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  height: 85vh;
}

.contact-form {
  flex: 1;
  padding: 30px;
  background-color: #fff;
}

.contact-form h2 {
  font-size: 24px;
  margin-bottom: 15px;
  font-family: 'orbitron';
  color: #319cb7;
}

.subtitle {
  color: #000056;
  margin-bottom: 25px;
  font-size: 14px;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.input-container {
  position: relative;
  flex: 1;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  font-size: 16px;
}

input {
  width: 100%;
  padding: 10px 12px 10px 35px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 25px;
  box-sizing: border-box;
  height: 45px;
}

.employee-selection {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.employee-button {
  width: 48%;
  padding: 10px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.employee-button:hover {
  background-color: #e9ecef;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #319cb7;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  height: 45px;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #abdee4;
  color: #000056;
}

.contact-image {
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-image img {
  width: 100%;
  height: auto;
  border-radius: 0 20px 20px 0;
}

.image-overlay {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  max-width: 80%;
}
input:focus {
  border-color: #319cb7; /* Blue border color */
  outline: none; /* Remove the default outline */
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2); /* Optional: Add a subtle blue shadow */
}
.back-button {
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #319cb7;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px 13px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
}

.back-button .icon {
  margin: 0;
}

.back-button:hover {
  background-color: #abdee4;
}
</style>
