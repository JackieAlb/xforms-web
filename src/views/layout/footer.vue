<!--author:Jackie-->
<template>
  <Row>
    <Col span="24">
    <div class="footer">
      <span>普元信息 &copy; {{footerMsg}}.</span>
    </div>
    </Col>
  </Row>
  </div>
</template>

<style>
  .footer {
    height:50px;
    background-color: #555;
    color: #fff;
  }
</style>

<script>
  export default {
    name: 'FooterDiv',
    data: function () {
      return {
        footerMsg:'版权所有 2017-2019'
      }
    }
  }
</script>
