<template>
 <div>
    <div class="box">
      <div class="box1">
        <div class="header">会员中心</div>
        <div class="mybox">
            <div class="b-img"><img :src="userInfo.avatar" alt=""></div>
            <div class="b-font">{{userInfo.nickname}}</div>
            <div class="b-back">退出登录</div>
        </div>
      </div>
      <div class="nav">
            <div>
              <div class="nav-img"><van-icon name="gold-coin-o" size="30" /></div>
              <div class="nav-font">代付款</div>
            </div>
            <div>
              <div class="nav-img"><van-icon name="gift-card-o" size="30" /></div>
              <div class="nav-font">代发货</div>
            </div>
            <div>
              <div class="nav-img"><van-icon name="logistics" size="30" /></div>
              <div class="nav-font">代收货</div>
            </div>
            <div>
              <div class="nav-img"><van-icon name="records" size="30" /></div>
              <div class="nav-font">评价</div>
            </div>
            <div>
              <div class="nav-img"><van-icon name="flag-o" size="30" /></div>
              <div class="nav-font">已完成</div>
            </div>
      </div>
      <div class="foot">
        <div class="foot-box">
          <div class="foot-box1">
            <div><van-icon name="send-gift-o" size="30" /></div>
            <div>全部订单</div>
          </div>
          <div><van-icon name="arrow" size="30" /></div>
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
        userInfo:{},
     }
   },
   methods: {

   },
   mounted() {
     this.$api.queryUser({}).then(res => {
       this.userInfo = res.userInfo
       console.log(res);
     }).catch(err => {
       console.log(err);
     })
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
  }
  .box1 {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .header {
    height: 40px;
    line-height: 40px;
  }
  .mybox {
    width: 100%;
    height: 200px;
    background: rgb(227,12,123);
  }
  .b-font {
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b-img {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 80px;
    width: 80px;
  }
  .b-back {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    width: 100%;
  }
  .nav-img {
    display: flex;
    justify-content: center;
  }
  .nav-font {
    font-size: 16px;
    color: #999;
  }
  .foot-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #999;
    border-top: 1px solid #999;
  }
  .foot-box1 {
    display: flex;
    align-items: center;
  }
</style>