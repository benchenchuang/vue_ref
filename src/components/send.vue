<template>
  <div>
      <h2 @click="sendData">发送信息</h2>
  </div>
</template>
<script>
export default {
    data(){
        return{
            text:"来自子组件的点击内容"
        }
    },
    methods:{
        sendData(){
            this.$emit('getData',this.text)
        }
    }
}
</script>

