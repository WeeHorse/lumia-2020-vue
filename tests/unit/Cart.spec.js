// mocking tools (fetch mock)

// vue store
import store from '@/store/index.js'

// vue test tools
import {mount} from '@vue/test-utils'

// component(s)
import Cart from '@/components/Cart_using_store'

// testdata
let testProducts = [
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
    "cost": 7100,
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

let expectedProducts = [
  {
    "name": "Vit taklampa",
    "id": 14,
    "description": "Mått Ø 25 cm, höjd 20 cm.",
    "cost": 2500,
    "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjEyMzEwMS5qcGcifQ==/34537.jpg?q=85&w=670&h=447&dpr=2",
    "keywords": ["stor","20-tal"],
    "amount": 1
  },
  {
    "name": "Bordslampa i guld",
    "id": 9,
    "description": "Mått Ø 55 cm, höjd 30 cm.",
    "cost": 7100,
    "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMDIsInQiOiJwcm9kdWN0IiwibiI6IjUyMzI0Ni5qcGcifQ==/107942.jpg?q=85&w=670&h=447&dpr=2",
    "keywords": ["läslampa","80-tal"],
    "amount": 1
  },
  {
    "name": "Vit golvlampa",
    "id": 21,
    "description": "Mått Ø 15 cm, höjd 200 cm.",
    "cost": 1780,
    "image": "https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&w=670&h=447&dpr=2",
    "keywords": ["läslampa"],
    "amount": 1
  }
]

// 11 380
let expectedTotal = expectedProducts[0].cost + expectedProducts[1].cost + expectedProducts[2].cost

let wrapper = mount(Cart, {store})

test('Store: addToCart', ()=>{
  let i = 0;
  for(let testProduct of testProducts){
    store.commit('addToCart', testProduct)
    expect(store.state.cart.items[i]).toEqual(expectedProducts[i])
    i++
  }
})

test('Cart: total', ()=>{
  expect(wrapper.vm.total).toEqual(expectedTotal)
})

