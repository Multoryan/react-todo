import React from 'react'
import TodoAdd from '../components/TodoAdd'
import { shallow } from 'enzyme'

test('Test of test', () => {

  functAdding = (values) => ({
    ...values
  })

  const add = shallow(<TodoAdd addTodo={functAdding} />)

  add.find('button').simulate('click')

  console.log(add)
  // expect()

})