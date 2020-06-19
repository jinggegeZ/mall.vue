<template>
  <div>
    <div class="h4-box">
      <div class="h4-font">商品推荐</div>
      <div class="h4-box1">
        <van-swipe :loop="false" :width="125" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in hotGoods" :key="index">
            <div class="h4-box2">
              <div class="h4-box5">
                <div>
                  <img :src="item.image" alt />
                </div>
              </div>
              <div>
                <div class="h4-name">{{item.name}}</div>
                <div class="h4_a">
                <span>￥{{item.mallPrice}}</span>
                <span>￥{{item.price}}</span>
                </div>
              </div>
              <div class="h4-box6">
                <div class="h4-bg">
                  <van-icon name="cart-o" />
                </div>
                <div class="chakan">查看详情</div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped>
.h4-box {
  width: 100%;
  background: white;
}
.h4-font {
  height: 40px;
  line-height: 40px;
  margin-left: 15px;
}
.h4-box1 {
  border: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.h4-box2 {
      width: 90%;
    margin-left: 5%;
}
.h4-box5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.h4-box5 img {
  width: 80px;
  height: 80px;
}
.h4-bg {
  background: yellow;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.h4-name {
font-size: 14px;
overflow:hidden;
white-space: nowrap;
text-overflow:ellipsis;
}
.h4-box6{
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 6px;
  overflow: hidden;
}
.h4_a{
  font-size: 12px;
  color: #777777;
}
.chakan{
  color: #ffffff;
  background-color: rgb(255,76,56);
  font-size: 14px;
  height: 100%;
  line-height: 30px;
  width:85px;
  text-align: center;
}
</style>