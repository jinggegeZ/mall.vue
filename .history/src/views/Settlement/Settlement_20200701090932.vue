<template>
  <div>
    <div class="box">
      <div class="box1">
        <div class="head">
          <div class="icon" @click="back">
            <van-icon name="arrow-left" size="20" />
          </div>
          <div class="headfont">Order settlement</div>
        </div>
        <div class="nav">
          <div class="nav1">
            <div class="nav1img">
              <van-icon name="location-o" size="30" />
            </div>
            <div class="nav1box">
              <div class="nav2box">
                <div>收货人:{{defaultAdd.name}}</div>
                <div class="nav1font">收货地址：{{defaultAdd.address}}</div>
                <div class="Inconvenience">(收货不便时，可选择免费待收货服务)</div>
              </div>
              <div class="nav1phone">{{defaultAdd.tel}}</div>
            </div>
            <div @click="addresslist" class="nav1boxfoot">
              <van-icon name="arrow" size="20" />
            </div>
          </div>
        </div>
        <div class="img">
          <img src="../../../public/caitiao.jpg" alt height="8px" width="100%" />
        </div>
        <div v-if="flag==='1'">
          <div v-for="(item,index) in shopList" :key="index" class="d-flex">
            <img :src="item.image_path" class="img1" />
            <div class="item">
              <div class="name">{{item.name}}</div>
              <div class="flex-j-sb">
                <div class="price">￥{{item.present_price}}</div>
                <div class="count">X{{item.count}}</div>
              </div>
            </div>
          </div>
          <div class="foot">
            <van-submit-bar :price="this.total*100" button-text="提交订单" @submit="onSubmit" />
          </div>
        </div>
        <div v-if="flags==='0'" class="d-flex">
          <img :src="this.goodsOne.image"  class="img1" />
          <div class="item">
            <div class="name">{{this.goodsOne.name}}</div>
            <div class="flex-j-sb">
              <div class="price">￥{{this.goodsOne.present_price}}</div>
              <div class="count">X{{this.counts}}</div>
            </div>
          </div>
          <div class="foot">
            <van-submit-bar :price="totals*100" button-text="提交订单" @submit="onSubmit" />
          </div>
        </div>
      </div>
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
      shopList: [],
      defaultAdd: {},
      arr: [],
      count: "",
      goodsOne: {},
      counts: "",
      flag: 0,
      flags: 1,
      total: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addresslist() {
      this.$router.push("/addressList");
    },
    onSubmit() {
      if (this.flag === 1) {
        this.shopList.map(item => {
          this.arr.push(item.cid);
        });
        this.$api
          .order({
            address: this.defaultAdd.address,
            tel: this.defaultAdd.tel,
            orderId: this.arr,
            totalPrice: this.total,
            idDirect: false,
            count: this.count
          })
          .then(res => {
            console.log(res);
            this.$toast.success(res.msg);
            this.$router.push("/");
          })
          .catch(err => {});
      }
      if (this.flags === 0) {
        this.arr.push(this.goodsOne.id);
        this.$api
          .order({
            address: this.defaultAdd.address,
            tel: this.defaultAdd.tel,
            orderId: this.arr,
            totalPrice: this.totals,
            idDirect: true,
            count: this.counts
          })
          .then(res => {
            console.log(res);
            this.$toast.success(res.msg);
            this.$router.push("/");
          })
          .catch(err => {});
      }
    }
  },
  mounted() {
    this.counts = this.$route.query.count;

    if(localStorage.goodsOne){
      this.goodsOne = JSON.parse(localStorage.getItem("goodsOne"))
    }
    else{
      this.goodsOne = this.$route.query.goodsOne
    }
    
    if(localStorage.shopList){
      this.shopList = JSON.parse(localStorage.getItem("shopList"));
    }
    else{
        this.shopList = JSON.parse(this.$route.query.shopList)
    }
    console.log(this.shopList);
    this.flag = this.$route.query.flag;
    this.flags = this.$route.query.flags;
    this.total = this.$route.query.total;
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.defaultAdd = res.defaultAdd;
      })
      .catch(err => {});
  },
  watch: {},
  computed: {
    totals() {
        return this.total
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  background: white;
}
.box1 {
  width: 100%;
}
.head {
  width: 100%;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  position: relative;
}
.headfont {
  font-size: 16px;
  font-weight: 700;
}
.icon {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
}
.nav {
  width: 100%;
  height: 130px;
  border-bottom: 1px;
}
.nav1 {
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
}
.nav1img {
  margin-left: 5px;
  margin-right: 5px;
}
.nav1box {
  width: 400px;
  margin-right: 5px;
  display: flex;
}
.nav2box {
  width: 200px;
}
.nav1phone {
  height: 50px;
}
.nav1font {
  font-size: 12px;
  margin-top: 15px;
}
.nav1boxfoot {
  height: 5px;
}
.img {
  height: 8px;
}
.img1 {
    width: 80px;

}
.d-flex {
    width: 100%;
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: space-around;
}

.Inconvenience {
    font-size: 12px;
    color: orange;
}
.flex-j-sb {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
.price {
    color: red;
}
.name {
    color: red;
}
</style>