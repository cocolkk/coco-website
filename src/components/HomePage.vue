<template>
  <div class="div2">
    <router-link :to="{ path: 'HomePage' }">
      <span>首页</span>
    </router-link>
    <router-link :to="{ path: 'LivePage' }">
      <span>生活</span>
    </router-link>
    <router-link :to="{ path: 'StudyPage' }">
      <span>学习</span>
    </router-link>
    <!-- <h2>{{ $store.state.name }}</h2> -->
    <!-- <div class="banner" v-on:mouseover="stop()" v-on:mouseleave="move()">
      <div>
        <img :src="imageList[currentIndex]" alt="" />
      </div>
      <div class="page" v-if="this.imageList.length > 1">
        <ul>
          <li @click="gotoPage(prevIndex)">&lt;</li>
          <li
            v-for="(item, index) in imageList"
            :key="index"
            @click="gotoPage(index)"
            :class="{ current: currentIndex == index }"
          >
            {{ index + 1 }}
          </li>
          <li @click="gotoPage(nextIndex)">&gt;</li>
        </ul>
      </div>
    </div> -->
  </div>
</template>

<script>
// 下面是导入轮播图片的相对地址
import street from "../assets/street.jpg";
import lotus from "../assets/lotus.jpg";
import water from "../assets/water.jpg";
import sunflower from "../assets/sunflower.jpg";
export default {
  name: "HomePage",
  data() {
    return {
      imageList: [street, lotus, sunflower, water],
      currentIndex: 0,
      timer: null,
      dialogRegister: false,
      userName: "",
      password: ""
    };
  },

  // 页面组件初始化之前，只需存放loading事件即可
  beforeCreate() {},
  // 组件初始化加载
  created() {
    this.runInv;
  },

  // 方法
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },

    add() {
      console.log(this.$store.commit("edit"));
    },

    // 清除定时器
    stop() {
      clearInterval(this.timer);
    },

    // 移除鼠标恢复定时器
    move() {
      console.log("sssss");
      // 这里要求runInv()方法不能放到计算属性中，假设放到计算属性中不能当做函数使用
      this.runInv();
      console.log("------------");
    },

    // 注册
    dialogRegisterFunc() {
      this.dialogRegister = true;
    },

    // 定时器
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 1000);
    }
  },

  // 计算属性
  // 计算属性中定义的方法只能作为属性使用(this.prevIndex), 不能书写成(this.preIndex())
  computed: {
    // 上一张
    prevIndex() {
      if (this.currentIndex == 0) {
        return this.imageList.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },

    // 下一张
    nextIndex() {
      if (this.currentIndex == this.imageList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  },

  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style scoped lang="less">
// * {
//   margin: 0;
//   padding: 0;
// }

ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.banner {
  /*height: 30%;*/
  width: 50%;
  position: relative;
  margin: 0 auto;
  display: block;
  /*margin-top: 0px;*/
  background-color: #f2fcbb;

  /*background-color: #fab6b6;*/
}

.banner img {
  width: 100%;
  display: block;
}

.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  width: 100%;
  display: block;
}

.banner .page ul {
  float: right;
}

.current {
  color: #ff6700;
}

.app {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

img {
  width: 300px;
  height: 300px;
}
</style>
