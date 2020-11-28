import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

// 创建Vuex对象
const store = new Vuex.Store({
  state: {
    // 存放的键值对就是所要管理的状态
    name: 'Scenery',
    count: 0,
    ChangeShowCom: true,
  },

  // getters方法集：对state中的成员加工后传递给外界
  getters: { // getters: 实时监听state值的变化（最新状态）
  },

  // mutations方法集：操作state数据的方法的集合，比如对该数据的修改、增加、删除等等
  mutations: {
    // es6语法，等同edit:function(){}
    // 修改某一个数据
    edit(state) {
      state.name = 'scenery'
    }
    //
  },

  // actions方法集
  actions: {
  },

  // modules模块集

  modules: {}
})

export default store
