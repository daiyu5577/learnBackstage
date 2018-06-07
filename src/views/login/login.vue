<!-- 登录 -->
<template>
  <div class="login">
      <div class="login-panel">
          <Form ref="formValidate" :rules="ruleValidate" :model="formItem" :label-width="40">
                <div class="login-title">
                    <h3>登录</h3>
                </div>
                <FormItem label="账号" prop="username">
                    <Input @keyup.native.enter="handlerLogin" v-model="formItem.username" placeholder="请输入您的263账号"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input @keyup.native.enter="handlerLogin" v-model="formItem.password" placeholder="请输入您的263密码"></Input>
                </FormItem>
                <Button size="large" long type="primary" :loading="loading" @click="handlerLogin">
                    <span v-if="!loading">登入</span>
                    <span v-else>登入中...</span>
                </Button>
                <span v-if="isDefeated" style="color:red; font-size:12px;">账号或是密码错误！！</span>
            </Form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
      // 自定义验证账号
      const validateUsername = (rule, value, callback) => {
      this.isDefeated = false
      if (!value) {
        return callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    // 自定义验证密码
    const validatePassword = (rule, value, callback) => {
      this.isDefeated = false
      if (!value) {
        return callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
        // 表单数据
        formItem: {},
        // 登录中
        loading: false,
        // 是否登录失败
        isDefeated: false,
        // 表单验证
        ruleValidate: {
            // 用户名验证
            username: [
                { validator: validateUsername, trigger: 'blur' }
            ],
            // 密码验证
            password: [
                { validator: validatePassword, trigger: 'blur' }
            ]
        }
    };
  },
  methods: {
      handlerLogin() {
          // 验证表单
          this.$refs['formValidate'].validate((valid) => {
            if (valid) {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.$router.push({name:'courseManagement'})
                }, 2000);
            } else {
                this.isDefeated = true;
            }
        })
      }
   }
}

</script>
<style lang='less'>
    // 登录
    .login {
        width: 100%;
        height: 100%;
        min-height: 480px;
        min-width: 550px;
        background: #475061;
        position: relative;
        background: url('../../assets/images/login/login-background.jpg') no-repeat center;
        background-size:100% 99.9%;

        // 登录面板
        .login-panel {
            width: 340px;
            height: 324px;
            background-color: #fff;
            padding: 0px 30px;
            position: absolute;
            top: 30%;
            right: 15%;

            // form表单
            .ivu-form {

                // 登录标题
                .login-title {
                    height: 60px;
                    font: 15px '微软雅黑';
                    line-height: 60px;
                    text-align: center;
                    border-bottom: 1px solid #cccccc;
                    overflow: hidden;
                    margin: 0px -30px 35px -30px;
                }

                // label
                .ivu-form-item-label {
                    font: 14px '微软雅黑';
                    color: #333;
                    padding: 8px 12px 8px 0;
                }

                // ivu-form-item
                .ivu-form-item:nth-last-of-type(1) {
                    margin-bottom: 40px;
                }

                // 按钮
                .ivu-btn {
                    height: 40px;
                    margin-bottom: 5px;
                }
            }
        }
    }
</style>