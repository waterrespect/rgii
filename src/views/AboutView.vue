<script setup lang="ts">
import videoVue from '../components/video.vue'
import {ref} from 'vue'
import userApi from '@/api/user'

const loginForm = ref({
  user: '',
  pwd: ''
})

const login = () => {
  userApi.login(loginForm)
}
</script>

<template>
  <div>about</div>
  <input v-model="loginForm.user" type="text"/>
  <input v-model="loginForm.pwd" type="text"/>

  <button @click="login"></button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.video-player {
  background-color: $black;
  width: 100%;
}
</style>
