<template>
  <div>
      <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
        <van-tab title="标签 5">已完成</van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Completed",
  props: {},
  components: {},
  data() {
    return {
        active: 5,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.head {
    width: 100%;
}
</style>