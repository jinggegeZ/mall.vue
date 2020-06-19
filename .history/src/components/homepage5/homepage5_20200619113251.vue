<template>
 <div>
    <div>
      <div class="floor">
        <div class="f-font">1F</div>
        <div class="f-font2">休闲食品</div>
      </div>
      <div class="f-b">
        <div class="f-c">
          <div class="f-d"></div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
 export default {
   name: '',
   props: {
      floor1:{
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
.f-b {
  width: 100%;
  display: flex;
  justify-content: center;
}
.f-c {
  width: 95%;
  height: 500px;
  background: white;
}
</style>