<!-- 主体 -->
<template>
  <div class="layout-nav">
      <navTop></navTop>
      <navSide></navSide>
      <navMain></navMain>
  </div>
</template>

<script>
// 顶部导航条
import navTop from "./navTop"
// 侧边导航
import navSide from "./navSide"
// 主体内容
import navMain from "./navMain"

export default {
  components: {
    navTop,
    navSide,
    navMain
  },
}

</script>
<style lang='less' scoped>
.layout-nav {
    width: 100%;
    height: 100%;
}
</style>