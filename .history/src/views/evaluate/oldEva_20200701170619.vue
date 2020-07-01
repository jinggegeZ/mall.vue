<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last" @click="backEvaluate" />评价中心
    </div>
    <div class="oldeva1" v-for="(item,index) in obj" :key="index">
      <div class="oldeva2">
        <div class="oldeva">
          <van-rate v-model="item.rate" readonly />
          <span class="oldeva_a">{{item.comment_time}}</span>
        </div>
        <div class="oldeva_b">
        {{item.content}}
        </div>
        <div class="oldeva_c" v-for="(item1,index1) in item.goods" :key="index1">
            <div class="oldeva_d"><img :src="item1.image" alt=""></div>
            <div class="oldeva_e">{{item1.name}}</div>
            <van-button round type="warning" icon="shopping-cart" size="mini" color="#1989fa" @click="gocarts"></van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj:[],
      value: '',
      time:'',
    };
  },
  components: {},
  methods: {
    backEvaluate() {
      this.$router.push("/evaluate");
    }
  },
  mounted() {
    this.$api.alreadyEvaluated()
    .then(res => {
      this.obj = res.data.list
      console.log(this.obj);
    }).catch(err => {})
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