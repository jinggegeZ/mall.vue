<template>
 <div>
    <div class="top">
        <div class="t-head" @click="postion">
            <div><van-icon name="location-o" /></div>
            <div>{{city}}</div>
        </div>
        <div class="ipt">
            <van-search v-model="value" show-action placeholder="请输入搜索关键词">
                <template #action>
                    <div @click="gosearched">搜索</div>
                </template>
            </van-search>
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
         city:'',
         obj:{},
         value:''
     }  
   },
   methods: {
       postion(){
           this.$router.push('/city')
       },
       gosearched(){
           this.$router.push({
               path:"/searched",
               query:{'value': this.value}
           })
       }
   },
   mounted() {
    let _this = this;
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB"
      });
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);
      function onComplete(data) {
        // data是具体的定位信息
        _this.city = data.addressComponent.city;
        _this.$store.commit('setCitya',data.addressComponent.city)
        console.log(data);
      }
      function onError(data) {
        // 定位出错
      }
    });
    
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped >
    .top {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        z-index: 99;
        width: 100%;
        background: #fff;
    }
    .t-head {
        display: flex;
        align-items: center;
    }
    .ipt {
        width: 300px;
        height: 50px;
        display: flex;
        justify-content: space-around;
        
    }
    
</style>