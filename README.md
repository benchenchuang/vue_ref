# data

> A Vue.js project

父组件传子组件： :data=data  <br/>
子组件传父组件：this.$emit('event',data)<br/>
子组件传父组件：this.$refs.name.[子组件数据]<br/>


import axios from 'axios';<br/>
const api='http://localhost:3000';<br/>
export const getUser=()=>{return axios.get(api+'/index').then(res=>res.data)}<br/>
api数据：import * as api from './api.js'<br/>
  api.getSystemConfig().then(result=>{<br/>
        console.log(result)<br/>
      })<br/>
<br/>
`//路由检测，登录功能
// const whiteList = ['/', '/search', '/login'] // 不需要登陆的页面
// router.beforeEach((to,from,next)=>{
//   var token=localStorage.getItem('uid');
//   if(!token){
//     if(whiteList.indexOf(to.path)!==-1){//白名单
//       next()
//     }else{
//       next('/login');
//     }
//   }else{
//     if (to.path === '/login') { //跳转到首页
//       next({path: '/'})
//     }
//     next();
//   }
// })`

## Build Setup<br/>

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
