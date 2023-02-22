<template>
  <div class="loginPage">
    <el-header>
      <nav-box>
        <p slot="input">登陆页面</p>
      </nav-box>
    </el-header>
    <el-main>
      <div class="user" v-if="getShow">
        <i class="el-icon-s-custom"></i>
        <div class="submit">
          <el-input
            v-model="username"
            type="text"
            placeholder="用户名"
          ></el-input>
          <el-input
            v-model="password"
            type="password"
            placeholder="密码"
          ></el-input>
          <el-button @click="login">登录</el-button>
        </div>
      </div>
      <div v-else class="success">
        <el-input type="text" placeholder="商品名称" v-model="title"></el-input>
        <el-input type="text" placeholder="商品价格" v-model="price"></el-input>
        <el-select v-model="classify" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item._id"
            :value="item.classify"
          >
          </el-option>
        </el-select>
        <el-upload
          action="/admin/uploadShop"
          list-type="picture-card"
          :auto-upload="false"
          :data="{price,title,classify}"
          :on-success="success"
          ref='upload'
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-button @click='submit'>发布</el-button>
      </div>
    </el-main>
    <el-footer>
      <footer-box></footer-box>
    </el-footer>
  </div>
</template>

<script>
import { navBox } from "../nav-box/index";
import { footerBox } from "../footerBox/index";
import axios from "axios";
export default {
  data: function () {
    return {
      username: "",
      password: "",
      classify: "",
      price: "",
      title: "",
      options: [],
    };
  },
  created() {
    axios.get("/getClassify").then((data) => {
      this.options = data.data;
    });
  },
  components: {
    navBox,
    footerBox,
  },
  methods: {
    login() {
      axios
        .post("/login", {
          username: this.username,
          password: this.password,
        })
        .then((data) => {
          alert(data.data);
          location.reload();
        });
    },
    success(res){
        alert(res);
        location.reload()
    },
    submit(){
        this.$refs.upload.submit();
    }
  },
  computed: {
    getShow() {
      return document.cookie == "";
    },
  },
};
</script>

<style scoped>
.loginPage {
  height: 100vh !important;
  display: flex;
}
.el-header {
  height: 40px !important;
  width: 100vw;
  background-color: #f53f3f;
  position: fixed;
  top: 0px;
  padding: 0px;
  z-index: 1000;
  color: white;
}
.el-main {
  height: 100vh;
  padding: 0px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  position: absolute;
  z-index: 100;
  justify-content: center;
  align-items: center;
}
.el-footer {
  height: 50px !important;
  width: 100vw;
  position: fixed;
  bottom: 0px;
  z-index: 1000;
  padding: 0px;
}
.user {
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0px 10vw;
}
.el-icon-s-custom {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  font-size: 3rem;
  background-color: white;
  text-align: center;
  line-height: 100px;
}
.el-button {
  width: 100%;
}
</style>