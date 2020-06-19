<template>
 <div>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  </van-pull-refresh>
  <top></top>
  <homepage :obj='obj'></homepage>
  <homepage2 :category='category'></homepage2>
  <homepage3 :advertesPicture='advertesPicture'></homepage3>
  <homepage4 :recommend='recommend'></homepage4>
  <homepage5 :floor1='floor1'></homepage5>
 
 </div>
</template>

<script>
import top from '../components/top/top'
import homepage from '../components/homepage/homepage1'
import homepage2 from '../components/homepage2/homepage2'
import homepage3 from '../components/homepage3/homepage3'
import homepage4 from '../components/homepage4/homepage4'
import homepage5 from '../components/homepage5/homepage5'
 export default {
   name: '',
   props: {
   },
   components: {
     top,
     homepage,
     homepage2,
     homepage3,
     homepage4,
     homepage5,
   },
   data () {
     return {
        isLoading: false,
       obj:[],
       category:[],
       advertesPicture:{},
       floor1:[],
       hotGoods:[],
       recommend:[]
     }
   },
   methods: {
      onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
   },
   mounted() {
     this.$api.recommend().then(res => {
        this.obj = res.data.slides
        this.category = res.data.category
        this.advertesPicture = res.data.advertesPicture
        this.hotGoods = res.data.hotGoods
        this.floor1 = res.data.floor1
        this.recommend = res.data.recommend
        console.log(res.data);
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

</style>