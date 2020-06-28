<template>
  <div class="box">
    <div class="head">编辑地址</div>
    <div>
      <van-address-edit
        :area-list="area"
        show-delete
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </div>
    <div class="icon" @click="back">
      <van-icon name="arrow-left" size="25" />
    </div>
  </div>
</template>

<script>
import area from "../../../area";
export default {
  name: "addressEdit",
  props: {},
  components: {},
  data() {
    return {
      area: area,
      content:[]
    };
  },
  methods: {
    back() {
      this.$router.push("/addressList");
    },
    onSave(content) {
      this.content = this.content; // content：表单内容
      this.$api
        .address({
          name: content.name,
          tel: content.tel,
          address: `${content.province}${content.city}${content.county}${content.addressDetail}`,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode
        })
        .then(res => {
          this.content = res.address
          console.log(this.content);
          this.$toast(res.msg);
          localStorage.setItem('content',JSON.stringify(this.content))
          this.$router.push('/addressList')
          
        })
        .catch(err => {
          console.log(err);
        });
      
    },
    onDelete(id) {
      this.$api.deleteAddress({id}).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      this.$toast("删除成功");
      this.$router.push('/addressList')
    }
  },
  mounted() {
    
  },
  watch: {},
  computed: {
    setName() {
      return this.$store.state.name;
    },
    setTel() {
      return this.$store.state.tel;
    },
    setCounty() {
      return this.$store.state.county;
    },
    setCity() {
      return this.$store.state.city;
    },
    setAreaCode() {
      return this.$store.state.areaCode;
    },
    setAddressDetail() {
      return this.$store.state.addressDetail;
    },
    setAddress() {
      return this.$store.state.address;
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
}
.head {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  position: absolute;
  top: 5px;
  left: 5px;
}
</style>