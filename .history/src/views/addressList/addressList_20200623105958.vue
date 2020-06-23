<template>
 <div class="box">
    <div class="head">地址列表</div>
    <div v-if="list.length < 0">
      <div>暂无地址请添加！</div>
      <van-address-list default-tag-text="默认" @add="onAdd" />
      <div else>
        <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      />
      </div>
    </div>
    
     <div class="icon" @click="back"><van-icon name="arrow-left" size="25" /></div>
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
      chosenAddressId: '1',
      list: [],
     }
   },
   methods: {
      back(){
       this.$router.push('my')
     },
     onAdd(){
       this.$toast('新增地址成功')
     },
     onEdit(item,index){
       this.$router.push({path:'/addressEdit',query:{id:this.chosenAddressId}})
       this.$toast('编辑地址'+ index)
     }
   },
   mounted() {
     this.$api.getAddress().then(res => {
       res.address.map((item,index) => {
         this.$set(item,'id',(index+1).toString0)
       })
       this.list = res.address
       console.log(res);
     }).catch(err => {
       console.log(err);
     })
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
    background: white;
    position: relative;
  }
  .head {
    width: 100%;
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .icon {
    position: absolute;
    top: 10px;
    left: 8px;
  }
  .van-radio {
    height: 80px;
  }
  .van-cell {
    height: 80px;
  }
  .van-cell__value {
    height: 80px;
  }
  .van-address-item {
    height: 80px;
  }  
</style>