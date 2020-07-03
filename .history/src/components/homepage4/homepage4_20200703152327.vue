<template>
  <div>
    <div class="h4-box">
      <div class="h4-font">商品推荐</div>
      <div class="h4-box1">
        <div class="goods" ref="goods">
          <div class="content">
            <div class="zmj" v-for="(item,index) in recommend" :key="index">
              <div class="h4-box2">
                <div class="h4-box5">
                  <div @click="details(index)">
                    <img :src="item.image" alt />
                  </div>
                </div>
                <div>
                  <div class="h4-name" @click="details(index)">{{item.goodsName}}</div>
                  <div class="h4_a" @click="details(index)">
                    <span>￥{{item.mallPrice}}</span>
                    <span class="h4_b">￥{{item.price}}</span>
                  </div>
                </div>
                <div class="h4-box6">
                  <div class="h4-bg">
                    <van-icon name="cart-o" @click="addshop(index)" />
                  </div>
                  <div @click="addviews">
                    <div class="chakan" @click="details(index)">查看详情</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  props: {
    recommend: {
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
        query: { id: this.recommend[index].goodsId }
      });
      this.$utils.details(this.recommend[index]);
    },
    addshop(index) {
      this.$api
        .addShop(this.recommend[index].goodsId)
        .then(res => {
          this.$dialog.confirm({ message: "加入成功" });
          // findindex 返回他的下标，如果没有就返回-1
          let index = this.shopList.findIndex(item1 => {
            return item1.cid === item.goodsId;
          });
          if (index === -1) this.$store.commit("addCartNum");
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addviews() {
      console.log(this.$utils);
    }
  },
  mounted() {
    new BScroll(this.$refs.goods, {
      scrollX: true,
      click: true
    });
  },
  watch: {},
  computed: {
    shopList() {
      return this.$store.state.shopList;
    }
  }
};
</script>

<style scoped>
.zmj {
  width: 180px;
}
.h4-box {
  width: 100%;
  background: white;
  margin-top: 10px;
}
.h4-font {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dddddd;
  padding-left: 10px;
  color: #333333;
}
.h4-box1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-bottom: 10px;
}
.h4-box2 {
  width: 90%;
  margin-left: 5%;
}
.h4-box5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.h4-box5 img {
  width: 80px;
  height: 80px;
}
.h4-bg {
  background: yellow;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.h4-name {
  font-size: 14px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.h4-box6 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-radius: 6px;
  overflow: hidden;
}
.h4_a {
  font-size: 12px;
  color: #777777;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
}
.chakan {
  color: #ffffff;
  background-color: rgb(255, 76, 56);
  font-size: 14px;
  height: 100%;
  line-height: 30px;
  width: 85px;
  text-align: center;
}
.h4_b {
  text-decoration: line-through;
}
.goods {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
}
.content {
  flex: 1;
  display: flex;
}
</style>