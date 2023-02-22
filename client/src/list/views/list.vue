<template>
  <el-row>
    <el-col class="left" :span="12">
      <div class="list-item" v-for="(item, index) in getLeft" :key="index">
        <router-link :to="{name : 'details' , params: {id : item._id}}">
          <img :src="item.img" alt="" />
          <p>{{ item.title.slice(0, item.title.length / 2) + "..." }}</p>
          <span>
            <del>¥</del>
            {{ item.price }}
          </span>
        </router-link>
      </div>
    </el-col>
    <el-col class="right" :span="12">
      <div class="list-item" v-for="(item, index) in getRight" :key="index">
        <router-link :to="{name : 'details' , params: {id : item._id}}">
          <img :src="item.img" alt="" />
          <p>{{ item.title.slice(0, item.title.length / 2) + "..." }}</p>
          <span>
            <del>¥</del>
            {{ item.price }}
          </span>
        </router-link>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: function () {
    return {
      num: 0,
    };
  },
  computed: {
    ...mapGetters(["getLeft", "getRight"]),
  },
  methods: {
    ...mapActions(["getNowData", "getShop"]),
    load() {
      this.num += 6;
      this.getNowData(this.num);
    },
    debounce(func, wait) {
      let timeout = null;
      return function () {
        let context = this;
        let args = arguments;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    },
  },
  created() {
    this.getShop(this.$route.params.class);
    window.addEventListener("scroll", this.debounce(this.load, 1000));
  },
};
</script>

<style scoped>
.el-row {
  width: 100%;
}
.el-col {
  width: 50%;
}
.list-item {
  width: 90%;
  margin: 5%;
  border-radius: 10px;
  background-color: white;
}
.list-item img {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}
.list-item p {
  font-size: 0.7rem;
  padding: 4%;
}
.list-item span {
  color: red;
  padding: 4%;
}
.list-item span del {
  font-size: 0.5rem;
  color: red;
}
</style>