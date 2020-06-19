<template>
 <div>
    <div>
      <div class="floor">
        <div class="f-font">1F</div>
        <div class="f-font2">休闲食品</div>
      </div>
    </div>
    <div class="fl-box">
        <div class="fl-box1">
          <div class="img"></div>
        </div>
    </div>
    </div>
</template>

<script>
 export default {
   name: '',
   props: {
      floor:{
        type:Array,
        default:() => {}
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
.fl-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.fl-box1 {
  width: 95%;
  
  background: white;
}
.img {
  
}
</style>