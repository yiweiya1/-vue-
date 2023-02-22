import {GETNOWLIST,GETSHOP} from './type'
export default {
    [GETNOWLIST] : function(state,num){
        state.nowList = state.listShop.slice(0,num)
    },
    [GETSHOP] : function(state,data){
        console.log(data)
        state.listShop = data;
        state.nowList = state.listShop.slice(0,6)
    }
}