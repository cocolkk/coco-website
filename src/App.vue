<template>
  <!-- <div id="app"> -->
  <!-- <div class="toolbarUl">
      <router-link :to="{ path: 'HomePage' }">
        <span>首页</span>
      </router-link>
      <router-link :to="{ path: 'LivePage' }">
        <span>生活</span>
      </router-link>
      <router-link :to="{ path: 'StudyPage' }">
        <span>学习</span>
      </router-link>
    </div> -->
  <!-- <div class="BeiAn">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033528"
      >
        <img src="./assets/police.png" />
        京公网安备 11010802033528号
      </a>
      <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
        工信部备案 京ICP备2020040756号-1
      </a>
    </div> -->
  <router-view />
  <!-- </div> -->
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped lang="less">
body {
  // height: 100vh;
}
// @media screen and (max-width: 750px) {
//   body {
//     background-color: lightblue;
//   }
//   .footer a {
//     font-size: 2px;
//   }
// }

// .wrapper {
//   display: flex;
//   flex-direction: column;
//   /* min-height: 100%; */
//   top: 0;
// }

span {
  cursor: pointer;
}

// .toolbarUl {
//   background-color: #393939;
//   font-size: 20px;
//   margin-top: 0;
//   display: flex;
//   justify-content: space-around;
// }

.toolbarUl a {
  color: white;
  text-decoration: none;
}

.BeiAn {
  position: absolute;
  width: 100%;
  // display: flex;
  // justify-content: center;
  background-color: #393939;
  bottom: 0;
}

.BeiAn a {
  display: block;
  display: flex;
  margin: 8px auto;
  justify-content: center;
  // align-items: center;
  text-decoration: none;
  color: white;
}
</style>
