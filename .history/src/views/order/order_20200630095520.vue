<template>
  <div class="other_bei">
    <div class="locat"><van-icon name="arrow-left" color="#1989fa" class="back_last"  @click="backmine" />我的订单</div>
    <div v-if="list.length < 0">
      <div>您还没有买任何产品</div>
      <div>立即购买再来查看哦</div>
      <div ><van-button type="primary" @click="byshop">去购买</van-button></div>
    </div>
    <div class="order" v-else>
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
                <div>￥6</div>
                <div class="order_j">x1</div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      arr:[]
    };
  },
  components: {},
  methods: {
    backmine(){
      this.$router.push('my')
    },
    byshop(){
      this.$router.push('/')
    }
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
</style>