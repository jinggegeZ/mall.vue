<template>
 <div class="box">
  <div class="head">编辑地址</div>
  <div>
    
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="default" native-type="submit">
       删除
      </van-button>
    </div>
  </div>
  <div class="icon" @click="back"><van-icon name="arrow-left" size="25" /></div>
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
        region:'',
        text:'',
        province_list:{},
        value:'',
        checked: false,
     }
   },
   methods: {
     back(){
       this.$router.push('/addressList')
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
  .box {
    width: 100%;
    height: 100%;
    background: white;
    position: relative;
  }
  .head {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    position: absolute;
    top: 5px;
    left: 5px;
  }
</style>