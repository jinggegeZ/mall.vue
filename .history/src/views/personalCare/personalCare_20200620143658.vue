<template>
 <div class="box">
    <div class="head">个人资料</div>
    <div class="icon" @click="back"><van-icon name="arrow-left" size="20" /></div>
    <van-cell-group>
    <div><van-field v-model="value" label="Github" /></div>
    </van-cell-group>
    <div>
      <div>头像</div>
      <div><img :src="userInfo.image" alt=""></div>
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
       value:'',
       userInfo:{},
     }
   },
   methods: {
        back(){
       this.$router.push('my')
     }
   },
   mounted() {
      this.$api.queryUser({}).then(res => {
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
</style>