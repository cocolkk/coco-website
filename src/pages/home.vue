<template>
  <div class="home">
    <div>
      <FootBar></FootBar>
    </div>
  </div>
</template>
<script>
import FootBar from "../components/FootBar.vue";
export default {
  name: "home",
  components: {
    FootBar
  }
};
</script>
<style scoped lang="less">
.home {
  // height: 100vh;
  background: rgb(39, 38, 38);
}
</style>
