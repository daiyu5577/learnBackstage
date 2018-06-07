<template>
    <div class="navSide">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <div class="menuicon">
                <!-- 导航图标 -->
                <img src="../../assets/images/nav/nav-side-logo.png" alt="">
            </div>
            <Menu active-name="courseManagement"
                  theme="dark"
                  width="auto"
                  @on-select="handlerMenuSlect"
                  :open-names="['1']">
                <Submenu v-for="(item, index) in menuList" :name="item.name" :key="index">
                    <template slot="title">
                        <Icon :type="item.icon"></Icon>
                        {{item.title}}
                    </template>
                    <MenuItem v-for="(it, index) in item.MenuItem" :name="it.name" :key="index">{{it.title}}</MenuItem>
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
    },
    methods: {
        handlerMenuSlect(name) {
            this.$router.push({name})
            //todo 新开窗口
            console.log(this.$router.resolve({name}))
            //  window.open(this.$router.resolve({name}))
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
    position: relative;

    img {
        height: 29px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
  }
}
</style>