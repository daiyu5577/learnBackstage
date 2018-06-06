<!-- 顶导 -->
<template>
  <div class="navTop">
    <!-- 顶部导航 -->
    <Header :style="{position: 'fixed',
    width: '100%',
    top: '0px',
    height: '60px',
    padding: '0px 20px',
    paddingLeft: '220px'
    }">
    <!-- 路由位置展示 -->
      <Breadcrumb>
          <BreadcrumbItem v-for="it in path">{{it}}</BreadcrumbItem>
      </Breadcrumb>
      <!-- 用户头像、名字 -->
      <div class="nav-user">
        <img src="../../assets/images/nav/nav-top-head.jpg" alt="">
        <Dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)">
                黑崎一护
                <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
        </Dropdown>
      </div>
    </Header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: []
    };
  },
  mounted() {
    this.path = this.$route.meta.path
  },
  watch: {
    // 面包屑的位置定位
    '$route'(to, from) {
      this.path = to.meta.path
    }
  }
}

</script>
<style lang='less'>
// 最外层盒子
.navTop {

  // 头部导航
  .ivu-layout-header{
        min-width: 1000px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }

    // 面包须
    .ivu-breadcrumb {
      float: left;
      overflow: hidden;
      height: 60px;
      line-height: 60px;
    }

    // 用户信息
    .nav-user {
      float: right;
      overflow: hidden;
      height: 60px;
      padding-top: 10px;

      // 头像
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        float: left;
      }
      
      // 下拉
      .ivu-dropdown {
        float: left;

        .ivu-dropdown-rel {
          line-height: 40px;
          font-size: 16px;
          a {
            color: #464C5B;
          }
        }
      }
    }
}
</style>