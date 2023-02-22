import Vue from 'vue';
import Vuex from 'vuex';
import {listStore} from './list/index'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules : {
        listStore
    }
})

export default store;