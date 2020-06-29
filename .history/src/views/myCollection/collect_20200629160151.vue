<template>
  <div>
    <div class="locat">
      <van-icon name="arrow-left" color="#1989fa" class="back_last" @click="backmine" />我的收藏
    </div>
    <div class="collect" v-for="(item,index)in arr" :key="index">
      <van-swipe-cell>
        <van-card
          price="2.00"
          :title="item.name"
          class="goods-card"
          :thumb="item.image"
        />
        <van-icon name="arrow-left" class="hua" />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj:[]
    };
  },
  components: {},
  methods: {
    backmine() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.obj = JSON.parse(localStorage.getItem('collect'))
    console.log(this.obj);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.goods-card {
  margin: 0;
  background-color: white;
}
.delete-button {
  height: 100%;
}
.collect{
  position: relative;
}
.hua{
  position: absolute;
  right: 20px;
  top: 45px;
}
</style>