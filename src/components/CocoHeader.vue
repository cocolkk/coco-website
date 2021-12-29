<template>
  <div class="header" :class="type == 'black' ? 'black-header' : ''"></div>
</template>
<script>
export default {
  props: ["type"],
};
</script>
<style lang="less">
.header {
  height: 108px;
  width: 100vw;
  background: transparent;
  background: url("../../src/assets/header/Header_backgound.png");
}
.black-header {
  background: rgb(0, 0, 0);
}
</style>