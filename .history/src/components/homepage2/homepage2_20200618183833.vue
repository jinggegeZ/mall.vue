<template>
 <div>
  <div class="h2-box">
    <div class="h21-box">
      <div>1</div>
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
       obj:{},
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
  .h2-box {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }
  .h21-box {
    width: 95%;
    height: 90%;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>