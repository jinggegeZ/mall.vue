<template>
  <div class="box">
    <div class="top" @click="comeback">
      <van-icon name="diamond" size="25" />
    </div>
    <div class="nav">
    <img :src="obj.image" alt="" width="80%" @click="cka">
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template v-slot:index>第{{ index }}页</template>
      </van-image-preview>
    </div>
    <div class="bbo">{{obj.name}}</div>
    <div class="font">¥{{obj.present_price}}元</div>
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
    <div class="deta_f">
      <van-tabs v-model="active">
        <van-tab title="商品详情">

            <div class="deta_g">
              <div v-html="obj.detail"></div>
            </div>
        </van-tab>
        <van-tab title="商品评论">
            <div class="deta_pin">
                <div class="deta_h">
                <div class="deta_i">
                    <div class="deta_j">
                        <img src="" alt="">
                    </div>
                    <div class="deta_K">
                        <div class="deta_l">
                            <span>用户名</span>
                            <span class="deta_m">2002-15-453</span>
                        </div>
                        <div><van-rate v-model="value" readonly /></div>
                        <div>评价内容。。。。</div>
                    </div>
                </div>
            </div>
            <div class="deta_h">
                <div class="deta_i">
                    <div class="deta_j">
                        <img src="" alt="">
                    </div>
                    <div class="deta_K">
                        <div class="deta_l">
                            <span>用户名</span>
                            <span class="deta_m">2002-15-453</span>
                        </div>
                        <div><van-rate  readonly /></div>
                        <div>评价内容。。。。</div>
                    </div>
                </div>
            </div>
            </div>
        </van-tab>
      </van-tabs>
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
      active:'1',
      obj:{},
      value:'2'
    };
  },
  methods: {
    comeback() {
      this.$router.push("/");
    },
    onChange(index) {
      this.index = index;
    },
    cka(){
      this.show = true
    }
   
  },
  mounted() {
    this.ids = this.$route.query.id
    console.log(this.ids);
    this.$api.one(this.ids)
    .then(res => {
      this.obj = res.goods.goodsOne
      this.images.push(this.obj.image)
      this.images.push(this.obj.image_path)
      console.log(this.images);
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
.box {
  background:white;
}

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
  justify-content: space-between;
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
.font{
  color: red;
}
.deta_f {
  margin-top: 30px;
    border-top: 1px solid #eeeeee;
}
.deta_h{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 10px;
}
.deta_i{
    display: flex;
    justify-content: space-between;
    width: 94%;
}
.deta_j{
    height: 42px;
    width: 42px;
    border: 1px solid #eeeeee;
    border-radius: 50px;
    overflow: hidden;
}
.deta_j img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.deta_K{
    width: 84%;
    font-size: 14px;
}
.deta_K div{
    line-height: 26px;
}
.deta_l{
    display: flex;
    justify-content: space-between;
}
.deta_m{
    color: #666666;
}
.deta_pin{
    margin-bottom: 100px;
}
</style>