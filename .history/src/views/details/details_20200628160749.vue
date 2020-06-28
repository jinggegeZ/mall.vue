<template>
  <div class="box">
    <div class="top" @click="comeback">
      <van-icon name="diamond" size="25" />
    </div>
    <div class="nav">
      <img :src="obj.image" alt width="80%" @click="cka" />
      <van-image-preview v-model="show" :images="images" @change="onChange">
        <template v-slot:index>第{{ index }}页</template>
      </van-image-preview>
    </div>
    <div class="bbo">{{obj.name}}</div>
    <div class="font">¥{{obj.present_price}}元</div>
    <div class="bb1">
      <div class="bb5">
        <div>运费：{{obj.__v}}</div>
        <div>剩余：{{obj.amount}}</div>
        <div class="bb6">
          <!-- 判断是否登录 -->
          <div v-if="nickname === '' && flag === false" @click="collection" >收藏<van-icon name="like" size="20" void-color="white" color="red" /></div>
          <!-- 是否已经收藏 -->
          <div v-else-if="iscollect === 0 && flag === false" @click="collection">收藏<van-icon name="like" size="20" void-color="white" color="red" /></div>
          <div v-else @click="delcollection">取消收藏<van-icon name="like" size="20" void-color="white" color="red" /></div>
        </div>
      </div>
    </div>
    <div class="bb2">
      <div class="bb3">
        <div class="img1">
          <van-icon name="thumb-circle" color="red" size="25" />
        </div>
        <div class="bb3-1"> 
          <div>有赞的店</div>
          <div class="bb3-2">官方</div>
        </div>
      </div>
      <div class="bb4">123</div>
      <div class="bb3">
        <div>进入店铺</div>
        <div class="img2">
          <van-icon name="shop-collect" color="red" size="25" />
        </div>
      </div>
    </div>
    <div class="deta_f">
      <van-tabs v-model="active">
        <van-tab title="商品详情">
          <div class="deta_g">
            <div v-html="obj.detail"></div>
          </div>
        </van-tab>
        <van-tab title="商品评论">
          <div class="deta_pin">
            <div class="deta_h">
              <div class="deta_i">
                <div class="deta_j">
                  <img src alt />
                </div>
                <div class="deta_K">
                  <div class="deta_l">
                    <span>用户名</span>
                    <span class="deta_m">2002-15-453</span>
                  </div>
                  <div>
                    <van-rate v-model="value" readonly />
                  </div>
                  <div>评价内容。。。。</div>
                </div>
              </div>
            </div>
            <div class="deta_h">
              <div class="deta_i">
                <div class="deta_j">
                  <img src alt />
                </div>
                <div class="deta_K">
                  <div class="deta_l">
                    <span>用户名</span>
                    <span class="deta_m">2002-15-453</span>
                  </div>
                  <div>
                    <van-rate v-model="value" readonly />
                  </div>
                  <div>评价内容。。。。</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="foot">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="gotocarts" />
        <van-goods-action-button color="orange" type="warning" text="加入购物车" @click="add" />
        <van-action-sheet v-model="show2" title="加入购物车">
          <div class="content">
            <div class="conbox">
              <div class="conbox1">
                <div class="conimg">
                  <img :src="obj.image" alt width="80px" />
                </div>
                <div>
                  <div class="foot5">{{obj.name}}</div>
                  <div class="font">¥{{obj.present_price}}元</div>
                  <div>剩余：706件</div>
                </div>
              </div>
              <div class="conbox2">
                <div class="conbox3">
                  <div class="foot4" @click="addShop(index)">立即加入购物车</div>
                </div>
              </div>
            </div>
          </div>
        </van-action-sheet>
        <van-goods-action-button color="red" type="danger" text="立即购买" @click="buynow" />
        <van-action-sheet v-model="show1" title="立即购买" color="red">
          <div class="content">
            <div class="conbox">
              <div class="conbox1">
                <div class="conimg">
                  <img :src="obj.image" alt width="80px" />
                </div>
                <div>
                  <div class="foot5">{{obj.name}}</div>
                  <div class="font">¥{{obj.present_price}}元</div>
                </div>
              </div>
              <div class="foot1">
                    <div>
                      <div class="foot4">购买数量</div>
                      <div class="foo6">
                        <div class="foot3">数量{{obj.amount}}件</div>
                        <div class="foot7">每人限购50件</div>
                      </div>
                    </div>
                    <div><van-stepper v-model="number" max="50" /></div>
              </div>
              <div>
                <div class="foot2">立即购买</div>
              </div>
            </div>
          </div>
        </van-action-sheet>
      </van-goods-action>
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
      show: false,
      show1: false,
      show2: false,
      number:1,
      index: 0,
      images: [],
      ids: "",
      active: "1",
      obj: {},
      value: 2,
      text:'收藏',
      color:'',
      iscollect:'',
      nickname:'',
      flag : false,
    };
  },
  methods: {
    //返回主页
    comeback() {
      this.$router.push("/");
    },
    onChange(index) {
      this.index = index;
    },
    //查看详情
    cka() {
      this.show = true;
    },
    add(){
      this.show2 = true
    },
    //点击购物车
     addShop(index){
       
        this.$api
        .addShop(this.ids)
        .then(res => {
          console.log(res);
          
          if(this.nickname ===null){
              this.$dialog
        .confirm({
          message: "您还没有登录，是否要登录？"
        })
        .then(res => {
           this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
        });
          }else if(this.nickname !=null){
             this.$toast('加入购物车成功') 
             console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    buynow() {
      this.show1 = true;
    },
    get(){
      this.text = '取消收藏'
    },
    gotocarts(){
      this.$router.push('carts')
    },
    //收藏商品
    collection(){
      if(this.nickname === null){
        this.$dialog.confirm({
          title:'提示',
          message:'未登录请登录后使用哦！'
        }).then(res => {
          this.$router.push('/login')
        }).catch(() => {})
      }
      else{
        this.$api.collection(this.obj).then(res => {
          this.$dialog.success('res.msg')
          this.flag = true
        }).catch(() => {})
      }
    },
    delcollection(){
      this.$api.cancelCollection(this.obj._id).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    isCollection(){
      this.$api.isCollection(this.obj._id).then(res => {
        this.iscollect = res.isCollection
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.nickname = localStorage.getItem('nickname')
    this.ids = this.$route.query.id;
    this.$api
      .one(this.ids)
      .then(res => {
        this.obj = res.goods.goodsOne;
        this.images.push(this.obj.image);
        this.images.push(this.obj.image_path);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    this.isCollection()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  background: white;
}

.top {
  height: 30px;
  line-height: 30px;
  margin-left: 15px;
}
.nav {
  height: 320px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bbo {
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.bb1 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}
.bb5 {
  width: 90%;
  height: 30px;
  font-size: 12px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bb2 {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid #999;
}
.bb3 {
  display: flex;
  align-items: center;
}
.bb4 {
  color: white;
}
.img1 {
  margin-right: 5px;
}
.img2 {
  margin-left: 5px;
}
.font {
  color: red;
}
.deta_f {
  margin-top: 30px;
  border-top: 1px solid #eeeeee;
  margin-bottom: 50px;
}
.deta_h {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
.deta_i {
  display: flex;
  justify-content: space-between;
  width: 94%;
}
.deta_j {
  height: 42px;
  width: 42px;
  border: 1px solid #eeeeee;
  border-radius: 50px;
  overflow: hidden;
}
.deta_j img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.deta_K {
  width: 84%;
  font-size: 14px;
}
.deta_K div {
  line-height: 26px;
}
.deta_l {
  display: flex;
  justify-content: space-between;
}
.deta_m {
  color: #666666;
}
.deta_pin {
  margin-bottom: 80px;
}
.content {
  padding: 16px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.conbox {
  width: 95%;
  height: 95%;
}
.conbox1 {
  display: flex;
  align-items: center;
  height: 100px;
}
.conimg {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
  margin-right: 10px;
}
.conbox2 {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  
}
.conbox3 {
  width: 95%;
  height: 95%;
  background: skyblue;
}
.foot1 {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  margin-top: 10px;
  align-items: center;
}
.foot2 {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(0, 80%, 50%);
  color: white;
}
.foot3 {
  font-size: 12px;
}
.foot5 {
  font-size: 14px;
}
.foot4 {
  font-weight: 700;
}
.foo6 {
  display: flex;
}
.foot7 {
  font-size: 12px;
  color: red;
}
.bb3-1 {
  display: flex;
  
}
.bb3-2 {
  width: 40px;
  color: white;
  background: red ;
  display: flex;
  justify-content: space-around;
}
.bb6 {
  display: flex;
  align-items: center;
}
</style>