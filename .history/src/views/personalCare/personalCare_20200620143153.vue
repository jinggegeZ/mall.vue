<template>
 <div class="box">
    <div class="head">个人资料</div>
    <div class="icon" @click="back"><van-icon name="arrow-left" size="20" /></div>
    <van-cell-group>
    <van-field v-model="value" label="Github" />
    <van-field
    v-model="value1"
    label="文本"
    right-icon="warning-o"
    placeholder="显示图标"
  />
    </van-cell-group>
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
     }
   },
   methods: {
        back(){
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
    width: 100%;
    height: 50px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    position: absolute;
    top: 10px;
    left: 8px;
  }
</style>