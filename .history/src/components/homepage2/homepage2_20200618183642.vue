<template>
 <div>
  <div class="h2-box">
    <div class="h21-box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
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
    height: 100px;
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