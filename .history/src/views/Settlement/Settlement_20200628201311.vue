<template>
<div>
     <div class="box">
        <div class="box1">
            <div class="head">
                <div class="icon" @click="back"><van-icon name="arrow-left" size="20" /></div>
                <div class="headfont">Order settlement</div>
            </div>
            <div class="nav">
                <div class="nav1" v-if="isDefault === true">
                    <div class="nav1img"><van-icon name="location-o" size="30" /></div>
                    <div class="nav1box">
                        <div>收货人:{{name}}</div>
                        <div class="nav1font">收货地址：{{address}}</div>
                    </div>
                    <div class="nav1phone">13582653116</div>
                    <div @click="addresslist" class="nav1boxfoot"><van-icon name="arrow" size="20" /></div>
                </div>
            </div>
            <div class="img"><img src="../../..//public/caitiao.jpg" alt="" height="8px" width="100%"></div>
            <div class="baby">
                <div class="baby1">123</div>
                <div class="baby2">
                    <div>159842445</div>
                    <div class="number">￥15.26</div>
                </div>
                <div>{{value}}</div>
            </div>
        </div>
        <div class="foot">
            <div>合计：
            <span class="footfont">159元</span>
            </div>
            <div class="placeOrder">提交订单</div>
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
         value:'x1',
         isDefault:'',
         address:[],
         
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
      this.$api.getAddress().then(res => {
          this.address = res.address
          this.isDefault = res.address.isDefault
          console.log(this.isDefault);
      }).catch(err => {
          console.log(err);
      })
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
       height: 130px;
       background: white;
       display: flex;
       align-items: center;
   }
   .baby1 {
       width: 100px;
       height: 100px;
       display: flex;
       align-items: center;
       justify-content: center;
       border: 1px solid #dddddd;
       margin-left: 20px;
       margin-right: 15px;
   }
   .baby2 {
       width: 200px;
   }
   .number {
       margin-top: 15px;
   }
   .foot {
       width: 100%;
       height: 50px;
       position: fixed;
       bottom: 0;
       z-index: 10;
       display: flex;
       justify-content: flex-end;
       align-items: center;
   }
   .placeOrder {
       height: 50px;
       width: 100px;
       color: white;
       background: red;
       display: flex;
       justify-content: center;
       align-items: center;
       margin-left: 5px;
   }
   .footfont {
       color: red;
       font-size: 14px;
   }
</style>