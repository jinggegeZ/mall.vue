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
        <div class="bx2head">购物车</div>
        <div class="box4">
        <div @click="all"><van-checkbox v-model="checked" checked-color="#FF0000" >{{value}}</van-checkbox></div>
        <div>
          <div class="box4font">
          <span>合计:</span>
          <span class="box4font1">￥{{totalMoney | numFilter}}</span>
          </div>
          <div class="box4font">请确认订单</div>
        </div>
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
    width: 90%;
  }
  .box4 {
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
  }
  .bx2head {
    
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box4font {
    font-size: 12px;
  }
  .box4font1 {
    font-size: 12px;
    color: red;
  }
</style>