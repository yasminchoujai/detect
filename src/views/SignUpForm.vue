<template>
  <div class="content">
    <div class="login-container">
      <router-link to="/" class="back-to-home-button">Back to Home</router-link>
      <div class="login-content">
        <div class="login-form">
          <p class="signin-text">
            Don't have an account ? <router-link to="/signup">Sign Up!</router-link>
          </p>
          <h1>Welcome to Facialytics</h1>
          <p class="description">
            Blandit libero volutpat sed cras ornare arcu dui. Accumsan in nisl nisi scelerisque eu.
          </p>
          <form>
            <div class="input-group">
              <label for="email">E-mail</label>
              <div class="input-container">
                <i class="fa fa-envelope"></i>
                <input type="email" id="email" name="email" placeholder="example@mail.com" />
              </div>
            </div>

            <div class="input-group">
              <label for="password">Password</label>
              <div class="input-container">
                <i class="fa fa-lock"></i>
                <input type="password" id="password" name="password" placeholder="Password" />
              </div>
            </div>

            <button type="submit" class="submit-button">Create an account</button>
          </form>

          <p class="or-text">Or sign in with</p>
          <div class="social-icons">
            <button class="social-button google"><i class="fab fa-google"></i></button>
            <button class="social-button facebook"><i class="fab fa-facebook"></i></button>
            <button class="social-button apple"><i class="fab fa-apple"></i></button>
          </div>
        </div>
        <div class="login-image"></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css'

export default {
  name: 'Login'
}
</script>

<style scoped>
.content {
  background-color: #e6fbff;
  color: #00175a;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.back-to-home-button {
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #1993a8;
  border-radius: 20px;
  font-size: 14px;
  text-align: center;
  z-index: 1; /* Ensure it appears above other content */
}

.back-to-home-button:hover {
  background-color: #135161;
}

.login-content {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  width: 68%;
  max-width: 800px;
  background-color: aliceblue;
  height: 600px;
}

.login-form {
  flex: 1;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
}

.signin-text {
  text-align: right;
  margin-bottom: 20px;
  font-size: 14px;
  float: left;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'orbitron', sans-serif;
  color: #1993a8;
}

.description {
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

input[type='email'],
input[type='password'] {
  width: 100%;
  padding: 12px 40px 12px 40px; /* Adjusted for icon on left */
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.input-container i {
  position: absolute;
  left: 10px; /* Move icon to the left */
  font-size: 18px;
  color: #ccc;
}

.submit-button {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #3b82f6;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: #87c9bf;
  border: none;
  color: white;
  font-size: 15px;
  border-radius: 20px;
}

.submit-button:hover {
  background-color: #abdee4;
  color: #135161;
}

.or-text {
  margin: 20px 0;
  text-align: center;
  color: #00175a;
}

.social-icons {
  display: flex;
  justify-content: space-evenly;
}

.social-button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.social-button i {
  font-size: 20px;
  color: #000;
}

.social-button:hover {
  background-color: #abdee4;
}

.login-image {
  flex: 1;
  background: url('../assets/signin.jpg') no-repeat center center;
  background-size: cover;
}
</style>
