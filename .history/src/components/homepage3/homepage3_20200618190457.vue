<template>
 <div>
  <div class="h3-box"><img src="this." alt=""></div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     advertesPicture:{
       type: Object,
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
  .h3-box {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .h3-box img{
    width: 90%;
    height: 90%;
  }
</style>