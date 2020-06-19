<template>
 <div>
    <div class="box">
        <div><router-view></router-view></div>
        <div class="foot">
          <van-tabbar v-model="active">
          <van-tabbar-item icon="home-o">标签</van-tabbar-item>
          <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
          <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
          <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
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