<template>
  <div>
    <div class="box">
      <van-sidebar>
        <van-sidebar-item
          v-for="(item,index) in category"
          :key="index"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
      <div class="r-box">
        <van-tabs v-model="active" v-if="bxMallSubDto.length > 0">
          <van-tab v-for="(item, index) in bxMallSubDto" :key="index" :title="item.mallSubName">
            <template>
            <div class="r-box1">
              <div>123</div>
              <div>456</div>
            </div>
            </template>
          </van-tab>
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
      activeKey: 0,
      arr: "",
      active: 0,
      bxMallSubDto: [],
      mallCategoryName: "",
      category: []
    };
  },
  methods: {},
  mounted() {
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto

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
.r-box1 {
  height: 100%;
  
  justify-content: center;
  
  background: white;
  align-items: center;
} 
</style>