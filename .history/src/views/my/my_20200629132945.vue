<template>
 <div>
    <div class="box">
      <div class="box1">
        <div class="header">会员中心</div>
          <div class="mybox" v-if="this.userInfo !== ''">
            <div class="b-img"><img :src="userInfo.avatar" alt=""></div>
            <div class="b-font" >欢迎您：{{userInfo.nickname}}</div>
            <div class="b-back" @click="logout">退出登录</div>
          </div>
           <div class="mybox" v-else>
            <div class="b-img"><img src="" alt=""></div>
            <div class="b-font" >请登录</div>
            <div class="b-back" @click="login">立即登录</div>
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
              <div class="nav-img" @click="evaluate"><van-icon name="records" size="30" /></div>
              <div class="nav-font">评价</div>
            </div>
            <div>
              <div class="nav-img"><van-icon name="flag-o" size="30" /></div>
              <div class="nav-font" @click="order">已完成</div>
            </div>
      </div>
      <div class="foot">
        <div class="foot-box">
          <div class="foot-box1">
            <div><van-icon name="send-gift-o" size="25" /></div>
            <div @click="order">全部订单</div>
          </div>
          <div><van-icon name="arrow" size="30" /></div>
        </div>
        <div class="foot-box" @click="myCollection">
          <div class="foot-box1">
            <div><van-icon name="gift-o" size="25" /></div>
            <div>收藏商品</div>
          </div>
          <div><van-icon name="arrow" size="30" /></div>
        </div>
        <div class="foot-box" @click="addressList">
          <div class="foot-box1">
            <div><van-icon name="label-o" size="25" /></div>
            <div>地址管理</div>
          </div>
          <div><van-icon name="arrow" size="30" /></div>
        </div>
        <div class="foot-box">
          <div class="foot-box1">
            <div><van-icon name="notes-o" size="25" /></div>
            <div @click="recently">最近浏览</div>
          </div>
          <div><van-icon name="arrow" size="30" /></div>
        </div>
      </div>
      <div @click="personalCare" class="icn"><van-icon name="setting" size="25" color="#fff" /></div>
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
    //  editAddress(){
    //    this.$router.push('/editAddress')
    //  },
     addressList(){
       this.$router.push('/addressList')
     },
     myCollection(){
       this.$router.push('/collect')
     },
     personalCare(){
       this.$router.push('/personalCare')
     },
     evaluate(){
       this.$router.push('/evaluate')
     },
     order(){
       this.$router.push('/order')
     },
     recently(){
       this.$router.push('/recently')
     },
     logout(){
       this.$api.loginOut({}).then(res => {
         this.$toast('退出成功')
         localStorage.removeItem('nickname')
         
       }).catch(err => {
         console.log(err);
       })
     },
     login(){
       this.$router.push('/login')
     }
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
    position: relative;
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
  .icn {
    position: absolute;
    top: 50px;
    right: 10px;
  }
</style>