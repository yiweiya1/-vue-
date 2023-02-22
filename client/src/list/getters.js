export default {
    getLeft : function(state){
        return state.nowList.filter((item,index)=>{
             return index%2 !== 0
        })
    },
    getRight : function(state){
        return state.nowList.filter((item,index)=>{
            return index%2 == 0
       })
    }
}