<template>
 <div class="box">
    <div v-if="this.nickname === null">
      <div class="carbox">
        <div><img src="../../../public/loading.gif" alt="" width="300px"></div>
        <div class="cartfont">您需要登录后才可以查看哦</div>
      </div>
      <div class="carbtn"> 
        <div @click="primary"><van-button type="primary">立即登录</van-button></div>
      </div>
    </div>
    <div else class="box2">
      <div class="box3">
        <div class="bx2head">购物车</div>
        <div class="box4">
          <div v-if="checkedAll === false"><van-checkbox v-model="checkedAll" checked-color="#FF0000"  shape="square">全选</van-checkbox></div>
          <div v-else-if="checkedAll === true"><van-checkbox v-model="checkedAll" checked-color="#FF0000"  shape="square">取消全选</van-checkbox></div>
          <div>
            <div class="box4font">
              <span>合计:</span>
              <span class="box4font1">￥{{total | fixed }}</span>
            </div>
          <div class="box4font">请确认订单</div>
          </div>
        </div>
        <div class="box5">
          <div class="box6">
            <div class="box10"><van-button type="danger" @click="del">删除</van-button></div>
            <div><van-button type="primary" @click="goto">去结算</van-button></div>
          </div>
        </div>
        <div class="box5">
          <div class="box7" v-for="item in shopList" :key="item.id"> 
            <div class="box10"><van-checkbox v-model="item.check" shape="square" @click="check(item)"></van-checkbox></div>
            <div class="box8"><img :src="item.image_path" alt="" width="80px"></div>
            <div class="box9">
              <div>{{item.name}}</div>
              <div class="box11">
                <div>¥{{item.mallPrice}}</div>
                <div><van-stepper v-model="item.count" @change="add(item)" theme="round" button-size="22" disable-input /></div>
              </div>
            </div>
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
       value:'全选',
       money:'123',
       number:''
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
    font-size: 14px;
    color: red;
  }
  .box5 {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
  .box6 {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
  .box7 {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .box8 {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dddddd;
    margin-right: 15px;
  }
 
  .box10 {
    margin-right: 15px;
  }
  .box11 {
    width: 200px;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
  }
</style>