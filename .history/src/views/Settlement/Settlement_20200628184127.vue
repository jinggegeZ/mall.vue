<template>
<div>
     <div class="box">
        <div class="box1">
            <div class="head">
                <div class="icon" @click="back"><van-icon name="arrow-left" size="20" /></div>
                <div class="headfont">Order settlement</div>
            </div>
            <div class="nav">
                <div class="nav1">
                    <div class="nav1img"><van-icon name="location-o" size="30" /></div>
                    <div class="nav1box">
                        <div>收货人:</div>
                        <div class="nav1font">收货地址：</div>
                    </div>
                    <div class="nav1phone">13582653116</div>
                    <div @click="addresslist" class="nav1boxfoot"><van-icon name="arrow" size="20" /></div>
                </div>
            </div>
            <div class="img"><img src="../../..//public/caitiao.jpg" alt="" height="8px"></div>
            <div class="baby">
                <div class="baby1">123</div>
                <div></div>
                <div></div>
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
       },
       addresslist(){
           this.$router.push('/addressList')
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
        border-bottom: 1px ;
    }
    .nav1 {
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .nav1img {
        margin-left: 5px;
        margin-right: 5px;
    }
    .nav1box {
        width: 200px;
        margin-right: 5px;
    }
    .nav1phone {
        height: 50px;
    }
    .nav1font {
        font-size: 12px;
        margin-top: 15px;
    }
    .nav1boxfoot {
        height: 5px;
    }
   .img {
       height: 8px;
   }
   .baby {
       width: 100%;
       height: 100px;
       background: white;
       display: flex;
       align-items: center;
   }
   .baby1 {
       width: 80px;
       height: 80px;
       display: flex;
       align-items: center;
       justify-content: center;
       border: 1px solid #dddddd;
   }
</style>