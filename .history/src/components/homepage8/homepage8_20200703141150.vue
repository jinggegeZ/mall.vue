<template>
  <div>
    <div class="flbox">
      <div class="floor">
        <div class="f-font2">热销商品</div>
      </div>

      <div v-for="(item,index) in hotGoods" :key="index" @click="details(index)">
        <div class="left">
          <div><img :src="item.image" alt /></div>
          <div class="imgfont">{{item.name}}</div>
          <div class="img-style">
              <div class="prifont">¥{{item.price}}</div>
              <div class="img-font">¥{{item.price}}</div>
            </div>
        </div>
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
    return {
      id: ""
    };
  },
  methods: {
    details(index) {
      this.$router.push({
        path: "/details",
        query: { id: this.hotGoods[index].goodsId }
      });
      this.$utils.details(this.hotGoods[index]);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.flbox {
  width: 100%;
  margin-bottom: 60px;
}
.fff {
  margin-bottom: 30px;
}
.floor {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font2 {
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ff-box {
  width: 100%;
  background: white;
}
.left {
  width: 50%;
  background: white;
}
.right {
  background: white;
  width: 50%;
}
img {
  width: 80%;
}
.div {
  display: flex;
}
.img-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.imgfont {
  width: 180px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: red;
}
.img-font {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.img-style {
  display: flex;
  align-items: center;
}
.fllfoot {
  height: 100px;
  width: 100%;
  color: white;
}
.prifont {
  color: red;
}
</style>