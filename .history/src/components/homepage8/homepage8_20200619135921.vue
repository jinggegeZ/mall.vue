<template>
 <div>
      <div class="floor">
        <div class="f-font2">热销商品</div>
      </div>
      <div v-for="(item,index) in hotGoods" :key="index" >
        <div :class="[{'left':(index==0)},{'right':(index>0)}]" class="div">
              <div><img :src="item.image" alt="" /></div>
              
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
.ff-box {
  width: 100%;
  background: white;
}
.left {
  float: left;
  width: 50%;
  background: white;  
}
.right {
  float: right;
  background: white;
  width: 50%;
}
img {
  width: 80%;
}
.div {
 display: flex;
}

</style>