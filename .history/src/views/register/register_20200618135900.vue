<template>
 <div class="register">
        <div class="icon" @click="back"><van-icon name="arrow-left" /></div>
    <div class="r-box">
      <div class="r-box1">
        <van-cell-group>
          <van-field v-model="username" label="username" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div class="r-box1">
        <van-cell-group>
          <van-field v-model="password" label="passwrod" placeholder="请输入密码" />
        </van-cell-group>
      </div>
      <div class="r-box2">
        <div>
          <van-button type="primary">立即注册</van-button>
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
       username:'',
       password:'',
     }
   },
   methods: {
     back(){
       this.$router.push('/login')
     }
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
  .register {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../../public/bg.png') no-repeat;
    background-size: cover;
    position: relative;
  }
  .icon {
    width: 30px;
    height: 30px;
    border: 1px solid #999;
    border-radius: 15px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .r-box {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .r-box1 {
    margin-bottom: 15px;
  }
  .r-box2 {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  
</style>