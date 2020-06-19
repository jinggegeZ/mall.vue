<template>
  <div>
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item  :title="category[0].mallCategoryName" />
        <van-sidebar-item  :title="category[1].mallCategoryName" />
        <van-sidebar-item  :title="category[2].mallCategoryName" />
        <van-sidebar-item  :title="category[3].mallCategoryName" />
        <van-sidebar-item  :title="category[4].mallCategoryName" />
      </van-sidebar>
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
      activeKey:0,
      category:[]
    };
  },
  methods: {},
  mounted() {
    this.$api.recommend().then(res => {
      this.category =res.data.category
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>