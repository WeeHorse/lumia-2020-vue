<template>
  <div>
    <input
      class="flex-sm-fill text-sm-center nav-link"
      type="text"
      id="search"
      placeholder="Type to search"
      v-model="searchString"
      @keyup="search"
    />

    <div class="lamps">
      <Product
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
    <Cart :cartItems="cartItems" :showCart="showCart" />
  </div>
</template>

<script>
import Product from '@/components/Product'
import Cart from '@/components/Cart'
export default {
  // lista på importerade komponenter
  components:{
    Product,
    Cart
  },

  // i "methods" lägger vi egna funktioner vi vill använda i komponenten.
  methods:{
    search(){
      this.filteredProducts = []
      for(let product of this.products){
        let textToSearch = product.name.toLowerCase() + product.description.toLowerCase()
        if(textToSearch.includes(this.searchString.toLowerCase())){
          this.filteredProducts.push(product)
        }
      }
    },
    addToCart(item){
      this.cartItems.push(item)
      this.showCart = true;
    }
  },

  // i "data" kan vi definera modell-egenskaper i den här komponenten, som vi inte fått ifrån props eller ifrån computed
  data(){
    return {
      showCart: false,
      cartItems:[],
      filteredProducts: [],
      searchString: '',
      products:[
        {
          "name": "Vit taklampa",
          "id": 14,
          "description": "Mått Ø 25 cm, höjd 20 cm.",
          "cost": 2500,
          "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjEyMzEwMS5qcGcifQ==/34537.jpg?q=85&w=670&h=447&dpr=2",
          "keywords": ["stor","20-tal"]
        },
        {
          "name": "Bordslampa i guld",
          "id": 9,
          "description": "Mått Ø 55 cm, höjd 30 cm.",
          "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjUyMzI0Ni5qcGcifQ==/107942.jpg?q=85&w=670&h=447&dpr=2",
          "keywords": ["läslampa","80-tal"]
        },
        {
          "name": "Vit golvlampa",
          "id": 21,
          "description": "Mått Ø 15 cm, höjd 200 cm.",
          "cost": 1780,
          "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&w=670&h=447&dpr=2",
          "keywords": ["läslampa"]
        }
      ]
    }
  },

  // "created" är en "lifecycle-metod" som vi kan använda för sådant vi vill få gjort när komponenten laddas in
  created(){
    // vi vill göra en sökning för att visa alla produkter först
    this.search()
  }

}

</script>