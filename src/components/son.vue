<template>
  <div>
      <p ref='child'>{{text}} </p>
  </div>
</template>
<script>
export default {
    data(){
        return{
            text:"来自ref的信息"
        }
    }
}
</script>

