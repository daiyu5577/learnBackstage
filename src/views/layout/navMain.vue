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
  padding: 90px 30px 0px 240px;
  width: 100%;
  min-height: 100%;
  min-width: 1480px;
  background-color: #eeeeee;
}
</style>