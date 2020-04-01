import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home', () => {

  const component = shallowMount(Home)

  test('is a Vue component', ()=>{
    expect(component.isVueInstance()).toBeTruthy()
  })

  test('renders Your source for good food!', () =>{
    expect(component.text()).toContain('Your source for good food')
  })

  test('title is Your source for good food!', () => {
    expect(component.vm.title).toEqual('Your source for good food!')
  })

  test('homepage is true', () => {
    expect(component.vm.homepage).toEqual(true)
  })

})
