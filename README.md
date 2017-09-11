# data

> A Vue.js project

父组件传子组件： ：data=  <br/>
子组件传父组件：this.$emit('event',data)<br/>
子组件传父组件：this.$refs.name.[子组件数据]<br/>

api数据：import * as api from './api.js'<br/>
  api.getSystemConfig().then(result=>{<br/>
        console.log(result)<br/>
      })<br/>

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
