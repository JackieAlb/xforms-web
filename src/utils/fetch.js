import axios from 'axios'


const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout:3000
})

service.interceptors.request.use(
  config => {
    // const token = getCookie('session')
    debugger
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type':'application/json',
    }
    // if (token) {
    //   config.params = {'token': token}
    // }
    return config
  },
  err =>{
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response =>{
    return response
    //
    // if(response.data.code ==2){  //统一拦截的代码
    //   this.$ref.router.push({
    //     path:'/login',
    //     query:{ redirect:router.currentRoute.fullPath}
    //   })
    // }
  },
  error => {
    console.log('fetch.js => error'+error)
    return Promise.reject(error)
  }
)

export default service
