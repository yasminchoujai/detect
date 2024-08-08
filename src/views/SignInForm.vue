<template>
  <div class="login-page">
    <div class="login-container">
      <router-link to="/" class="back-button"> <i class="fa fa-arrow-left"></i> </router-link>
      <h1>Sign In</h1>
      <p class="subtitle">Welcome back! Please enter your details.</p>

      <div class="social-login">
        <button class="social-button google">
          <i class="fab fa-google"></i> Sign in with Google
        </button>
        <button class="social-button facebook">
          <i class="fab fa-facebook-f"></i> Sign in with Facebook
        </button>
      </div>

      <div class="separator">or Sign in with Email</div>

      <form @submit.prevent="login" class="login-form">
        <div class="input-group">
          <div class="input-container">
            <i class="fa fa-envelope"></i>
            <input type="email" v-model="email" placeholder="Email" />
          </div>
        </div>

        <div class="input-group">
          <div class="input-container">
            <i class="fa fa-lock"></i>
            <input type="password" v-model="password" placeholder="Password" />
          </div>
        </div>

        <div class="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>
      <p class="sign-up-link">
        Don't have an account? <router-link to="/signup">Sign Up</router-link>
      </p>
      <p class="footer-text">©2024 Facialytics All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Handle the login logic here
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    }
  }
}
</script>
<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Poppins', sans-serif;
}

.login-container {
  position: relative;
  text-align: center;
  background: #fff;
  padding: 30px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
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

.back-button i {
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

.social-login {
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

.social-button i {
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

.input-container i {
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

.forgot-password {
  text-align: right;
  margin-bottom: 20px;
}

.forgot-password a {
  color: #319cb7;
  font-size: 14px;
}

.login-button {
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

.login-button:hover {
  background-color: #abdee4;
  color: #000056;
}

.footer-text {
  margin-top: 25px;
  font-size: 12px;
  color: #999;
}

input:focus {
  border-color: #319cb7; /* Blue border color */
  outline: none; /* Remove the default outline */
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2); /* Optional: Add a subtle blue shadow */
}

.sign-up-link {
  margin-top: 20px;
  font-size: 14px;
}

.sign-up-link a {
  color: #319cb7;
  text-decoration: none;
}

.sign-up-link a:hover {
  text-decoration: underline;
}
</style>
