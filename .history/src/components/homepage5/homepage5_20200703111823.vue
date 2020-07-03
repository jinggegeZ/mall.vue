<template>
 <div>
    <div>
      <div class="floor">
        <div class="f-font">1F</div>
        <div class="f-font2">休闲食品</div>
      </div>
        <div>
      <div class="imgOne">
        <div v-for="(item,index) in floor1.slice(0,1)" :key="index" class="imgD">
          <img :src="item.image" alt class="img" @click="details(index[0])"/>
        </div>
        <div class="imgTwo">
          <div v-for="(item,index) in floor1.slice(1,2)" :key="index" class="img1">
            <img :src="item.image" alt class="img1" @click="details(index[1])"/>
          </div>
          <div v-for="(item,index) in floor1.slice(2,3)" :key="index">
            <img :src="item.image" alt class="img1" @click="details(index[2])"/>
          </div>
        </div>
      </div>
			<div class="imgThr">
      <div v-for="(item,index) in floor1.slice(3,5)" :key="index">
        <img :src="item.image" alt class="img1" @click="details(index)"/>
      </div></div>
    </div>
    </div>
    </div>
</template>

<script>
 export default {
   name: '',
   props: {
      floor1:{
        type:Array,
        default:() => {}
      }
   },
   components: {

   },
   data () {
     return {
       id:'',
     }
   },
   methods: {
     details(index){
       this.$router
       .push({path:'/details',query:{id : this.floor1[index].goodsId}})
       this.$utils.details(this.floor1[index])
     },
     
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
.floor{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.f-font2 {
  color: red;
}
.img {
  width: 100%;
  height: 220px;
	border: .5px solid rgb(238, 238, 238);
}
.img1 {
  width: 100%;
  height: 110px;
	border: .5px solid rgb(238, 238, 238);
}
.imgD {
	width: 50%;
}
.imgOne {
  display: flex;
	height: 220px;
	width: 100%;
}
.imgTwo{
	width: 50%;
	height: 220px;
}
.imgThr {
	display: flex;
}

</style>