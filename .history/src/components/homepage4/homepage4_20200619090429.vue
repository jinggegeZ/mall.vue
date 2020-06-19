<template>
 <div>
    <div class="h4-box">
      <div class="h4-font">商品推荐</div>
      <div class="h4-box1">
        <div class="h4-box2">
          <div></div>
          <div></div>
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
</style>