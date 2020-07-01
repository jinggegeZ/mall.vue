<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last" @click="backEvaluate" />评价中心
    </div>
    <div class="oldeva1">
      <div class="oldeva2">
        <div class="oldeva">
          <van-rate v-model="value" readonly />
          <span class="oldeva_a">2012-12-09</span>
        </div>
        <div class="oldeva_b">
        你的你的今晚记得我的品位激动我饭都飞牛网搜if覅哦我if
        奥成佛我玩飞车皮外伤救护车覅偶陪我shown不服从武汉市内
        </div>
        <div class="oldeva_c">
            <div class="oldeva_d"><img src="" alt=""></div>
            <div class="oldeva_e">商品名称呵呵哈哈哈</div>
            <van-button round type="warning" icon="shopping-cart" size="mini" color="#1989fa"></van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    };
  },
  components: {},
  methods: {
    backEvaluate() {
      this.$router.push("/evaluate");
    }
  },
  mounted() {
    this.list = this.$route.query
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.oldeva1 {
  display: flex;
  justify-content: center;
}
.oldeva2 {
  width: 94%;
}
.oldeva {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.oldeva_a {
  font-size: 14px;
}
.oldeva_b{
    margin-top: 20px;
    line-height: 24px;
    font-size: 14px;
}
.oldeva_c{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
}
.oldeva_d{
    width: 60px;
    height: 60px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
}
.oldeva_d img{
    width: 100%;
}
.oldeva_e{
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>