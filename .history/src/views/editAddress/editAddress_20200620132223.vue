<template>
 <div class="box">
  <div class="head">编辑地址</div>
  <div>
    <van-cell-group>
      <van-field v-model="username" error required label="用户名" placeholder="请输入用户名" />
      <van-field v-model="phone" error required label="手机号" placeholder="收件人手机号" error-message="手机号格式错误" />
      <van-field v-model="region" error required label="地区" placeholder="选择省/市/区" error-message="请选择省市区" />
      <van-field v-model="text" label="详细地址" placeholder="街道门派，楼层房间号等信息" />
      <van-cell center title="设置默认地址">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
    </van-cell-group>
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
  <div class="icon" @click="return"><van-icon name="arrow-left" size="25" /></div>
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
     return(){
       this.$router.push('my')
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