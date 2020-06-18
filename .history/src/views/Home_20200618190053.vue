<template>
 <div>
  <top></top>
  <homepage :obj='obj'></homepage>
  <homepage2 :category='category'></homepage2>
  <homepage3 :floor1='floor1'></homepage3>
 </div>
</template>

<script>
import top from '../components/top/top'
import homepage from '../components/homepage/homepage1'
import homepage2 from '../components/homepage2/homepage2'
import homepage3 from '../components/homepage3/homepage3'
 export default {
   name: '',
   props: {
   },
   components: {
     top,
     homepage,
     homepage2,
     homepage3,
   },
   data () {
     return {
       obj:[],
       category:[],
       advertesPicture:'',
       floor1:[]
     }
   },
   methods: {

   },
   mounted() {
     this.$api.recommend().then(res => {
        this.obj = res.data.slides
        this.category = res.data.category
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