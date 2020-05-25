import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:{
      items:[],
      show: false
    },
    order:{
      email:''
    }
  },
  mutations: {
    setEmail(store, value){
      store.order.email = value
    },
    addToCart(store, value){
      console.log(value)
      value.amount = 1
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
