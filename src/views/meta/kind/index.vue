<!--author:Jackie-->
<template>
  <Row type="flex" justify="center" align="top" class="client">
    <Col span="6" class="xform-col">
    <div class="tree-nav">
      <Tree :data="treeData"></Tree>
    </div>
    </Col>
    <Col span="18" class="xform-col">
    <div class="data-client" >
      <div class="form-query">
        <Form ref="formMetaKind":model="formMetaKind" :label-width="80">
          <FormItem label="名称:">
            <Input class="form-item-input" v-model="formMetaKind.name" placeholder="请输入类别名称..."></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="query">查询</Button>
            <Button type="ghost" @click="reset">重置</Button>
          </FormItem>
        </Form>
      </div>
      <div class="form-list">
        <div class="list-buttons">
          <Button type="primary" class="opr-btn" icon="android-add" @click="insert">新增</Button>
          <Button type="primary" class="opr-btn" icon="document" @click="update" >修改</Button>
          <Button type="primary" class="opr-btn" icon="android-remove" @click="remove" >删除</Button>
        </div>
        <Table border :columns="cols" :data="tableData"></Table>
      </div>
    </div>
    <meta-kind-modify ref="modifyDialog" :caption="caption" :show="show"></meta-kind-modify>
    </Col>
  </Row>
</template>
<style>
  .client{
    width:100%;
    height: 99%;
  }
  .xform-col{
    height: 100%;
  }
  .form-query{
    min-width: 300px;
  }
  .data-client {
    padding: 5px 0px 10px 0px;
    height: 100%;
    box-shadow: 0 0 15px #d3dce6;
    margin: 5px 5px 0 5px;
  }

  .form-item-input {
    width: 200px;
  }

  .tree-nav {
    padding: 5px 0px 10px 0px;
    margin:5px 0px;
    height: 100%;
    box-shadow: 0 0 15px #d3dce6;
    text-align: left;
  }
  .list-buttons{
    background-color:#f8f8f9 ;
    border: 1px solid #e9eaec;
    padding:5px 10px;
    text-align: left;
  }
  .opr-btn{
  }
</style>
<script>
  import {getKindTreeData, getMetaKinds,insertMetaKind,updateMetaKind,deleteMetaKind } from "@/api/metaKind"
  import MetaKindModify from "./modify.vue";

  export default {
    components: {MetaKindModify},
    name: "KindIndex",
    caption:"",
    data: function () {
      return {
        show:false,
        formMetaKind: {
          name: ""
        },
        treeData: [],
        tableData: [],
        cols: [
          {
            type: "selection",
            width: 60,
            align: "center"
          },
          {
            title: "序号",
            type: "index",
            width: 70,
            align: "center"
          },
          {
            title: "名称",
            key: "name"
          },
          {
            title: "描述",
            key: "description"
          },
          {
            title: "上级类别",
            key: "parentId"
          }
        ]
      }
    },
    methods: {
      query: function () {
        this.$Message.warning("暂未实现")
      },
      reset: function () {
        this.$refs.formMetaKind.resetFields()
      },
      insert:function(){
        this.caption = "新增一个分类"
        this.show = true;
      },
      update:function(){
        this.$Message.warning("暂未实现")
      },
      remove:function(){
        this.$Message.warning("暂未实现")
      },
      initData: function () {
        let that = this
        getKindTreeData().then(function (response) {
          that.treeData.push(response.data)
        })
        getMetaKinds().then(function (response) {
          that.tableData = response.data
        })
      }
    },
    created: function () {
      this.initData()
    }
  }
</script>

