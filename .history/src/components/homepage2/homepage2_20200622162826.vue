<template>
 <div>
  <div class="h2-box">
    <div class="h21-box" v-for="(item,index) in category" :key="index" @click="classfaction">
      <div>
        <div><img :src="item.image" alt=""></div>
        <div class="h2-font">{{item.mallCategoryName}}</div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
     category:{
       type:Array,
       default:() => []
     }
   },
   components: {

   },
   data () {
     return {
       obj:{},
       index:''
     }
   },
   methods: {
     classfaction(index){
       this.$router.push({name:"classfaction"}, query: {index: this.index}).then(res => {
         console.log(res);
       }).catch(err => {
         console.log(err);
       })
     }
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
  .h2-box {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }
  .h21-box {
    width: 95%;
    height: 90%;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .h21-box img {
    width: 50px;
    height: 50px;
  }
  .h2-font{
    font-size: 14px;
  }
</style>