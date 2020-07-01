<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last"  @click="backmine" />评价中心
    </div>
    <div class="eva"></div>
    <div class="eva_a">
      <van-tabs >
        <van-tab title="待评价">
          <div class="eva_b" v-for="(item,index) in list" :key="index">
            <div class="order_e" v-for="(item1,index1) in order_list" :key="index1">
              <div class="order_f">
                <div class="order_g">
                  <img :src="item1.image_path" alt="" width="80px">
                </div>
                <div class="order_h">
                  <div>ddddddddddddddddddddduuuuuuuuddddddddd</div>
                  <van-button plain round icon="chat" type="danger" size="small" class="shai" @click="goeva">评论晒单</van-button>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已评价">
          <div class="eva_b">
            <div class="order_e">
              <div class="order_f">
                <div class="order_g">
                  <img src alt />
                </div>
                <div class="order_h">
                  <div>ddddddddddddddddddddduuuuuuuuddddddddd</div>
                  <van-button plain round type="default" size="small" class="shai" @click="gooldeva">查看评价</van-button>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      order_list:[]

    };
  },
  components: {},
  methods: {
    goeva(){
      this.$router.push('/writeEva')
    },
    backmine(){
      this.$router.push('my')
    },
    gooldeva(){
       this.$router.push('/oldEva')
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
.eva {
  height: 200px;
  background: url("../../../public/car.png");
  background-size: cover;
  z-index: -1;
}
.eva_a {
  position: absolute;
  width: 100%;
  top: 220px;
  left: 0;
}
.order_e {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
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
  width: 70%;
  word-break: break-all;
}
.shai {
  float: right;
  margin-top: 15px;
}
</style>