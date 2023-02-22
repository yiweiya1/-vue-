<template>
  <div class="swiper-box">
    <div class="background"></div>
    <div class="swiper">
      <ul ref="list">
        <li v-for="(item, index) in swiperList" :key="index">
          <img :src="item" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import img1 from "./1.jpeg";
import img2 from "./2.jpg";
import img3 from "./3.png";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
export default {
  data: function () {
    return {
      swiperList: [img1, img2, img3, img4, img5, img1],
      num: 0,
    };
  },
  methods: {
    move() {
      var ul = this.$refs.list;
      this.num++;
      if (ul) {
        ul.style.transition = "0.5s";
        ul.style.transform = `translateX(${-this.num * 100}%)`;
        if (this.num == 5) {
          this.num = 0;
          setTimeout(() => {
            ul.style.transition = "0s";
            ul.style.transform = `translateX(${0}%)`;
          }, 500);
        }
      }
    },
  },
  created() {
    setInterval(() => {
      this.move();
    }, 2000);
  },
};
</script>

<style scoped>
.background {
  height: 100px;
  width: 100%;
  background-color: #f53f3f;
  border-radius: 0 0 40% 40%;
  position: absolute;
}
.swiper-box {
  width: 100vw;
  display: flex;
  justify-content: center;
  height: 150px;
}
.swiper {
  height: 150px;
  width: 95%;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.swiper ul {
  height: 100%;
  width: 100%;
  display: flex;
}
.swiper ul li {
  height: 100%;
  width: 100%;
  list-style: none;
  flex-shrink: 0;
  border-radius: 10px;
}
.swiper ul li img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
</style>