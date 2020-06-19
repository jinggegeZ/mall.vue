<template>
<div>
  <div v-for="(item,index) in floor" :key="index">
    <div :class="[]"></div>
  </div>
</div>
</template>

<script>
 export default {
   name: '',
   props: {
      floor1:{
        type:Array,
        default:() => {}
      }
   },
   components: {

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

<style scoped>

</style>