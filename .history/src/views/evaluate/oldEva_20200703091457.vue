<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last" @click="backEvaluate" />评价中心
    </div>
    <div class="oldeva1" v-for="(item,index) in list" :key="index">
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
            <van-button round type="warning" icon="shopping-cart" size="mini" color="#1989fa" @click="addshop(index)"></van-button>
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
      value: '',
      time:'',
    };
  },
  components: {},
  methods: {
    backEvaluate() {
      this.$router.push("/evaluate");
    },

    addshop(index){
      this.$api.addShop(this.list[index].id)
      .then(res => {
      this.$dialog.confirm({message:"加入成功"})
        // findindex 返回他的下标，如果没有就返回-1
      let index = this.List.findIndex(item1 => {
         return item1.cid === item.goodsId
      })
      if (index === -1) this.$store.commit('addCartNum')
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      
    },
  },
  mounted() {
    this.$api.alreadyEvaluated()
    .then(res => {
      this.list = res.data.list
      console.log(this.list);
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
  background: white;
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