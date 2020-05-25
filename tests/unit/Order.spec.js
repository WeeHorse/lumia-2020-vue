// mocking tools (fetch mock)

// vue store
import store from '@/store/index.js'

// vue test tools
import {mount} from '@vue/test-utils'

// component(s)
import Order from '@/components/Order'

test('Add email to order', ()=>{
  let wrapper = mount(Order, {store})
  wrapper.find('#inputEmail4').setValue('bugsbunny@nodehill.com')
  expect(wrapper.vm.email).toEqual('bugsbunny@nodehill.com')
})

test('Store: email added', ()=>{
  expect(store.state.order.email).toEqual('bugsbunny@nodehill.com')
})