<template>
  <div class="header" :class="type == 'black' ? 'black-header' : ''">
    <div class="header-left"></div>
    <div class="header-content">
      <div class="home">首页</div>
      <div>
        <span @click="gotoLogin">登录</span>
        <span @click="gotoRegister">注册</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type"],
  data() {
    return {};
  },
  methods: {
    // 登录
    gotoLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    // 注册
    gotoRegister() {},
  },
};
</script>
<style lang="less">
.header {
  height: 108px;
  width: 100vw;
  background: transparent;
  background: url("../../src/assets/header/Header_backgound.png");
  display: flex;
}
.header-left {
  width: 30%;
}
.header-content {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 60px;
}
.black-header {
  background: rgb(0, 0, 0);
}
</style>