<template>
 <div>
    <div>
      <div class="floor">
        <div class="f-font">2F</div>
        <div class="f-font2">新鲜食品</div>
      </div>
       
    </div>
    </div>
</template>

<script>
 export default {
   name: '',
   props: {
      floor2:{
        type:Array,
        default:() => {}
      }
   },
   components: {

   },
   data () {
     return {
       id :'',
     }
   },
   methods: {
     details(index){
       this.$router.push({path:'/details',query:{id: item.goodsId}})
       this.$utils.details(item)
     },
     
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
.floor{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.f-font2 {
  color: red;
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
</style>