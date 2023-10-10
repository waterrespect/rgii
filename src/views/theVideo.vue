<script setup lang="ts">
import videoVue from '../components/video.vue'

</script>

<template>
  <videoVue video_url="/src/resources/3d.mp4"/>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.video-player {
  background-color: $black;
  width: 100%;
}
</style>
