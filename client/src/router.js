import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
        {
            path : '/',
            component : ()=>{return import('./components/home.vue')}
        },
        {
            path : '/shopList/:class',
            name : "shopList",
            component : ()=>{return import('./components/shopList.vue')}
        },
        {
            path : "/login",
            component : ()=>{return import('./components/login.vue')}
        },
        {
            path : '/details/:id',
            name : "details",
            component : ()=>{return import('./components/details.vue')}
        },
        {
            path : '/shopCar',
            component : ()=>{return import('./components/shopCar.vue')}
        }
    ]
})

export default router;