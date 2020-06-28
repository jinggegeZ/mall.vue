<template>
 <div>
    <div class="box" v-if="this.nickname === null">
      <div class="carbox">
        <div><img src="../../../public/loading.gif" alt="" width="300px"></div>
        <div class="cartfont">您需要登录后才可以查看哦</div>
      </div>
      <div class="carbtn"> 
        <div @click="primary"><van-button type="primary">立即登录</van-button></div>
    </div>
    </div>
    <div class="box2">
      <div class="bx2head">购物车</div>
      <div>
        <div><div><van-checkbox v-model="checked" checked-color="#07c160">全选</van-checkbox></div></div>
        <div></div>
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
       nickname:''
     }
   },
   methods: {
     primary(){
       this.$router.push('login')
     }
   },
   mounted() {
     this.nickname = localStorage.getItem('nickname')
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
  .cartfont {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carbtn {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content:space-around;
    align-items: center;
  }
  .bx2head {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>