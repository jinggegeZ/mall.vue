<template>
 <div>
    <div class="box">
        <div><router-view></router-view></div>
        <div class="foot">
          <van-tabbar v-model="active">
          <van-tabbar-item icon="wap-home-o">商城</van-tabbar-item>
          <van-tabbar-item icon="wap-nav" dot>分类</van-tabbar-item>
          <van-tabbar-item icon="friends-o" badge="5">购物车</van-tabbar-item>
          <van-tabbar-item icon="setting-o" badge="20">我的</van-tabbar-item>
          </van-tabbar>
         
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
 .foot {
   display: flex;
 }
</style>