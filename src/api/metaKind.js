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

export function insertMetaKind(metaKind){
  return Fetch({
    url:'/metakind',
    method:'post',
    data:metaKind
  })
}

export function updateMetaKind(metaKind){
  return Fetch({
    url:'/metakind',
    method:'put',
    data:metaKind
  })
}

export function deleteMetaKind(metaKindId){
  return Fetch({
    url:'/metakind/'+metaKindId,
    method:'delete'
  })
}
