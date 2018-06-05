<template>
    <div class="navSide">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <div class="menuicon">
                <!-- 导航图标 -->
            </div>
            <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                <Submenu v-for="(item, index) in menuList" :name="item.name">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
                        {{item.title}}
                    </template>
                    <MenuItem v-for="it in item.MenuItem" :name="it.name">{{it.title}}</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
    </div>
</template>
<script>

import menuList from "@/resource/menuList"

export default {
    data() {
        return {
            menuList
        }
    }
}
</script>
<style lang="less">
// 最外层盒子
.navSide {
    
    // 侧导航的图标
    .menuicon {
    width: 100%;
    height: 60px;
  }
}
</style>