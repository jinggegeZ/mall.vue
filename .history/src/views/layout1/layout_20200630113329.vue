<template>
 <div>
    <div class="box">
        <div><router-view></router-view></div>
        <div class="foot">
          <van-tabbar v-model="active" active-color="red">
          <van-tabbar-item icon="wap-home-o"  @click="home">商城</van-tabbar-item>
          <van-tabbar-item icon="wap-nav" @click="classification" dot>分类</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart" badge="5" @click="carts">购物车</van-tabbar-item>
          <van-tabbar-item icon="manager" badge="20" @click="my">我的</van-tabbar-item>
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
       active:0,
     }
   },
   methods: {
     home(){
       this.$router.push('/')
     },
     classification(){
       this.$router.push('classification')
     },
     carts(){
       this.$router.push('carts')
     },
     my(){
       this.$router.push('my')
     }
   },
   mounted() {
     this.$api.Card().then(res => {
       
     })
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