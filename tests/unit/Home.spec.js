import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import Cart from '@/components/Cart.vue'
import store from '@/store/index.js'

let productTestData = {
  "name": "Vit taklampa",
  "id": 14,
  "description": "Mått Ø 25 cm, höjd 20 cm.",
  "cost": 2500,
  "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjEyMzEwMS5qcGcifQ==/34537.jpg?q=85&w=670&h=447&dpr=2",
  "keywords": ["stor","20-tal"]
}

let productExpectedData = {
  "name": "Vit taklampa",
  "amount": 1,
  "id": 18,
  "description": "Mått Ø 25 cm, höjd 20 cm.",
  "cost": 2500,
  "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjEyMzEwMS5qcGcifQ==/34537.jpg?q=85&w=670&h=447&dpr=2",
  "keywords": ["stor","20-tal"]
  }

describe('Home', () => {

  const component = shallowMount(Home)
  const cartComponent = shallowMount(Cart)

  test('is a Vue component', ()=>{
    expect(component.isVueInstance()).toBeTruthy()
  })

  test('has a products array', ()=>{
    expect(component.vm.products).toHaveProperty('push') // testade att products är en array genom att prova om den har array-metoden 'push'
  })

  test('products array has at least one product', ()=>{
    expect(component.vm.products[0]).toBeDefined()
  })

  test('products all have a name and a cost property', ()=>{
    for(let product of component.vm.products){
      expect(product).toHaveProperty('name')
      expect(product).toHaveProperty('cost')
    }
  })

  test('addToCart', ()=>{
    store.commit('addToCart', productTestData)
    expect(store.state.cart.items[0]).toBe(productTestData)
  })

})