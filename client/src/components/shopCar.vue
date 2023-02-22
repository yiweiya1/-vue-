<template>
  <div>
    <el-header>
      <nav-box>
        <p slot="input">购物车</p>
      </nav-box>
    </el-header>
    <el-main>
        <div v-for='item in list' :key="item._id" class="list-item">
            <img :src="item.img" alt="">
            <div class='info'>
                <p>{{item.title}}</p>
                <span>
                    <del>¥</del>
                    {{item.price}}
                </span>
            </div>
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
  components: {
    navBox,
    footerBox,
  },
  data : function(){
      return {
          list : []
      }
  },
  created() {
    axios.get("/admin/getShopCar").then((data) => {
      var shopCar = data.data[0].shopCar;
      if (shopCar.length !== 0) {
        shopCar.forEach((item) => {
             axios.post('/details' , {
                 id : item
             }).then((data)=>{
                 this.list.push(data.data[0])
             })
        });
      }
    });
  },
};
</script>

<style scoped>
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
}
.el-footer {
  height: 50px !important;
  width: 100vw;
  position: fixed;
  bottom: 0px;
  z-index: 1000;
  padding: 0px;
}

.list-item{
    height: 100px;
    width: 100%;
    display: flex;
    background-color: white;
    margin: 10px 0px;
}
img{
    height: 100%;
}
p{
    font-size: 0.5rem;
    padding: 10px;
}
span{
    padding: 10px;
    color : red
}
</style>