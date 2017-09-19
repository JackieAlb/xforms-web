<!--author:Jackie-->
<template>
  <div class="login-container">
    <Form ref="loginForm" autoComplete="on" :model="loginForm" class="login-form" :rules="ruleValidate">
      <h3 class="title">系统登录</h3>

      <FormItem prop="userName">
        <Input type="text" v-model="loginForm.userName" placeholder="邮箱" autocomplete="on">
        <Icon type="person" slot="prepend" size="20"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="loginForm.password" placeholder="密码" autocomplete="off">
        <Icon type="locked" slot="prepend" size="20"></Icon>
        <Button  slot="append" @click="showPwd"  icon="eye" style="font-size: 16px;"></Button>
        </Input>
      </FormItem>

      <Button type="default" style="width:100%;margin-bottom:30px;" :loading="loading"
              @click.native.prevent="handleLogin('loginForm')">登录
      </Button>

      <div class='tips'>账号:formadmin 密码000000</div>
      <div class='tips'>账号:formuser 密码000000</div>

      <Button class='thirdparty-button' type="default" @click='showDialog=true'>打开第三方登录</Button>
    </Form>
  </div>
</template>

<script>
  import {isvalidUsername} from '@/utils/validate'
  import socialSign from './socialsignin'
  import {loginByUserName} from '@/api/login'
  import {setToken} from '@/utils/auth'

  export default {
    components: {socialSign},
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          userName: 'formadmin',
          password: '000000'
        },
        ruleValidate: {
          userName: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        },
        pwdType: 'password',
        loading: false,
        showDialog: false
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin(name) {
        this.$refs[name].validate(valid => {
          let userName = this.loginForm.userName
          let password = this.loginForm.password
          if (valid) {
            this.loading = true
            loginByUserName(userName, password).then(response => {
              this.loading = false
              const data = response.data
              if (data.code == 1) {
                console.log(data)
//              this.$store.commit('isLogin',userName)
                setToken(userName)
                this.$router.push({path: '/'})
              } else {
                console.log('Login fail')
                this.$Message.warning({
                  content: '用户名密码不正确',
                  duration: 5
                })
                return false
              }
            }).catch((error) => {
              this.loading = false
              debugger
              console.log('error submit!!')
              let message = "";
              switch (error.code){
                case  "ECONNABORTED":
                  message = "连接超时，请检查您的网络是否完好"
                  break
                default:
                  message:"登录时后台服务出现错误，请联系管理员"
              }
              this.$Message.error({
                content:message,
                duration:5
              })
            })
          } else {
            this.$Message.error({
              content: '无效的用户名/密码',
              duration: 5
            })
            return false
          }
        })
      },
      afterQRScan() {
        // const hash = window.location.hash.slice(1)
        // const hashObj = getQueryObject(hash)
        // const originUrl = window.location.origin
        // history.replaceState({}, '', originUrl)
        // const codeMap = {
        //   wechat: 'code',
        //   tencent: 'code'
        // }
        // const codeName = hashObj[codeMap[this.auth_type]]
        // if (!codeName) {
        //   alert('第三方登录失败')
        // } else {
        //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
        //     this.$router.push({ path: '/' })
        //   })
        // }
      }
    },
    created() {
      // window.addEventListener('hashchange', this.afterQRScan)
    },
    destroyed() {
      // window.removeEventListener('hashchange', this.afterQRScan)
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/style/mixin.scss";

  $bg: #fff;
  $light_gray: #555;
  .login-container {
    @include relative;
    height: 100vh;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    Input {
      height: 40px;
    }
    .button {
      background-color: #d3dce6;
      height: 60px;
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $bg;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .tips {
      color: $bg;
      margin-bottom: 10px;
      font-size: small;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 300px;
      box-shadow: 0px 0px 5px;
      background-color: $light_gray;
      padding: 20px 25px 25px 25px;
      margin: 50px auto;
    }

    .thirdparty-button {
      position: absolute;
      right: 25px;
      bottom: 28px;
    }
  }
</style>
