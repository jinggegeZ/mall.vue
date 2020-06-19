<template>
 <div>
    <div class="box">
        <div><router-view></router-view></div>
        <div class="foot"></div>
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
 .foot {
   display: flex;
 }
</style>