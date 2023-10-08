import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//  router
import router from './router'
//  ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//  js-cookie
// import Cookie from "js-cookie"
//  video-player
import VideoPlayer from "vue-video-player";
// require videojs style
import 'video.js/dist/video-js.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VideoPlayer)
app.mount('#app')
