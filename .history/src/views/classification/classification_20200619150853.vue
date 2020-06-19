<template>
  <div>
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
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
    };
  },
  methods: {},
  mounted() {
    this.$api.re
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>