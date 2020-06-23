<template>
  <div>
    <div class="top" @click="comeback">
      <van-icon name="diamond" size="25" />
    </div>
    <div>
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template v-slot:index>第{{ index }}页</template>
      </van-image-preview>
    </div>
    <div>123</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 320px;
  text-align: center;
  background-color: #39a9ed;
}
</style>