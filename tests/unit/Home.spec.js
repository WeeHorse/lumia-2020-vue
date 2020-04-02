import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {

  const component = shallowMount(Home)

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

})
