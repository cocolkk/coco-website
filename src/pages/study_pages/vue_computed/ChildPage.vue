<template>
<!--子组件-->
  <div>
    child: {{counter}}
  </div>
</template>

<script>
export default {
  name: "ChildPage",
  props: ["user"],
  data(){
    return{
      counter: this.user
    }
  }
  // props: ['user']   // 父组件像子组件传值通过props
}

</script>

<style scoped>

</style>
