<template>
 <div class="box">
    <div class="upbox">
        <van-uploader v-model="fileList" multiple />
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
    .box {
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        justify-content: center;
    }
    .upbox {
        width: 95%;
        height: 90%;
    }
</style>