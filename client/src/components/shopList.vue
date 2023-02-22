<template>
  <div>
    <el-header>
      <nav-box>
        <i @click="goBack" class="el-icon-arrow-left" slot="icon"></i>
        <el-input slot="input" placeholder="商品名" size="small"></el-input>
      </nav-box>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="6">
          <left-button></left-button>
        </el-col>
        <el-col :span="18">
          <list></list>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <footer-box></footer-box>
    </el-footer>
  </div>
</template>

<script>
import { navBox } from "../nav-box/index";
import { footerBox } from "../footerBox/index";
import { leftButton } from "../leftButton/index";
import { list } from "../list/index";
export default {
  components: {
    navBox,
    footerBox,
    leftButton,
    list,
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.el-header {
  width: 100vw;
  padding: 0px;
  border-bottom: 1px solid #eee;
  height: 40px !important;
  position: fixed;
  top: 0px;
  z-index: 1000;
  background-color: white;
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
</style>