<template>
  <div id="app">
    <div class="wrapper">
      <div class="toolbarUl">
        <router-link :to="{ path: 'HomePage' }">
          <span>首页</span>
        </router-link>
        <router-link :to="{ path: 'LivePage' }">
          <span>生活</span>
        </router-link>
        <router-link :to="{ path: 'StudyPage' }">
          <span>学习</span>
        </router-link>
      </div>
    </div>
    <div class="footer" style="">
      <div class="BeiAn">
        <span>
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033528"
          >
            <img src="./assets/police.png" style="float:left;" />
            京公网安备 11010802033528号 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </span>
        <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
          工信部备案 京ICP备2020040756号-1
        </a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
}

html {
  /* width: 100%; */
  height: 100%;
  /* display: flex; */
}
body {
  /* height: 100%; */
  /* width: 100%; */
  /* background-color: #f2fcbb; */
  margin: 0;
}

@media screen and (max-width: 750px) {
  body {
    background-color: lightblue;
  }
}

.wrapper {
  display: flex;
  /* height: 30px; */
  flex-direction: column;
  min-height: 100%;
  top: 0;
}

span {
  cursor: pointer;
}

.toolbarUl {
  background-color: #d2e28e;
  font-size: 20px;
  margin-top: 0;
  display: flex;
  justify-content: space-around;
}

.toolbarUl > li {
  /* height: 100%; */
  /* width: 30%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.BeiAn {
  /* height: 20px; */
  /* line-height: 20px; */
  /* margin: 0px 0px 0px 5px; */
  display: flex;
  justify-content: center;
}

p {
  color: white;
}

.BeiAn a {
  display: inline-block;
  text-decoration: none;
  height: 20px;
  line-height: 20px;
  color: white;
}

.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  margin: 0 auto;
  padding: 10px 0;
  background-color: #393939;
}
</style>
