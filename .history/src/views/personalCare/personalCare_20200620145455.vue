<template>
 <div class="box">
    <div class="head">个人资料</div>
    <div class="icon" @click="back"><van-icon name="arrow-left" size="20" /></div>
    <van-cell-group>
      <div><van-field v-model="value" label="Github" /></div>
    </van-cell-group>
    <div class="Pcbox">
      <div class="pcbox">
        <div>头像</div>
        <div class="pc1box">
          <div><img :src="userInfo.avatar" alt="" width="50px" height="50px"></div>
          <div><van-icon name="arrow" /></div>
        </div>
     </div>
    </div>
    <van-cell-group>
      <van-field v-model="username" label="用户名" >
        <template>{{uesrname}}</template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="nickname" label="昵称" >
        <template>{{nickname}}</template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="gender" label="性别" >
        <template>{{gender}}</template>
      </van-field>
    </van-cell-group>
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
       value:'',
       userInfo:{},
       userInfo:'',
       nickname:'',
       gender:'',

     }
   },
   methods: {
        back(){
       this.$router.push('my')
     }
   },
   mounted() {
      this.$api.queryUser({}).then(res => {
        this.userInfo = res.userInfo
        this.username = res.userInfo.username
        this.nickname = res.userInfo.nickname
        this.gender = res.userInfo.gender
        console.log(res.userInfo);
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
    height: 100%;
    background: white;
    position: relative;
  }
  .head {
    width: 100%;
    height: 50px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    position: absolute;
    top: 10px;
    left: 8px;
  }
  .Pcbox {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pcbox {
    height: 80px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pc1box {
    display: flex;
    align-items: center;
  }
</style>