<template>
  <div class="login">
    <div class="login-img"></div>
    <div class="login-input">
      <div>
        <input v-model="username" type="text" />
      </div>
      <div>
        <input v-model="password" type="password" />
      </div>
      <button>登陆</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {},
    logout() {},
  },
};
</script>
<style scoped lang="less">
body {
  margin: 0px;
  display: flex;
}
.login {
  display: flex;
  // height: 100vh;
  background: rgb(248, 248, 248);
}
.login-img {
  flex: 2;
}
.login-input {
  flex: 1;
}
</style>
