<template>
 <div>
    <div class="box">
      <div class="box1">
        <div class="header">会员中心</div>
        <div class="mybox">
          <div><img :src="userInfo.avatar" alt="" width="100px" height="100px"></div>
          <div>{{userInfo.nickname}}</div>
          <div></div>
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
</style>