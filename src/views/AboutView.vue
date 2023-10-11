<script setup lang="ts">
import {ref} from 'vue'
import userApi from '@/api/user'

const loginForm = ref({
  user: '',
  pwd: ''
})

const login = () => {
  userApi.login(loginForm).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
}
</script>

<template>
  <div>about</div>
  <input v-model="loginForm.user" type="text"/>
  <input v-model="loginForm.pwd" type="text"/>
  <el-button @click="login" type="primary">Primary</el-button>
  <!-- <el-button @click="login"></el-button> -->
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.video-player {
  background-color: $black;
  width: 100%;
}
</style>
