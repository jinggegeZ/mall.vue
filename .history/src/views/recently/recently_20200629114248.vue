<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last" @click="backmine" />最近浏览
    </div>
    <div class="collect" v-for="(item,index) in arr" :key="index">
      <van-swipe-cell>
        <van-card
          :price="item.mallPrice"
          :title="item.name"
          class="goods-card"
          :thumb="item.image"
        />
        <van-icon name="arrow-left" class="hua" />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[]
    };
  },
  components: {},
  methods: {
    backmine() {
      this.$router.push("/my");
    }
  },
  mounted() {
    this.arr = JSON.parse(localStorage.getItem('views'))
    console.log(this.arr);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.goods-card {
  margin: 0;
  background-color: white;
}
.delete-button {
  height: 100%;
}
.collect{
  position: relative;
}
.hua{
  position: absolute;
  right: 20px;
  top: 45px;
}
</style>