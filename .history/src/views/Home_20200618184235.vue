<template>
 <div>
  <top></top>
  <homepage></homepage>
  <homepage2 :category></homepage2>
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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>