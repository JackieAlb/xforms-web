<template>
  <Modal
    v-model="show"
    @on-ok="ok"
    @on-cancel="cancel">
    <p slot="header" style="color:#f60;text-align:left">
      <Icon type="information-circled"></Icon>
      <span>{{caption}}</span>
    </p>
    <Form ref="formMetaKind" :model="formMetaKind" :label-width="80">
      <FormItem label="上级分类：">
        <Select v-model="formMetaKind.parentId" filterable >
          <Option v-for="item in metaKindList" :value="item.id" :key="item.id">{{ item.name }}</Option>
        </Select>
      </FormItem>
      <FormItem label="分类名称：">
        <Input type="text" v-model="formMetaKind.id" style="display: none"></Input>
        <Input type="text" v-model="formMetaKind.name"></Input>
      </FormItem>
      <FormItem label="分类描述：">
        <Input type="textarea" v-model="formMetaKind.description"></Input>
      </FormItem>
    </Form>
  </Modal>
</template>

<style>

</style>

<script>
  import {getMetaKinds,insertMetaKind} from '@/api/metaKind'

  export default {
    name: "MetaKindModify",
    data: function () {
      return {
        metaKindList:[]
      }
    },
    props: {
      caption: String,
      show:Boolean,
      formMetaKind: {
        type: Object,
        default: function () {
          return {
            id:'',
            parentId: '',
            name: '',
            description: '',
          }
        }
      }
    },
    methods: {
      ok () {
        const d = this.formMetaKind
        debugger
        insertMetaKind(d).then((reponse) =>{
          if(response.data.code!=1){
            this.$Message.error("数据插入失败，请检查")
          }
        }).catch((response)=>{
          this.$Message.error(response.message)
        })

      },
      cancel () {
        this.$Message.info("点击了取消")
      }
    },
    created:function(){
      let that = this
      getMetaKinds().then(function (response) {
        that.metaKindList =  response.data
    }).catch(function(error){
        that.$Message.error(error)
      })

    }
  }
</script>
