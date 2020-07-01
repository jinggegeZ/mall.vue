<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last" @click="backEvaluate" />评价中心
    </div>
    <div>
      <van-form>
        <div class="writeave">
          <div class="writeave_1">
            <div class="writeave_a">
             <img :src="list.image_path" alt="">
            </div>
            <div class="writeave_b">
              <div class="writeave_c">商品评分</div>
              <div>
                <van-rate v-model="value" />
              </div>
            </div>
          </div>
        </div>
        <div class="writeave_d">
          <textarea name id cols="30" rows="10" placeholder="说说你的购买感受吧" v-model="text"></textarea>
        </div>
        <div class="writeave_e">
            <van-checkbox v-model="checked">匿名评价</van-checkbox>
        </div>
        <div style="margin: 14px;">
          <van-button round block type="info" native-type="submit" @click="click">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       checked: true,
        value: 3,
        list:{},
        text:''
    };
  },
  components: {},
  methods: {
      backEvaluate(){
          this.$router.push('/evaluate')
      },
      click(){
        this.$api.comment({
          id: this.list.cid,
          rate: this.value,
          content: this.text,
          anonymous: this.checked,
          _id: this.list._id,
          order_id: this.order_id,
          image:this.list.
        }).then()
      }
  },
  mounted() {
    this.list = this.$route.query.item
    console.log(this.list);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.writeave {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
}
.writeave_1 {
  width: 94%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
}
.writeave_a {
  width: 82px;
  height: 82px;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  margin-right: 20px;
}
.writeave_a img {
  width: 100%;
}
.writeave_c {
  margin-bottom: 20px;
}
.writeave_d {
  background-color: rgb(242, 242, 242);
}
.writeave_d textarea {
  padding-left: 3%;
  width: 94%;
  border: none;
  background-color: rgb(242, 242, 242);
  padding-top: 10px;
}
.writeave_e{
    margin-top: 20px;
    margin-left: 3%;
}
</style>