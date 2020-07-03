<template>
 <div>
    <div class="box">
        <div><router-view></router-view></div>
        <div class="foot">
          <van-tabbar v-model="active" active-color="red">
          <van-tabbar-item icon="wap-home-o"  @click="home">商城</van-tabbar-item>
          <van-tabbar-item icon="wap-nav" @click="classification" >分类</van-tabbar-item>
          <van-tabbar-item icon="shopping-cart" :badge="cartNum" @click="carts">购物车</van-tabbar-item>
          <van-tabbar-item icon="manager"  @click="my">我的</van-tabbar-item>
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
       this.$store.commit("setCartNum", res.shopList.length);
     }).catch(err => {})
   },
   watch: {
     "$route.path": {
      handler(val) {
        // console.log(val)
        if (val === "/") {
          this.active = 0;
        }
        if (val === "/classiFication") {
          this.active = 1;
        }
        if (val === "/shoppingCart") {
          this.active = 2;
        }
        if (val === "/myself") {
          this.active = 3;
        }
      },
      immediate: true
    },
   },
   computed: {
    cartNum(){
      return this.$store.state.cartNum
    }
   }
 }
</script>

<style scoped>
 .foot {
   display: flex;
 }
</style>