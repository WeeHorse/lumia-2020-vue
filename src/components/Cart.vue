<template>
  <div class="basket">
    <div v-if="showCart" class="overlay" @click="showCart=false"></div>
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

  // "props" är egna HTML-attribut som vi kan låta en annan komponent skicka in data med.
  props:['cartItems','showCart'],

  data(){
    return {
      showOrder: false
    }
  },

  // "computed" är så kallade "getters" i Vue - här definierar vi modell-egenskaper som ska beräknas om varje gång något ändras
  computed:{

    items(){
      let itms = []
      for(let item of this.cartItems){
        let i = itms.indexOf(item)
        if(i > -1){
          itms[i].amount++
        }else{
          item.amount = 1
          itms.push(item)
        }
      }
      return itms
    },

    total(){
      let tot = 0;
      for(let item of this.items){
        tot += item.cost * item.amount
      }
      return tot
    }

  }

}
</script>