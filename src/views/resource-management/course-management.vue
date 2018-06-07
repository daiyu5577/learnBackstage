<!-- 课程管理 -->
<template>
  <div class="course-management">
    <!-- 卡片盒子 -->
      <div class="card">
        <div class="card-picture"></div>
        <!-- 介绍内容 -->
        <div class="card-info">
          <h3 class="card-info-title">尚德的前世今生</h3>
          <ul class="card-info-describe">
            <li>
              <label>课程简介:</label>
              <div class="label-describe">
                20世纪90年代，硬件领域出现了单片式计算机系统，这种价格低廉的系统一出现就立即引起了自动控制领域人员的注意，因为使用它可以大幅度提升消费类电子产品（如电视机顶盒、面包烤箱
              </div>
            </li>
            <li>
              <label>任课老师:</label>
              <div class="label-describe">
                代瑜
              </div>
            </li>
            <li>
              <label>课程时长:</label>
              <div class="label-describe">
                03:22:08
              </div>
            </li>
            <li>
              <label>课程标签:</label>
              <div class="label-describe">
                <span class="card-tag">nice</span>
              </div>
            </li>
          </ul>
          <div >
          </div>
        </div>
        <!-- 按钮 -->
        <div class="card-btn">
          <Button type="primary" @click="handlerEditorCourse">编辑课程</Button>
          <Button type="ghost" @click="handlerDelCourse">删除课程</Button>
        </div>
      </div>
      <!-- 课程小节 -->
      <div class="course-table">
        <span class="table-title">课程小节</span>
        <Table stripe :columns="tableColumnsData" :data="tableData"></Table>
      </div>

      <!-- 课程资料 -->
      <div class="course-data">
        <span class="table-title">课件</span>
          <div class="course-data-item">
            <div class="item-panel">
            <!-- 资料图标 -->
            <div class="panel-icon">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="fileSvg('1.pdf')"></use>
              </svg>
            </div>

            <!-- 资料信息 -->
            <div class="panel-info">
              <!-- 名称 -->
              <div class="panel-info-title">商务英语</div>
              <!-- 大小-->
              <div class="panel-info-size">66M</div>
            </div>
          </div>

          <div class="item-panel">
            <!-- 资料图标 -->
            <div class="panel-icon">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="fileSvg('1.pdf')"></use>
              </svg>
            </div>
            <!-- 资料信息 -->
            <div class="panel-info">
              <!-- 名称 -->
              <div class="panel-info-title">商务英语</div>
              <!-- 大小-->
              <div class="panel-info-size">66M</div>
            </div>
          </div>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表头信息
      tableColumnsData:[
         {
            title: '播放顺序',
            key: 'videoNumber'
        },
        {
            title: '视频小节名称',
            key: 'videoName'
        },
        {
            title: '大小',
            key: 'videoSize'
        },
        {
            title: '时长',
            key: 'videoTime'
        }
      ],
      // 表格数据
      tableData: [
        {
            videoNumber: '1',
            videoName: '七龙珠',
            videoSize: '120M',
            videoTime: '01:03:22'
        },
        {
            videoNumber: '1',
            videoName: '死神',
            videoSize: '120M',
            videoTime: '01:03:22'
        },
      ]
    };
  },
  methods: {
    // 编辑课程
    handlerEditorCourse() {},
    // 删除课程
    handlerDelCourse() {},
    fileSvg(val = '') {
      // 匹配文件后缀
      const fileType = val.match(/[^\.]+$/)[0];
      let icon = "";
      switch (fileType) {
        case 'pdf':
          icon = "#icon-ziyuan3";
          break;
        case 'word':
          icon = "#icon-ziyuan6";
          break;
          case 'txt':
          icon = "#icon-ziyuan5";
          break;
          case 'xlsx':
          icon = "#icon-ziyuan4";
          break;
        default:
          icon = "#icon-ziyuan8";
          break;
      }
      return icon;
    },
  }
}

</script>
<style lang='less' scoped>
.course-management {
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  overflow: hidden;

  // 卡片介绍盒子
  .card {
    height: 181px;
    width: 100%;

    // 图片
    .card-picture {
      width: 322px;
      height: 181px;
      background: url('../../assets/images/login/login-background.jpg') no-repeat center;
      background-size:100% 99.9%;
      margin-right: 32px;
      float: left;
    }

    // 卡片描述信息
    .card-info {
      float: left;

      // 标题
      .card-info-title {
        margin-bottom: 36px;
      }

      // 描述
      .card-info-describe {
        width: 636px;
        height: 120px;
        li {
          font-size: 12px;
          color: #495060;
          letter-spacing: 0;
          line-height: 24px;
          overflow: hidden;

          // 小标题
          label {
            display: inline-block;
            float: left;
          }

          // 描述info
          .label-describe {
            float: left;
            max-width: 560px;
            word-break: break-all;
            padding-left: 5px;

            // 小标签
            .card-tag {
              display: inline-block;
              width: 60px;
              height: 24px;
              text-align: center;
              background: #F7F7F7;
              border: 1px solid #DDDEE1;
              border-radius: 4px;
            }
          }
        }
      }
    }

    // 按钮
    .card-btn {
      float: right;
    }
  }

  // 课程小节表格
  .course-table {
    margin-top: 40px;
    width: 1060px;
    padding: 5px 10px;
    margin-bottom: 30px;

  }

  // 带图三角的title
  .table-title {
    display: inline-block;
    font-size: 14px;
    color: #495060;
    padding-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: -12px;
      top: 3px;
      display: inline-block;
      border: 7px solid #3399FF;
      border-radius: 5px;
      border-color:transparent transparent transparent #3399FF;/*透明 透明  灰*/
    }
  }

  // 资料
  .course-data {
    border-radius: 6px;
    overflow: auto;

    // 列表项面板
    .item-panel {
      float: left;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background: #F7F8FB;
      width: 250px;
      height: 60px;
      padding: 0px 10px;
      margin-right: 30px;
      margin-bottom: 10px;

      .panel-icon,
      .panel-info {
        float: left;
      }

      // 资料图标
      .panel-icon {
        svg {
          width: 36px;
          height: 31px;
        }
      }

      // 资料信息
      .panel-info {
        margin-left: 11px;
        color: #5E6679;

        // 大小
        .panel-info-size {
          font-size: 12px;
          color: #666666;
        }

        // 标题
        .panel-info-title {
          font-size: 14px;
          color: #333333;
        }

      }
    }
  }
}
</style>