<template>
  <div>
    <div class="box">
      <van-sidebar>
        <van-sidebar-item
          v-for="(item,index) in category"
          :key="index"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
      <div class="r-box">
        <van-tabs v-model="active" v-if="bxMallSubDto.length > 0">
          <van-tab v-for="(item, index) in bxMallSubDto" :key="index" :title="item.mallSubName">
            <template>
            <div>
              <div class="r-box1">
                <div class="r-box2">123</div>
                <div>
                  <div class="rbox2-font">华南圣女果</div>
                  <div class="r-box3">
                    <div class="rbox2-font">¥156</div>
                    <div class="rbox3-font">¥115</div>
                  </div>
                </div>
              </div>
            </div>
            </template>
          </van-tab>
        </van-tabs>
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
      activeKey: 0,
      arr: "",
      active: 0,
      bxMallSubDto: [],
      mallCategoryName: "",
      category: [],
      id: '',
    };
  },
  methods: {},
  mounted() {
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto

    this.$api.classification(id)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.box {
  display: flex;
}
.r-box {
  width: 80%;
}
.r-box1 {
  height: 120px;
  display: flex;
  border-bottom: 1px solid rgb(238,238,238);
  background: white;
  align-items: center;
} 
.r-box2 {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
  margin-right: 15px;
  margin-left: 15px;
  border: 1px solid rgb(238,238,238);
}
.r-box3 {
  display: flex;
  align-items: center;
  
}
.rbox2-font {
  color: red;
  height: 40px;
  line-height: 40px;
}
.rbox3-font {
  text-decoration: line-through;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
</style>