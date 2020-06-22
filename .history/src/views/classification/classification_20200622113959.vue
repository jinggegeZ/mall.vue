<template>
  <div>
    <div class="box">
      <div v-for="(item,index) in arr" :key="index">
        <van-sidebar>
        <div><van-sidebar-item />{{item.mallCategoryName}}</div>
        </van-sidebar>
      </div>
      <div class="r-box">
        <van-tabs v-model="active">
        <van-tab :title="bxMallSubDto.mallCategoryName">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeKey:0,
      active:0,
      bxMallSubDto:[],
      mallCategoryName:''
    };
  },
  methods: {},
  mounted() {
    let arr = localStorage.getItem('category')
    console.log(arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
 .box {
   display: flex;
 }
 .r-box {
   width: 80%;
 }
</style>