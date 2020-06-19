<template>
 <div>
      <div class="floor">
        <div class="f-font2">热销商品</div>
      </div>
      <div v-for="(item,index) in hotgoods" :key="index">
        <div :class="[{'left':(index==0)},{'right':(index>0)}]" class="div">
          <img :src="item.image" alt="" />
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
</style>