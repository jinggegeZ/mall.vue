<template>
 <div class="box">
  <div class="head">编辑地址</div>
  <div>
    <van-cell-group>
      <van-field v-model="username" error required label="用户名" placeholder="请输入用户名" />
      <van-field v-model="phone" error required label="手机号" placeholder="收件人手机号" error-message="手机号格式错误" />
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    </van-cell-group>
  </div>
 </div>
</template>

<script>
import province_list from '../../../area'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
        username:'',
        phone: '',
        area:area,
        province_list:{},
        value:'',
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