<template>
 <div class="login">
    <div class="icon"><van-icon name="arrow-left" /></div>
    <div class="l-box">
      <div class="l-box2">
        <div class="l-font">登录/注册</div>
        <div class="">
          <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="Username" placeholder="Username" :rules="[{ required: true, message: '请填写用户名' }]"/>
            <van-field v-model="password" type="password" name="密码" label="Password" placeholder="Password" :rules="[{ required: true, message: '请填写密码' }]" />
          </van-form>
        </div>
        <div></div>
        <div>
          <van-button type="primary">登录</van-button>
          <van-button type="info">注册</van-button>
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
       username: '',
       password: '',
     }
   },
   methods: {
      onSubmit(values) {
      console.log('submit', values);
    },
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
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../../public/bg.png') no-repeat;
    background-size: cover;
    position: relative;
  }
  .l-box {
    width: 90%;
    height: 80%;
    background:rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
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
  .l-font {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .l-box2 {
    width: 90%;
    height: 90%;
  }
  .div {
    margin: 16px;
  }
</style>