<template>
 <div class="box">
    <div class="box1">
        <div class="head">
        <div class="icon" @click="back"><van-icon name="arrow-left" size="20" /></div>
        <div class="headfont">Order settlement</div>
    </div>
    <div class="nav">
        <div class="nav1">
            <div><van-icon name="location-o" size="30" /></div>
            <div>
                <div>收货人: {{}}</div>
                <div class="nav1font">收货地址：{{}}</div>
            </div>
            <div>3</div>
            <div>4</div>
        </div>
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
       back(){
           this.$router.go(-1)
       }
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
    .box1 {
        width: 100%;
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
        position: absolute;
        left: 5px;
    }
    .nav {
        width: 100%;
        height: 100px;
    }
    .nav1 {
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .nav1font {
        font-size: 12px;
    }
</style>