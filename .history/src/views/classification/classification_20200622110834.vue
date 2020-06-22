<template>
  <div>
    <div class="box">
      <div>
        <van-sidebar v-model="activeKey">
        <van-sidebar-item  v-if="category[0].mallCategoryName" />
        <van-sidebar-item  v-if="category[1].mallCategoryName" />
        <van-sidebar-item  v-if="category[2].mallCategoryName" />
        <van-sidebar-item  v-if="category[3].mallCategoryName" />
        <van-sidebar-item  v-if="category[4].mallCategoryName" />
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
      category:[],
      active:0,
      bxMallSubDto:[],
      mallCategoryName:''
    };
  },
  methods: {},
  mounted() {

    let category = localStorage.getItem('category')
    console.log(category);
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