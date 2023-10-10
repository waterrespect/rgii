<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import headerView from './layouts/header.vue'
</script>

<template>
  <div class="common-layout" id="app">
    <el-container style="height: 100%">
      <el-header class="header"><headerView /></el-header>
      <el-main class="main"> 
        <div class="wrapper">
          <HelloWorld msg="You did it!" />
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/video">video</RouterLink>
            <!-- <h2 class="msg">{{ msg }}</h2> -->
            <!-- <h2 class="title">{{ title.title }}</h2> -->
            <RouterView />
          </nav>
        </div>
      </el-main>
      <el-footer class="footer">Footer</el-footer>
      <el-backtop :right="100" :bottom="100" />
    </el-container>
  </div>
</template>

<style scoped>
#app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

html,body,#app,.common-layout,.el-container{
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
}
el-header {
  line-height: 1.5;
  max-height: 100vh;
}

.main {
  /* background-color: rgb(189, 219, 132); */
  /* main 高度填充flex剩余高 */
  flex: 1;
}

.footer {
  background-color: rgb(189, 219, 132);
  /* main 高度填充flex剩余高 */
  flex: 0;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  el-header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  el-header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
