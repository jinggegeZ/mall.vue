<template>
 <div class="box">
  <div class="head">编辑地址</div>
  <div>
      <van-address-edit
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
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
import area from '../../../area'
 export default {
   name: 'addressEdit',
   props: {
   },
   components: {

   },
   data () {
     return {
        aera:area
     }
   },
   methods: {
     back(){
       this.$router.push('/addressList')
     },
     onSave(){
       this.content = this.content;
       this.$api
       .address({
         name:content.name,
         tel:content.tel,
         address:content.address,
         isDefault:content.isDefault,
         province:content.province,
         city:content.city,
         county:content.county,
         addressDetail:content.addressDetail,
         areaCode:content.areaCode
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      this.$toast('保存')
     },
     onDelete(){
       this.$toast('删除')
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