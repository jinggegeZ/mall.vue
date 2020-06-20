<template>
 <div class="box">
    <div class="head">我的订单</div>
    <div>
      <van-tabs v-model="active" animated>
        <van-tab v-for="index in 4" :title="'选项 ' + index">内容 {{ index }}</van-tab>
      </van-tabs>
    </div>
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
  }
  .head {
    width: 100%;
    height: 50px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>