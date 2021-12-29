<template>
  <div class="home">
    <div>
      <coco-header></coco-header>
      <div class="banner">
        <img src="" alt="" />
        <div class="process-bar"></div>
      </div>
      <!-- <foot-bar></foot-bar> -->
    </div>
  </div>
</template>
<script>
import FootBar from "../components/FootBar.vue";
import CocoHeader from "../components/CocoHeader.vue";
export default {
  name: "home",
  components: {
    FootBar,
    CocoHeader,
  },
  data() {
    return {
      type: "black",
    };
  },
};
</script>
<style scoped lang="less">
.home {
  // height: 100vh;
  // background: rgb(39, 38, 38);
}
.process-bar {
  width: 100vw;
  height: 2px;
  border-radius: 2px;
  background: orange;
}
</style>
