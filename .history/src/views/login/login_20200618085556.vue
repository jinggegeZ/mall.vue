<template>
 <div class="login">
    <div class="l-box">
      <div><van-icon name="chat-o" /></div>
      <div>
        <div>登录/注册</div>
        <div></div>
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

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../../public/bg.png') no-repeat;
    background-size: cover;
  }
  .l-box {
    width: 90%;
    height: 90%;

  }
</style>