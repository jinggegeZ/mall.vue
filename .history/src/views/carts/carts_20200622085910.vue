<template>
 <div>
    <div class="box">
      <div class="carbox">
        <div><img src="../../../public/loading.gif" alt="" width="300px"></div>
        <div>您需要登录后才可以查看哦</div>
        <div> 
          <div><van-button type="primary">立即登录</van-button></div>
          <div></div>
        </div>
      </div>
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

<style scoped lang='scss'>
  .box {
    width: 100%;
    display: flex;
    justify-content: center;
    background: white;
  }
  .carbox {
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
  }
</style>