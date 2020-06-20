<template>
 <div class="box">
    <div class="head">个人资料</div>
    <div class="icon" @click="back"><van-icon name="arrow-left" size="20" /></div>
    <div> <van-field v-model="value" label="Github" placeholder="githubName" /></div>
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
     }
   },
   methods: {
        back(){
       this.$router.push('my')
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
    border-bottom: 1px solid #999;
  }
  .icon {
    position: absolute;
    top: 10px;
    left: 8px;
  }
</style>