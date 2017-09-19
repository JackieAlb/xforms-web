<!--author:Jackie-->
<template>
  <Row type="flex" justify="center" align="top" style="width: 100%;">
    <Col span="6">
    <div class="kind-tree-nav">
      <Tree :data="treeData"></Tree>
    </div>
    </Col>
    <Col span="18">
    <div class="meta-kind-right">
      <div class="form-query">
        <Form :model="metaKind" :label-width="80">
          <FormItem label="名称:" >
            <Input class="form-item-input" v-model="metaKind.name" placeholder="请输入类别名称..."></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @onclick="query">查询</Button>
            <Button type="ghost" @onclick="reset">重置</Button>
          </FormItem>
        </Form>
      </div>
      <div class="form-list">
        <Table border :columns="cols" :data="tableData" ></Table>
      </div>
    </div>
    </Col>
  </Row>
</template>
<style>
  #meta-kind-sperator {
    height: inherit;
    width: 8px;
    background-color: #777777;
  }

  #meta-kind-sperator :after {
    content: "<";
  }

  .meta-kind-right {
    padding: 5px 0px;
    height: 100%;
    box-shadow: 0 0 15px #d3dce6;
    margin: 5px;
  }

  .form-item-input{
    width:200px;
  }

  .kind-tree-nav {
    padding: 5px 0px;
    height: 100%;
    box-shadow: 0 0 15px #d3dce6;
    text-align: left;
  }
  .form-table{
    background-color: #555;
  }
</style>
<script>
  import {getKindTreeData,getMetaKinds} from "@/api/metaKind"
  export default {
    name: "KindIndex",
    data:{
      treeData:[],
      tableData:[]
    },
    data() {
      return {
        metaKind: {
          name: ""
        },
        treeData:[],
        tableData:[],
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
        debugger
        this.$Message.warning({
          content: "暂未实现",
          duration:5
        })
      },
      reset:function(){
        this.metaKind.reset();
      }
    },
    created: function(){
        getKindTreeData().then(function (response) {
          deubgger
          this.$ref.treeData.push(response.data)
        })
        getMetaKinds().then(function (response) {
          debugger
          this.tableData = response.data
        })
      }
  }
</script>

