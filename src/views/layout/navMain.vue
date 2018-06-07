<!-- 主体内容 -->
<template>
  <div class="navMain">
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
  padding-left: 230px;
  padding-top: 90px;
  width: 100%;
  height: 100%;
  background-color: aqua;
}
</style>