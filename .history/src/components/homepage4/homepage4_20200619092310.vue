<template>
 <div>
    <div class="h4-box">
      <div class="h4-font">商品推荐</div>
      <div class="h4-box1" >
        <div class="h4-box2" v-for="(item,index) in hotGoods" :key="index">
          <div class="h4-box5">
            <div><img :src="item.image" alt=""></div>
          </div>
          <div>
            <div class="h4-name">{{item.name}}</div>
            <div>{{item.price}}</div>
          </div>
          <div class="h4-box6">
              <div class="h4-bg"><van-icon name="cart-o" /></div>
              <div>查看详情</div>
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     hotGoods:{
       type:Array,
       default: () => {}
     }
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
  .h4-box {
    width: 100%;
    background: white;
    display: flex;
  }
  .h4-font {
    height: 40px;
    line-height: 40px;
    margin-left: 15px;
  }
  .h4-box1 {
    width: 33%;
    border: 1px solid #dddddd;
    display: flex;
  }
  .h4-box5 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .h4-box5 img {
    width: 80px;
    height: 80px;
  }
  .h4-bg {
    background: yellow;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .h4-name {
    width: 33%;
    height: 20px;
    
  }
</style>