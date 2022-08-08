<template>
<!-- 상단바 -->
  <div id="header">
    <div class="title">게시판</div>
    <div class="menu">
      <div class="menu__box">
        <router-link to="/" class="link">홈</router-link>
      </div>
      <div class="menu__box">
        <router-link to="/Signin" class="link">로그인</router-link>
      </div>
      <div class="menu__box">
        <router-link to="/Signup" class="link">회원가입</router-link>
      </div>
    </div>
  </div>

<!-- 중앙 내용 -->
  <div id="content">
    <router-view></router-view>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: "App",
}

</script>

<style>
  .link {
    text-decoration: none;
    font-size: 20px;
    box-sizing: border-box;
    padding: 5px 10px;
  }
  #header {
    width: 100%;
    position: fixed;
    height: 70px;
    top: 0;
    background-color: #a8c0ff;
  }
  #header .title {
    width: 100px;
    height: 70px;
    display: flex;
    font-size: 35px;
    font-weight: 700;
    color: #3f2b96;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  #header .menu {
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
  }
  #header .menu .menu__box {
    color: #3f2b96;
    position: relative;
  }
  #header .menu .menu__box::before {
    content: "";
    width: 2px;
    height: 15px;
    background-color: #3f2b96;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  #header .menu .menu__box:first-child::before {
    display: none;
  }
  #content {
    margin-top: 50px;
  }
</style>