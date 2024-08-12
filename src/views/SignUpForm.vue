<template>
  <div class="signup-page">
    <div class="signup-container">
      <router-link to="/" class="back-button">
        <i class="fa fa-arrow-left icon"></i>
      </router-link>
      <h1>Sign Up</h1>
      <p class="subtitle">Create an account to get started.</p>

      <div class="social-signup">
        <button class="social-button google">
          <i class="fab fa-google social-icon"></i> Sign up with Google
        </button>
        <button class="social-button facebook">
          <i class="fab fa-facebook-f social-icon"></i> Sign up with Facebook
        </button>
      </div>

      <div class="separator">or Sign up with Email</div>

      <form @submit.prevent="signUp" class="signup-form">
        <div class="input-group">
          <div class="input-container">
            <i class="fa fa-user input-icon"></i>
            <input type="text" v-model="name" placeholder="Full Name" />
          </div>
        </div>

        <div class="input-group">
          <div class="input-container">
            <i class="fa fa-envelope input-icon"></i>
            <input type="email" v-model="email" placeholder="Email" />
          </div>
        </div>

        <div class="input-group">
          <div class="input-container">
            <i class="fa fa-lock input-icon"></i>
            <input type="password" v-model="password" placeholder="Password" />
          </div>
        </div>

        <button type="submit" class="signup-button">Sign Up</button>
      </form>
      <p class="sign-in-link">
        Already have an account? <router-link to="/signin">Sign In</router-link>
      </p>
      <p class="footer-text">©2024 Facialytics All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      // Handle the sign-up logic here
      console.log('Name:', this.name)
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Poppins', sans-serif;
}

.signup-container {
  position: relative;
  text-align: center;
  padding: 30px;
  max-width: 350px;
  width: 90%;
  height: 80%;
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
}

.back-button .icon {
  margin: 0;
}

.back-button:hover {
  background-color: #abdee4;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'orbitron', sans-serif;
  color: #319cb7;
}

.subtitle {
  color: #000056;
  margin-bottom: 25px;
  font-size: 14px;
}

.social-signup {
  margin-bottom: 20px;
}

.social-button {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  color: #333;
}

.social-icon {
  margin-right: 10px;
}

.social-button.google {
  color: #4285f4;
  background-color: #f8f9fa;
}

.social-button.facebook {
  color: #3b5998;
  background-color: #f8f9fa;
}

.social-button:hover {
  background-color: #e9ecef;
}

.separator {
  margin: 25px 0;
  font-size: 14px;
  color: #999;
  position: relative;
}

.separator::before,
.separator::after {
  content: '';
  display: block;
  height: 1px;
  background: #ddd;
  width: 40%;
  position: absolute;
  top: 50%;
}

.separator::before {
  left: 0;
}

.separator::after {
  right: 0;
}

.input-group {
  margin-bottom: 20px;
}

.input-container {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
}

input {
  width: 100%;
  padding: 10px 12px 10px 40px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 25px;
  box-sizing: border-box;
}

.signup-button {
  width: 150px;
  padding: 12px;
  background-color: #319cb7;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
  border-radius: 25px;
}

.signup-button:hover {
  background-color: #abdee4;
  color: #000056;
}

.footer-text {
  margin-top: 25px;
  font-size: 12px;
  color: #999;
}

input:focus {
  border-color: #319cb7;
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.sign-in-link {
  margin-top: 20px;
  font-size: 14px;
}

.sign-in-link a {
  color: #319cb7;
  text-decoration: none;
}

.sign-in-link a:hover {
  text-decoration: underline;
}
</style>
