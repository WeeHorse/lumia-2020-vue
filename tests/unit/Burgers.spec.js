import { shallowMount } from '@vue/test-utils'
import Burgers from '@/views/Burgers.vue'

describe('Burgers', () => {
  const component = shallowMount(Burgers)
  let burger = {
    title: 'Mush',
    price: 120
  }
  test('Cart total is updated', () =>{
    let before = component.vm.cartTotal // 0 eller mer
    component.vm.buy(burger) // ska öka värde
    expect(component.vm.cartTotal).toBeGreaterThan(before) // ergo
  })

})

