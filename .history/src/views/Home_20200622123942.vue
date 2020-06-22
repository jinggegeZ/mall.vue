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
  <homepage6 :floor2='floor2'></homepage6>
  <homepage7 :floor3='floor3'></homepage7>
  <homepage8 :hotGoods='hotGoods'></homepage8>

 
 </div>
</template>

<script>
import top from '../components/top/top'
import homepage from '../components/homepage/homepage1'
import homepage2 from '../components/homepage2/homepage2'
import homepage3 from '../components/homepage3/homepage3'
import homepage4 from '../components/homepage4/homepage4'
import homepage5 from '../components/homepage5/homepage5'
import homepage6 from '../components/homepage6/homepage6'
import homepage7 from '../components/homepage7/homepage7'
import homepage8 from '../components/homepage8/homepage8'
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
     homepage6,
     homepage7,
     homepage8,
   },
   data () {
     return {
        isLoading: false,
       obj:[],
       category:[],
       advertesPicture:{},
       floor1:[],
       floor2:[],
       floor3:[],
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

        localStorage.setItem('category', JSON.stringify(this.category))
        this.advertesPicture = res.data.advertesPicture
        this.hotGoods = res.data.hotGoods
        this.floor1 = res.data.floor1
        this.floor2 = res.data.floor2
        this.floor3 = res.data.floor3
        this.recommend = res.data.recommend
        console.log(res.data);
        console.log(this.category);
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