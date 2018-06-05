<!-- 主体 -->
<template>
  <div class="layout-nav">
      <navTop></navTop>
      <navSide></navSide>
  </div>
</template>

<script>
// 顶部导航条
import navTop from "./navTop"
// 侧边导航
import navSide from "./navSide"

export default {
  components: {
    navTop,
    navSide
  },
}

</script>
<style lang='less' scoped>
</style>