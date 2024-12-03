<template>
  <div id="login">
    <transition appear name="opacitytrans">
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>汽车展示平台</h1>

            <span>Version 1.0.0</span>
            <input type="text" placeholder="账号" v-model="account" />
            <input type="password" placeholder="密码" v-model="password" />
            <div class="button" @click="login()" >登录</div>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="150" height="150" viewBox="0 0 50 50">
<path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 25 8 C 21.183495 8 18 10.939777 18 14.615234 C 18 18.40915 21.300216 22.194994 24.357422 24.763672 A 1.0001 1.0001 0 0 0 25.642578 24.763672 C 28.698868 22.19593 32 18.409362 32 14.615234 C 32 10.940374 28.815494 8.0011534 25 8 z M 25 10 C 27.800506 10.000847 30 12.100094 30 14.615234 C 30 16.902228 27.563489 20.162933 25 22.525391 C 22.435823 20.162286 20 16.902422 20 14.615234 C 20 12.098692 22.198505 10 25 10 z M 15.529297 24.955078 C 13.967084 24.991799 12.487855 25.300701 11.244141 26.011719 C 8.0309297 27.849869 7.0623819 32.089846 8.9921875 35.400391 C 10.923199 38.711026 15.095023 39.993422 18.308594 38.15625 L 18.308594 38.158203 C 21.625327 36.263271 23.280003 31.500238 23.984375 27.560547 A 1.0001 1.0001 0 0 0 23.337891 26.443359 C 21.440822 25.761039 19.247881 25.178372 17.113281 25.003906 C 16.579631 24.96029 16.050035 24.942838 15.529297 24.955078 z M 34.472656 24.957031 C 33.952099 24.944915 33.422279 24.962278 32.888672 25.005859 C 30.754244 25.180184 28.559676 25.761047 26.662109 26.443359 A 1.0001 1.0001 0 0 0 26.015625 27.560547 C 26.719975 31.499071 28.373942 36.262337 31.691406 38.158203 C 34.905004 39.994206 39.076802 38.711026 41.007812 35.400391 C 42.938764 32.089858 41.970339 27.848733 38.755859 26.011719 C 37.512244 25.30121 36.034327 24.993381 34.472656 24.957031 z M 15.578125 27.046875 C 16.024017 27.041269 16.487212 27.057741 16.960938 27.09375 C 18.542946 27.214001 20.186744 27.646556 21.720703 28.121094 C 20.947787 31.52708 19.327253 35.271075 17.316406 36.419922 C 15.103977 37.684749 12.137691 36.821943 10.720703 34.392578 C 9.3045088 31.963123 10.025492 29.011943 12.238281 27.746094 L 12.238281 27.748047 C 13.060817 27.277813 14.24045 27.063693 15.578125 27.046875 z M 34.421875 27.048828 C 35.760058 27.065188 36.941037 27.278056 37.763672 27.748047 C 39.977192 29.013032 40.696345 31.96311 39.279297 34.392578 C 37.862309 36.821943 34.895996 37.685872 32.683594 36.421875 C 30.671641 35.272084 29.052106 31.528299 28.279297 28.123047 C 29.813549 27.64855 31.45712 27.215863 33.039062 27.095703 C 33.512768 27.059722 33.975814 27.043375 34.421875 27.048828 z"></path>
</svg>
              <!-- <img class="logo" src="./../../assets/image.png" alt="" /> -->
              <p style="color: black;">
                 欢迎登录汽车展示平台
              </p>
              <!-- <button class="ghost" id="signUp">About Us</button>n -->
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import router from '../../router/router';
const account = ref("")
const password = ref("")
const login = ()=>{
  router.push({ path: '/Scene' })
}
</script>
<style  scoped>
#login {
  font-family: "Montserrat", sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* margin: -20px 0 50px; */
  /* background-image: url("https://www.17sucai.com/preview/1749733/2019-06-22/%E7%99%BB%E5%BD%95/img/img1.png"); */
  background-image: url('./../../assets/image.png');
  background-size: cover;
}
.logo {
  width: 160px;
  height: auto;
}
h1 {
  font-weight: bold;
  margin: 0;
  color: beige;
}

p {
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
  color: beige;
}

a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.container {
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  opacity: 0.8;
}

.form-container form {
  background: rgba(45, 52, 54, 1);
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.button {
  cursor: pointer;
  border-radius: 20px;
  /* border: 1px solid #ff4b2b;
  background: #ff4b2b; */
  /* border: 1px solid #fa8817;
  background: #fa8817; */
    border: 1px solid #1BBFB4;
  background: #1BBFB4;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  margin-top: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

input[type="text"] {
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: "PLay", sans-serif;
  font-size: 16px;
  font-weight: 200px;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #fff;
  font-weight: bold;
}

input[type="password"] {
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: "PLay", sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #fff;
}

input[type="email"] {
  width: 240px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: "PLay", sans-serif;
  font-size: 16px;
  font-weight: 200px;
  padding: 10px 0;
  transition: border 0.5s;
  outline: none;
  color: #fff;
  font-weight: bold;
}

.button:active {
  transform: scale(0.95);
}

.button:focus {
  outline: none;
}

.button.ghost {
  background: transparent;

  /* border-color: #fa8817;
  background-color: #fa8817; */
   border-color: #1BBFB4;
  background-color: #1BBFB4;
  margin: 0;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: #ffffff82;
  background: linear-gradient(to right, #ff4b2b, #ff416c) no repeat 0 0 / cover;
  color: #fff;
  position: absolute;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 40%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}
</style>
