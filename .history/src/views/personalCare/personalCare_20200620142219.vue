<template>
 <div class="box">
    <div class="head">我的订单</div>
    <div class="icon" @click="back"><van-icon name="arrow-left" size="25" /></div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
   .box {
    width: 100%;
    height: 100%;
    background: white;
    position: relative;
  }
  .head {
    width: 100%;
    height: 50px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    position: absolute;
    top: 5px;
    left: 5px;
  }
</style>