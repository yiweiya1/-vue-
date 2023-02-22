<template>
    <div>
        <div @click='changeNow(item.classify)' class="listShop-item" v-for="(item,index) in classify" :key="index" :class='{active : item.classify == now}'>
            {{item.classify}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import { GETSHOP } from '../../list/type';
export default {
    data: function () {
    return {
      now : "京东超市",
      classify: [],
    };
  },
  methods : {
      ...mapActions(['getShop']),
      changeNow : function(e){
          this.now = e;
          this.getShop(e)
      }
  },
  created(){
      this.now = this.$route.params.class
      axios.get('/getClassify').then((data)=>{
          this.classify = data.data
      })
  }
}
</script>

<style scoped>
.listShop-item{
    /* width: 100px; */
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 0.6rem;
}
.active{
    background-color: white;
    color: red;
}
</style>