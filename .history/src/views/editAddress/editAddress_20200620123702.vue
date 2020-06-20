<template>
 <div class="box">
  <div class="head">编辑地址</div>
  <div>
    <van-cell-group>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field v-model="tel" type="tel" label="手机号" />
    </van-cell-group>
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
        value:'',
        tel: '',
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
  }
  .head {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>