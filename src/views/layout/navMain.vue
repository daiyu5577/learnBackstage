<!-- 主体内容 -->
<template>
  <div class="navMain">
    我是主体
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  }
}

</script>
<style lang='less' scoped>
.navMain {
  padding-left: 200px;
  padding-top: 60px;
  width: 100%;
  height: 100%;
  background-color: aqua;
}
</style>