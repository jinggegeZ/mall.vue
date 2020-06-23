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
      <div>运费：0</div>
      <div>剩余：10000</div>
      <div>收藏</div>
    </div>
    <div class="bb2">
      <div class="bb3">
        <div class="img1">
          <van-icon name="thumb-circle" color="red" size="25" />
        </div>
        <div>有赞的店</div>
      </div>
      <div class="bb4">123</div>
      <div class="bb3">
        <div>进入店铺</div>
        <div class="img2">
          <van-icon name="shop-collect" color="red" size="25" />
        </div>
      </div>
    </div>
    <div class="">
      <div></div>
      <div></div>
    </div>
    <div class="foot">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-button color="orange" type="warning" text="加入购物车" />
        <van-goods-action-button color="red" type="danger" text="立即购买" />
      </van-goods-action>
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
      show: false,
      index: 0,
      images: [
      ],
      ids:'',
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
  mounted() {
    this.ids = this.$route.query.id
    this.$api.one({id:this.ids})
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  watch: {},
  computed: {}
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
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}
.bb2 {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid #999;
}
.bb3 {
  display: flex;
  align-items: center;
}
.bb4 {
  color: white;
}
.img1 {
  margin-right: 5px;
}
.img2 {
  margin-left: 5px;
}

</style>