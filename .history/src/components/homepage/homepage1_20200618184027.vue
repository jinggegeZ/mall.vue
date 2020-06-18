<template>
 <div>
  <div class="h1-box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in obj" :key="index"><img :src="item.image" alt=""></van-swipe-item>
      </van-swipe>
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
       obj:[],
       category:[],
     }
   },
   methods: {

   },
   mounted() {
     this.$api.recommend().then(res => {
        this.obj = res.data.slides
        this.category = res.data.category
        console.log(res.data);
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

<style scoped lang='scss'>
  .h1-box {
    width: 100%;
    box-shadow: 0 1px 2px 0 #ddd;
    margin-top: 5px;
  }
  .van-swipe-item img {
    width: 100%;
    height: 165px;
  }
</style>