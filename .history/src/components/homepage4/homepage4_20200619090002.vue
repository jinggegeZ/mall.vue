<template>
 <div>
    <div class="h4-box">
      <div class="h4-font">商品推荐</div>
      <div>
        <div></div>
        <div></div>
        <div></div>
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
    background: white;
  }
</style>