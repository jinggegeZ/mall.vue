<template>
 <div>
  <top></top>
  <homepage :obj='obj'></homepage>
  <homepage2 :category='category'></homepage2>
  <homepage3 :advertesPicture='advertesPicture'></homepage3>
 </div>
</template>

<script>
import top from '../components/top/top'
import homepage from '../components/homepage/homepage1'
import homepage2 from '../components/homepage2/homepage2'
import homepage3 from '../components/homepage3/homepage3'
import homepage4 from '../components/homepage4/homepage4'
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
   },
   data () {
     return {
       obj:[],
       category:[],
       advertesPicture:{},
       floor1:[]
     }
   },
   methods: {

   },
   mounted() {
     this.$api.recommend().then(res => {
        this.obj = res.data.slides
        this.category = res.data.category
        this.advertesPicture = res.data.advertesPicture
        this.floor1 = res.data.floor1
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