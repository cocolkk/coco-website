<template>
<div>
  <router-link :to="{ path: 'VueDemo'}">
    <span>vue</span>
  </router-link>
  <router-link :to="{ path: 'VuexDemo'}">
    <span>vuex</span>
  </router-link>
  <router-link :to="{ path: 'PassValue'}">
    <span>组件之间的传值</span>
  </router-link>
</div>
</template>
<script>
export default {
  name: "StudyPage"
}
</script>

<style scoped>

</style>
