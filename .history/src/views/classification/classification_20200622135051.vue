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
                  <div>华南圣女果</div>
                  <div class="r-box3">
                    <div>¥156</div>
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
      category: []
    };
  },
  methods: {},
  mounted() {
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto

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
}
.r-box3 {
  display: flex;
  align-items: center;
  
}
.rbox3-font {
  te
}
</style>