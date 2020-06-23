<template>
  <div>
    <div class="top" @click="comeback">
      <van-icon name="diamond" size="25" />
    </div>
    <div class="nav">
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template v-slot:index>第{{ index }}页</template>
      </van-image-preview>
    </div>
    <div class="bbo">1213</div>
    <div>¥8元</div>
    <div class="bb1">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {
  },
  data() {
    return {
      show: false,
      index: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods: {
    comeback() {
      this.$router.push("/");
    },
    onChange(index) {
      this.index = index;
    },
  },
  mounted() {},
  watch: {},
  computed: {
  }
};
</script>

<style scoped lang='scss'>
.top {
  height: 30px;
  line-height: 30px;
  margin-left: 15px;
}
.nav {
  height: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bbo {
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.bb1 {
  height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>