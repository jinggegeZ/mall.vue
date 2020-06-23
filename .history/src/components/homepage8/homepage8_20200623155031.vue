<template>
  <div class="stuff_z">
    <div class="floor_a">热销商品</div>
    <div class="stuff">
      <div class="stuff_a" v-for="(item,index) in hotGoods" :key="index">
        <div class="stuff_b">
          <img :src="item.image" alt />
        </div>
        <div class="stuff_c">{{item.name}}</div>
        <div class="stuff_d">
          ￥{{item.mallPrice}}
          <span class="stuff_e">{{item.price}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
      props: {
    hotGoods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.stuff_z{
    margin-bottom: 50px;
}
.floor_a {
  display: flex;
  justify-content: center;
  color: rgb(255, 76, 56);
  height: 30px;
  margin-top: 20px;
}
.stuff {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: white;
}
.stuff_a{
    width: 50%;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
}
.stuff_a div {
  text-align: center;
}
.stuff_b img{
    width: 80%;
}
.stuff_c {
  color: rgb(255, 76, 56);
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 14px;
      overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 80%;
    margin-left: 10%;
}
.stuff_d {
  color: rgb(255, 76, 56);
    font-size: 14px;
    margin-bottom: 10px;
}
.stuff_e {
  color: #777777;
  text-decoration: line-through;
}
</style>
