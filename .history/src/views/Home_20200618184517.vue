<template>
 <div>
  <top></top>
  <homepage></homepage>
  <homepage2 :category='category'></homepage2>
 </div>
</template>

<script>
import top from '../components/top/top'
import homepage from '../components/homepage/homepage1'
import homepage2 from '../components/homepage2/homepage2'
 export default {
   name: '',
   props: {
   },
   components: {
     top,
     homepage,
     homepage2,
   },
   data () {
     return {

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