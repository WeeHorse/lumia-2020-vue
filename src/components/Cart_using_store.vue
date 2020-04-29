<template>
  <div class="basket">
    <div v-if="showCart" class="overlay" @click="hideCart"></div>
    <div v-if="showCart" id="cart" class="jumbotron corners padding transp">
      <h3>Varukorg</h3>
      <ul>
        <li v-for="(item,index) in items" :key="index">
          {{item.name}}
          <span v-if="item.amount<2">{{item.cost}}</span>

          <span v-if="item.amount>1">{{item.amount}}x {{item.cost}} = {{item.cost * item.amount}}</span>
        </li>
        <li class="total">
          Total
          <span>{{total}}</span>
        </li>
      </ul>
      <button v-if="!showOrder" class="btn btn-primary" @click="showOrder=true">Beställ</button>
      <Order v-if="showOrder"></Order>
    </div>
  </div>
</template>
<script>
import Order from '@/components/Order'
export default {
  components:{
    Order
  },

  data(){
    return {
      showOrder: false
    }
  },

  // "computed" är så kallade "getters" i Vue - här definierar vi modell-egenskaper som ska beräknas om varje gång något ändras
  computed:{

    items(){
      return this.$store.state.cart.items
    },

    total(){
      let tot = 0;
      for(let item of this.items){
        tot += item.cost * item.amount
      }
      return tot
    },

    showCart(){
      return this.$store.state.cart.show
    }

  },

  methods:{
    hideCart(){
      return this.$store.commit('showCart', false)
    }
  }

}
</script>