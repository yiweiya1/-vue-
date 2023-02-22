import list from './views/list.vue'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
var listStore = {
    state,
    actions,
    getters,
    mutations
}
export {
    list,
    listStore
}