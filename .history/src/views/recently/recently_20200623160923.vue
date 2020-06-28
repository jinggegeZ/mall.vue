<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last" @click="backmine" />最近浏览
    </div>
    <div class="collect">
      <van-swipe-cell>
        <van-card
          price="2.00"
          title="商品标题"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
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
    return {};
  },
  components: {},
  methods: {
    backmine() {
      this.$router.push("/mine");
    }
  },
  mounted() {},
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