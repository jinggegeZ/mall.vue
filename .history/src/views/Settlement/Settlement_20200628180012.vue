<template>
 <div class="box">
    
    <div class="head">
        <div class="headfont">Order settlement</div>
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
    .box {
        width: 100%;
        display: flex;
        justify-content: center;
        background: white;
    }
    .head {
        width: 100%;
        height: 49px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #dddddd;
        position: relative;
    }
    .headfont {
        font-size: 16px;
        font-weight: 700;
    }
    .icon {
        width: 20px;
        height: 20px;
        position: relative;
        top:10px;
        left: 10px;
        z-index: 10;
    }
</style>