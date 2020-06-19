<template>
  <div>
    <div class="box">
      <div>
        <van-sidebar v-model="activeKey">
        <van-sidebar-item  :title="category[0].mallCategoryName" />
        <van-sidebar-item  :title="category[1].mallCategoryName" />
        <van-sidebar-item  :title="category[2].mallCategoryName" />
        <van-sidebar-item  :title="category[3].mallCategoryName" />
        <van-sidebar-item  :title="category[4].mallCategoryName" />
        </van-sidebar>
      </div>
      <div class="r-box">
        <van-tabs v-model="active" v-for="(item,index) in bxMallSubDto" :key="index">
          <van-tab :title="item.mallSubName">内容 1</van-tab>
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
      bxMallSubDto:[]
    };
  },
  methods: {},
  mounted() {
    this.$api.recommend().then(res => {
      this.category =res.data.category
      this.bxMallSubDto = res.data.category.bxMallSubDto
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
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