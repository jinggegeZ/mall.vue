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
      <div class="box3">
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
       nickname:'',
       checked:'false',
       value:'全选'
     }
   },
   methods: {
     primary(){
       this.$router.push('login')
     },
     all(){
       this.checked = true
       this.value = '取消全选'
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
  .box2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .box3 {
    width: 95%;
    height: 100px;
    background: red;
  }
  .bx2head {
    width: 95%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>