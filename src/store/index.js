import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:{
      items:[],
      show: false
    }
  },
  mutations: {
    addToCart(store, value){
      console.log(value)
      store.cart.items.push(value)
    },
    showCart(store, value){
      store.cart.show = value
    }
  },
  actions: {
  },
  modules: {
  }
})
