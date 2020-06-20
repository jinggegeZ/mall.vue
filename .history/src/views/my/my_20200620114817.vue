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
              <div class="nav-img"><van-icon name="gold-coin-o" /></div>
              <div>代付款</div>
            </div>
            <div>
              <div class="nav-img"><van-icon name="gift-card-o" height="30px" /></div>
              <div>代发货</div>
            </div>
            <div>
              <div class="nav-img"></div>
              <div>代收货</div>
            </div>
            <div>
              <div class="nav-img"></div>
              <div>评价</div>
            </div>
            <div>
              <div class="nav-img"></div>
              <div>已完成</div>
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
 
</style>