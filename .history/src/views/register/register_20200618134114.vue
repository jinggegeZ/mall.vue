<template>
 <div class="register">
    <div class="r-box">
      <div>
        <van-cell-group>
          <van-field v-model="value" label="文本" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div>
        <van-cell-group>
          <van-field v-model="value" label="文本" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
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
  .register {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../../public/bg.png') no-repeat;
    background-size: cover;
    position: relative;
  }
  .r-box {
    
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>