<template>
 <div>
      <div class="floor">
        <div class="f-font2">热销商品</div>
      </div>
      <div v-for="(item,index) in hotGoods" :key="index">
        <div class="hotgoods">
        </div>
      </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     hotGoods:{
       type: Array,
       default:() =>{}
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

<style scoped lang='scss'>
  .floor{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font2 {
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
img {
  width: 100%;
}
.div {
 display: flex;
}
.hotgoods {
  display: flex;
  justify-content: center;
}
</style>