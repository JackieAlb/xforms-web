
export default [
  {
    path: '/login',
    components: require('@/views/login/login'),
  },
  {
    path: '/',
    components:  require('@/views/layout/layout'),
    meta:{
      requireAuth:true
    },
    children:[
      {
        path:'metaKind',
        components:require('@/views/meta/kind/index'),
        children:[
          {
            path:"insert",
            components:require('@/views/meta/kind/modify')
          }
        ]
      },
      {
        path:'metaManage',
        components: require('@/views/meta')
      },
      {
        path:'templateKind',
        components: require('@/views/template/kind')
      },
      {
        path:'templateManage',
        components: require('@/views/template')
      },
    ]
  }
]
