<!--author:Jackie-->
<template>
  <Row class="header">
    <Col span="3">
    <div class="img-logo">
      <router-link id="logo" to="/home/login"><img src="../../assets/logo-dark.png" style="height: 60px"></img></router-link>
    </div>
    </Col>
    <Col span="16">
    <Menu mode="horizontal" :theme="theme1" active-name="menu-meta" class="xforms-menu" @on-select="doHeaderMenu">
      <Submenu name="menu-meta">
        <template slot="title">
          <Icon type="code"></Icon>
          业务要素
        </template>
        <MenuGroup title="维护">
          <MenuItem name="menu-meta-kind" >要素分类</MenuItem>
          <MenuItem name="menu-meta-manage" >要素管理</MenuItem>
        </MenuGroup>
        <MenuGroup title="订阅">
          <MenuItem name="menu-meta-sub-auth">订阅权限</MenuItem>
          <MenuItem name="menu-meta-sub">订阅</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="menu-template">
        <template slot="title">
          <Icon type="code-working"></Icon>
          表单模板
        </template>
        <MenuGroup title="维护">
          <MenuItem name="menu-template-kind" >模板分类</MenuItem>
          <MenuItem name="menu-template-manage" >模板管理</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
    </Col>
    <Col span="5" style="text-align: right">
    <ul class="nav">

      <li v-for="nav in navs">
        <Button type="default" shape="circle" :icon="nav.icon" :title="nav.title" :name="nav.name"
                v-on:click="doHeaderNav(nav.name)"></Button>
      </li>
    </ul>
    </Col>
  </Row>
</template>

<style>
  .header {
    width: 100%;
    height: 70px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: #555;
    text-align: left;
    margin: 0;
    color: #fff;
  }
  .xforms-menu{
   vertical-align: bottom;
    background-color: #555;
    color: #fff;
  }
  .img-logo {
    text-align: left;
    overflow: hidden;
    margin-left: 8px;
    min-width: 150px;
  }

  .text-logo {
    text-align: left;
    line-height: 60px;
    color: #fff;
    font-size: larger;
  }

  .nav {
    text-align: right;
    height: 60px;
    display: inline-block;
  }

  .nav li {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 60px;
  }
</style>

<script>
  import {removeToken} from '@/utils/auth'
  export default {
    name: "headerDiv",
    data: function () {
      return {
        theme1:"primary",
        navs: [
          {icon: "home", name: "home", title: "首页"},
          {icon: "ios-search", name: "search", title: "全站搜索"},
          {icon: "email", name: "email", title: "给作者发信"},
          {icon: "log-out", name: "logout", title: "登出"},
        ]
      }
    },
    props: ["logoName"],
    methods: {
      doHeaderNav: function (navName) {
        switch (navName) {
          case "home":
            this.$router.push("/")
            break
          case "email":
            location.href = "mailto:xiegz@primeton.com"
            break
          case "logout":
            removeToken()
            this.$router.push("/login")
            break
          case "search":
            this.$Message.info({
              content: "未实现！调用全站搜索组件，焦点定位至组件上",
              duration: 10,
              closable: true
            })
            break
          default:
            this.$Message.warning("错误调用！");
        }
      },
      doHeaderMenu:function(menuItemName){
        debugger
        switch(menuItemName){
          case "menu-meta-kind":
            debugger
            this.$router.push("/metaKind")
            break
          case "menu-meta-manage":
            this.$router.push("/metaManage")
            break
          case "menu-template-kind":
            this.$router.push("/templateKind")
            break
          case "menu-template-manage":
            this.$router.push("/templateManage")
            break
          default:
            this.$Message.warning("错误调用！")
        }
      }
    },
  }
</script>
