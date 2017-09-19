import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        Item:[],
        user:""
    },
    mutations: {
  
        pushItem:function(state,thisItem){
            state.Item = state.Item.concat(thisItem)
        },
          islogin:function(state,user){
            return state.user = user;
        },
    }
})

export default store