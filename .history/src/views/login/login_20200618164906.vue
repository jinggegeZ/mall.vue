<template>
 <div class="login">
    <div class="icon"><van-icon name="arrow-left" /></div>
    <div class="l-box">
      <div class="l-box2">
        <div class="l-font">登录/注册</div>
        <div class="">
          <van-form @submit="onSubmit">
            <van-field v-model="nickname" name="用户名" label="Username" placeholder="Username" :rules="[{ required: true, message: '请填写用户名' }]"/>
            <van-field v-model="password" type="password" name="密码" label="Password" placeholder="Password" :rules="[{ required: true, message: '请填写密码' }]" />
          </van-form>
          <div class="van">
            <van-form>
            <van-field v-model="number1" type="number" name="手机号" label="手机号" placeholder="仅验证需要" :rules="[{ required: true, message: '请填写手机号' }]" />
            <div class="number">
              <van-field v-model="sms" center clearablelabel="短信验证码" placeholder="请输入短信验证码">
                <template #button>
                  <div class="t-box1"><van-button size="small" type="primary" @click="get">发送验证码</van-button></div>
                  <div class="t-box2">
                    <van-count-down ref="countDown" millisecond :time="60000" :auto-start="false" format="ss" @finish="finish"/>
                  </div>
                </template>
              </van-field>
            </div>
            <div class="number">
              <div><van-field v-model="verify" type="text" name="图形验证码" label="图形验证码" placeholder="仅登录需要" :rules="[{ required: true, message: '请填写图形验证码' }]" /></div>
              <div @click="getcode" v-html="code"></div>
            </div>
            </van-form>
          </div>
        </div>
        <div></div>
        <div class="denglu" @click="denglu">
            <van-button round block type="info" native-type="submit">
            登录
            </van-button>
        </div>
        <div @click="zhuce">
            <van-button round block type="info" native-type="submit">
            注册
            </van-button>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
  let countdown = 60;
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       nickname: '',
       password: '',
       number1:'',
       sms:'',
       verify:'',
       code:'',
       obj:''
     }
   },
   methods: {
      onSubmit(values) {
      console.log('submit', values);
    },
    zhuce(){
      this.$router.push('/register')
    },
    obtain(){

    },
    denglu(){
      this.$api.login(this.nickname,this.password,this.verify).then(res => {
        if(res.code === 200 ){
          this.$dialog.alert({message:'登录成功'})
          this.$router.push('my')
          console.log(res);
        }
        else if (res.code === -1 ){
          this.$dialog.alert({message:'请输入完整信息'})
          this.$router.push('/')
        }
      }).catch(err => {
        console.log(err);
      })
      
    },
    getcode(){
      this.$api.verify().then(res => {
       this.code = res
     }).catch(err => {
       console.log(err);
     })
    },
    
   },
   mounted() {
     this.getcode()
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
    border-radius: 5px;
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
    margin-bottom: 35px;
  }
  .l-box2 {
    width: 90%;
    height: 90%;
  }
  .div {
    margin: 16px;
  }
  .van {
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .denglu {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .number {
    display: flex;
    
  }
  .settime {
    width: 80px;
    height: 40px;
    background: green;
    line-height: 40px;
    color:white;
    border-radius: 5px;
   }
   .b-box {
     height: 30px;
     display: flex;
     justify-content: center;
     align-items: center;
   }
</style>