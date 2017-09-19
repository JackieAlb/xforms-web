// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import store from './store/store'
import {getToken} from './utils/auth'


Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (getToken()) {
        if (to.path === '/login') {
          next({path: '/'})
        } else {
          next()
        }
      } else {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

var clientHeight=0;
new Vue({
  data(){
    return {
      clientHeight:'600px'
    }
  },
  store,
  router,
  el: '#app',
  render: h => h(App),
  mounted: function () {
    const that = this
    window.onresize=function(){
      var client = document.querySelector("#client")
      var header= document.querySelector("#header")
      var footer = document.querySelector("#footer")
      if(window.innerHeight>(header.clientHeight+footer.clientHeight+100)){
        client.style.height=window.innerHeight-header.clientHeight-footer.clientHeight-6 +"px"
      }
      var logo = document.querySelector("#logo")
      if(window.innerWidth<=950){
        logo.style.display="none";
      }else{
        logo.style.display=""
      }
    }
  }
})
