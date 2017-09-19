import Fetch from '@/utils/fetch.js'


export function loginByUserName(userName,password){
  const data={
    'userId':userName,
    'userName':userName,
    'password':password
  }
  return Fetch({
    url:'/auth',
    method:'post',
    data
  })
}


