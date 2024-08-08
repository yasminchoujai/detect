<template>
  <header class="header">
    <div class="logo-container">
      <div class="logodiv">
        <img src="../assets/logo.png" alt="Logo" class="imglogo" />
      </div>
      <div class="logo">Facialytics</div>
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/product" class="nav-link">Product</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
    </nav>
    <div class="auth-buttons">
      <router-link to="/signin" class="call-me">Sign in</router-link>
      <router-link to="/signup" class="call-me">Sign up</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-family: 'Poppins', sans-serif;
}

.logo-container {
  display: flex;
  align-items: center;
}

.imglogo {
  width: 32px;
  height: 32px;
}

.logo {
  font-size: 24px;
  font-family: Roboto;
  color: white;
  margin-left: 10px;
}

.nav {
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 15px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  transition:
    width 0.3s ease 0s,
    left 0.3s ease 0s;
}

.nav-link {
  color: white;
  font-family: Roboto;
  position: relative;
  font-size: 18px;
  transition: 0.2s;
}

.nav-link::after {
  content: '';
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  width: 0;
  transition: 0.2s;
}

.nav-link:hover,
.nav-link:focus {
  color: white;
}

.nav-link:hover::after,
.nav-link:focus::after {
  background-color: white;
  width: 100%;
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.call-me {
  background-color: #87c9bf;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  font-family: Roboto;
  position: relative;
  border-radius: 20px;
  margin-left: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.call-me:hover {
  background-color: #abdee4;
  color: #135161;
  border: none;
}
</style>
