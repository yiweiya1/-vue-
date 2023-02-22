<template>
  <div class="home">
    <el-container>
      <el-header>
        <nav-box>
          <i class="el-icon-s-operation" slot="icon"></i>
          <el-input slot="input" placeholder="商品名" size="small"></el-input>
          <span class="login" slot="login">登录</span>
        </nav-box>
      </el-header>
      <el-main>
        <el-row class="swiper">
          <swiper-box></swiper-box>
        </el-row>
        <el-row class="list">
          <el-col class="list-item" v-for="item in classify" :key="item._id">
            <router-link
              :to="{ name: 'shopList', params: { class: item.classify } }"
              >
              <img :src="item.img" alt="" />
            </router-link>
            <span>{{ item.classify }}</span>
          </el-col>
        </el-row>
        <el-row class="shop-list">
          <list></list>
        </el-row>
      </el-main>
      <el-footer>
        <footer-box></footer-box>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { navBox } from "../nav-box/index";
import { swiperBox } from "../swiper-box/index";
import { list } from "../list/index";
import { footerBox } from "../footerBox/index";
import axios from "axios";
export default {
  //假数据  之后到服务端请求
  data: function () {
    return {
      classify: [],
    };
  },
  components: {
    navBox,
    swiperBox,
    list,
    footerBox,
  },
  created() {
    axios.get("/getClassify").then((data) => {
      this.classify = data.data;
    });
  },
};
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh;
}
.el-header {
  height: 40px !important;
  width: 100vw;
  background-color: #f53f3f;
  position: fixed;
  top: 0px;
  padding: 0px;
  z-index: 1000;
}
.el-main {
  flex-grow: 1;
  padding: 0px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  position: absolute;
  z-index: 100;
}
.el-footer {
  height: 50px !important;
  width: 100vw;
  position: fixed;
  bottom: 0px;
  z-index: 1000;
  padding: 0px;
}
.swiper {
  width: 100%;
  height: 150px;
}
.list {
  width: 100%;
  padding: 1rem 0px;
}
.shop-list {
  width: 100% !important;
}
.list-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-item a{
  width:100%;
  display: flex;
  justify-content: center;
}
.list-item img {
  width: 60%;
}
.list-item span {
  font-size: 0.5rem;
}
.login {
  font-size: 0.6rem;
  color: white;
}
i {
  font-size: 1rem;
  color: white;
}
</style>