<template>
  <div id="app">
    <div class="wrapper">
      <ul class="toolbarUl">
        <router-link :to="{ path: 'HomePage'}" tag="li">
          <span>首页</span>
        </router-link>
        <router-link :to="{ path: 'LivePage'}" tag="li">
          <span>生活</span>
        </router-link>
        <router-link :to="{ path: 'StudyPage'}" tag="li">
          <span>学习</span>
        </router-link>
      </ul>
    </div>
    <router-view/>
    <div class="footer">
      <p>{{$store.state.title}}</p>
    </div>
    <div class="footer" style="">
          <p class="pBei">
            <span>
              <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802033528">
                <img src="./assets/police.png" style="float:left;"/>
                京公网安备 11010802033528号 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </span>
            <a target="_blank" href="https://beian.miit.gov.cn/#/Integrated/index">
              工信部备案 京ICP备2020040756号-1
            </a>
          </p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*top: 0;*/
  /*right: 0;*/
  /*bottom: 0;*/
  /*left: 0;*/
}

html,body {
  height: 100%;
  background-color: #f2fcbb;
}

.wrapper {
  display: flex;
  height: 30px;
  flex-direction: column;
  margin-text-outline: 0;
  min-height: 100%;
  top: 0;
}

/*p {*/
/*  color: #050505;*/
/*  text-align: center;*/
/*}*/

/*span {*/
/*  text-align: left;*/
/*}*/

.toolbarUl {
  background-color: #d2e28e;
  height: 30px;
  width: 100%;
  margin-top: 0;
  /*margin-bottom: 0;*/
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /*justify-content: space-between;*/
}

.toolbarUl>li{
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pBei {
  height: 20px;
  line-height: 20px;
  margin: 0px 0px 0px 5px;

}

p {
  color: white;
}

.pBei a {
  display:inline-block;
  text-decoration:none;
  height:20px;
  line-height:20px;
  color: white;
}

.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  margin:0 auto;
  padding: 15px 0;
  background-color: #393939;
}
</style>
