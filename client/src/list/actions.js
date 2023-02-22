import { GETNOWLIST, GETSHOP } from './type';
import axios from 'axios'
export default {
    getNowData(context, num) {
        context.commit(GETNOWLIST, num)
    },
    getShop(context, filter) {
        axios.get('/getShop').then((data) => {
            if(!filter){
                context.commit(GETSHOP, data.data)
            }
            else{
                var filterData = data.data.filter((item,index)=>{
                    return item.classify == filter
                })
                context.commit(GETSHOP, filterData)
            }
        })
    }
}