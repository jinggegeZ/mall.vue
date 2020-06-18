<template>
 <div>
  <div class="h1-box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
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
       obj:{}
     }
   },
   methods: {

   },
   mounted() {
     this.$api.recommend().then(res => {
        this.obj = res.data.slides
        console.log(res.data.slides);
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
  }
</style>