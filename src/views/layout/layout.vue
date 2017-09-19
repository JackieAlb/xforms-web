<!--author:Jackie-->
<template>
  <div class="home">
    <header-div id="header" :logoName="logoName"></header-div>
    <div id="client">
        <router-view></router-view>
    </div>
    <footer-div id="footer"></footer-div>
  </div>
</template>

<style>
  .home {
    padding-top: 3px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: 'Avenir', Helvetica, Arial, 微软雅黑;
    font-size: medium;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
  }
  #client{
    height:600px;
    width:100%;
    background-color: #eff;
  }
</style>

<script>

  import HeaderDiv from "./header.vue";
  import FooterDiv from "./footer.vue";

  export default {
    components: {
      FooterDiv,
      HeaderDiv
    },
    name: 'HomeDiv',
    data: function () {
      return {
        logoName: "快速业务表单 XForms v0.1",
        user: ""
      }
    },
    methods: {

    }
  }
</script>
