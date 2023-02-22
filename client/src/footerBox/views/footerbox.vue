<template>
  <div class="footer-box">
    <div class="footer-item" v-for="(item, index) in footerList" :key="index">
      <router-link :to="{ path: item.path }">
        <img :src="item.img" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
export default {
  data: function () {
    return {
      footerList: [{
          img : img1,
          path : "/"
      },{
          img : img2,
          path : "/shopList/京东超市"
      },{
          img : img3,
          path : '/shopCar'
      },{
          img : img4,
          path : '/login'
      }],
    };
  },
};
</script>

<style scoped>
.footer-box {
  display: flex;
  height: 100%;
  background-color: white;
}
.footer-item {
  width: 25%;
  height: 100%;
  text-align: center;
}
.footer-item img {
  height: 100%;
}
</style>