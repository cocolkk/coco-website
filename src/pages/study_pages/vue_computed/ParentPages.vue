<template>
<!--父组件-->
  <div>
    <ChildPage :user="user"></ChildPage>
    <label for="user">parent:</label>
    <input id="user" type="text" v-model="user.name">
  </div>
</template>

<script>

import ChildPage from "./ChildPage";

export default {
  name: "ParentPages",
  data() {
    return {
      user: {name: 'coco'}
    }
  },
  components: { ChildPage }
}
</script>

<style scoped>

</style>
