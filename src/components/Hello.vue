<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <data-props :text='text'></data-props>
    <h3>{{son || '暂无消息'}}</h3>
    <data-send v-on:getData="val => getSontext(val)"></data-send>
    <h4>{{refText || '暂无ref消息'}}</h4>
    <ref-son ref='son'></ref-son>
    <button @click="getBooks">加载书</button>
  </div>
</template>

<script>
import * as api from './api.js'
import dataProps from './props'
import dataSend from './send'
import refSon from './son'
export default {
  name: 'hello',
  components:{
    dataProps,
    dataSend,
    refSon
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text:'1/ This is props data send',
      son:'',
      refText:""
    }
  },
  mounted(){
    this.refText=this.$refs.son.text;
  },
  methods:{
    getSontext(val){
      this.son=val
    },
    getBooks(){
      api.getSystemConfig().then(result=>{
        console.log(result)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
