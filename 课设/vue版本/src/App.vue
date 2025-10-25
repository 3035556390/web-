<template>
  <div>

    <appnav></appnav>

  </div>
  <router-view></router-view>

</template>
<script>
import appnav from './components/appnav.vue';
import musicplayer from './components/musicplayer.vue';
import paperbackground from './components/paperbackground.vue';
export default {
  components: {
    appnav,
    musicplayer,
    paperbackground
  }
}
</script>
<style></style>