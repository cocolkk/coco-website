import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'

import HomePage from '../components/HomePage'
import LivePage from "../components/LivePage";
import StudyPage from "../components/StudyPage";
import ParentPages from "../pages/study_pages/vue_computed/ParentPages";
import ChildPage from "../pages/study_pages/vue_computed/ChildPage";
import login from "../pages/login";
import home from "../pages/home";
import FootBar from "../components/FootBar"

// study pages
import VueDemo from "../pages/study_pages/VueDemo";
import VuexDemo from "../pages/study_pages/VuexDemo";
import PassValue from "../pages/study_pages/pass_value/PassValue";

Vue.use(Router)

export default new Router({
  mode:'history',   //去除#号
  routes: [
    {
      path: '/App',
      name: 'App',
      component: App,
    },

    {
      path: '/',
      redirect: '/login',
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },


    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
      // component: () => import('@/components/HomePage'), // import 页面级组件
    },

    {
      path: '/LivePage',
      name: 'LivePage',
      component: LivePage
    },

    {
      path: '/StudyPage',
      name: 'StudyPage',
      component: StudyPage
    },

    {
      path: '/VueDemo',
      name: 'VueDemo',
      component: VueDemo
    },

    {
      path: '/VuexDemo',
      name: 'VuexDemo',
      component: VuexDemo
    },

    {
      path: '/PassValue',
      name: 'PassValue',
      component: PassValue
    },
    {
      path: '/ParentPages',
      name: 'ParentPages',
      component: ParentPages
    },
    {
      path: '/ChildPage',
      name: 'ChildPage',
      component: ChildPage
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/FootBar',
      name: 'FootBar',
      component: FootBar
      
    }

  ]
})
