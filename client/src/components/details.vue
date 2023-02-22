<template>
    <div class="details-box">
        <i class="el-icon-arrow-left" @click="goBack"></i>
        <img :src="data.img" alt="">
        <h4>{{data.title}}</h4>
        <span>
            <del>¥</del>
            {{data.price}}
        </span>
        <button @click='add'>加入购物车</button>
    </div>
</template>

<script>
import axios from 'axios'
export default { 
    data : function(){
        return {
            data : null
        }
    },
    created(){
        axios.post('/details' , {
            id : this.$route.params.id
        }).then((data)=>{
            this.data = data.data[0]
        })
    },
    methods : {
        add(){
            axios.post('/admin/addShop' , {
                id : this.$route.params.id
            }).then((data)=>{
                alert(data.data)
            })
        },
        goBack(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.details-box{

}
img{
    width: 100vw;
}
h4{
    padding: 1rem;
}
span{
    padding: 1rem;
    color : red;
    font-size: 2rem;
}
del{
    font-size: 1rem;
}
button{
    background-color: red;
    border: none;
    width: 50%;
    height: 40px;
    border-radius: 20px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: white;
}
</style>