<template>
  <div class="other_bei">
    <div class="locat"><van-icon name="arrow-left" color="#1989fa" class="back_last"  @click="backmine" />全部订单</div>
    <van-tabs v-model="active" sticky :swipe-threshold='5'>
    <van-tab title="全部订单">
    <div class="order">
      <div class="order_a">
        <div class="order_b" v-for="(item,index) in list" :key="index">
          <div class="order_c">
            <div>订单编号:{{item.order_id}}</div>
            <div class="order_d">交易完成</div>
          </div>
          <div class="order_e" v-for="(item1,index1) in item.order_list" :key="index1">
            <div class="order_f">
              <div class="order_g">
                <img :src="item1.image_path" alt="" width="80">
              </div>
              <div class="order_h">{{item1.name}}</div>
              <div class="order_i">
                <div>￥{{item1.mallPrice}}</div>
                <div class="order_j">x{{item1.count}}</div>
              </div>
            </div>
          </div>
          <div class="order_k">
            <div>创建时间：{{item.add_time}}</div>
            <div>收货地址:{{item.address}}</div>
            <div>共<span>3</span>件商品 <span>合计￥{{item.mallPrice}}元</span></div>
          </div>
        </div>
      </div>
    </div>
    </van-tab>
    <van-tab title="代发货">
        <div class="box">暂时没有内容哦，请稍后再来！</div>
    </van-tab>
    <van-tab title="待支付">
        <div class="box">暂时没有内容哦，请稍后再来！</div>
    </van-tab>
    <van-tab title="已发货">
        <div class="box">暂时没有内容哦，请稍后再来！</div>
    </van-tab>
    <van-tab title="已完成">
    <div class="order">
      <div class="order_a">
        <div class="order_b" v-for="(item,index) in list" :key="index">
          <div class="order_c">
            <div>订单编号:{{item.order_id}}</div>
            <div class="order_d">完成</div>
          </div>
          <div class="order_e" v-for="(item1,index1) in item.order_list" :key="index1">
            <div class="order_f">
              <div class="order_g">
                <img :src="item1.image_path" alt="" width="80">
              </div>
              <div class="order_h">{{item1.name}}</div>
              <div class="order_i">
                <div>￥{{item1.mallPrice}}</div>
                <div class="order_j">x{{item1.count}}</div>
              </div>
            </div>
          </div>
          <div class="order_k">
            <div>创建时间：{{item.add_time}}</div>
            <div>收货地址:{{item.address}}</div>
            <div>共<span>3</span>件商品 <span>合计￥{{item.mallPrice}}元</span></div>
          </div>
        </div>
      </div>
    </div></van-tab>
    </van-tabs>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      arr:[],
      active:5,
    };
  },
  components: {},
  methods: {
    backmine(){
      this.$router.push('my')
    },
    byshop(){
      this.$router.push('/')
    },
  },
  mounted() {
    this.$api.getMyOrder()
    .then(res => {
      this.list = res.list
      this.arr = res.list.order_list
      console.log(this.list);
    }).catch(err => {})
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.other_bei {
  background-color: rgb(242, 242, 242);
}
.order {
  display: flex;
  justify-content: center;
}
.order_a {
  width: 94%;
}
.order_b {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 14px;
}
.order_c {
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
}
.order_d {
  color: orange;
}
.order_e {
  display: flex;
  justify-content: center;
}
.order_f {
  width: 94%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
}
.order_g {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid #eeeeee;
}
.order_g img {
  width: 100%;
}
.order_h {
  width: 60%;
  word-break: break-all;
}
.order_i div {
  text-align: right;
}
.order_j {
  color: #666666;
  font-size: 14px;
}
.order_k{
    border-top: 1px solid #eeeeee;
}
.order_k div{
    text-align: right;
    line-height: 28px;
    margin-right: 3%;
}
.box {
    height: 100px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #dddddd;
}

</style>