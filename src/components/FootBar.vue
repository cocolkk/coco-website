<template>
  <div class="BeiAn">
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
</template>
<script>
export default {
  name: "FootBar"
};
</script>
<style scoped lang="less">
body {
  position: relative;
}
.BeiAn {
  position: fixed;
  // height: 50px;
  // position: absolute;
  // width: 100%;
  // display: flex;
  // justify-content: center;
  border: 5px solid rgb(36, 200, 113);
  background: rgb(36, 200, 113);
  bottom: 0;
  padding: 10px auto;

  img {
    width: 20px;
    height: 20px;
  }
}

.BeiAn a {
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
