<template>
  <div class="footer">
    <div class="beian">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033528"
      >
        <img src="../assets/police.png" />
        京公网安备 11010802033528号
      </a>
      <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
        工信部备案 京ICP备2020040756号-1
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "FootBar",
};
</script>
<style scoped lang="less">
body {
  position: relative;
}
.footer {
  width: 100vw;
  background: rgb(29, 29, 29);
}
.beian {
  position: fixed;
  border: 5px solid rgb(20, 20, 20);
  background: rgb(29, 29, 29);
  bottom: 0;
  padding: 10px auto;
  color: #fff;
  a:active {
    color: #fff;
  }
  a {
    color: #fff;
    list-style: none;
  }

  img {
    width: 20px;
    height: 20px;
  }
}

.beian a {
  // padding: 5px;
  display: block;
  display: flex;
  // margin: 8px auto;
  justify-content: center;
  // align-items: center;
  text-decoration: none;
  color: white;
}
</style>
