import Fetch from '@/utils/fetch.js'


export function getKindTreeData(){
  return Fetch({
    url:'/metakind/treedata',
    method:'get'
  })
}

export function getMetaKinds(){
  return Fetch({
    url:'/metakind',
    method:'get'
  })
}
