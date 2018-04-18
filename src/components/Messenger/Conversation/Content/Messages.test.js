import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from '../../../../store'
import { Messages } from './Messages'

Enzyme.configure({ adapter: new Adapter() })

describe('<Messages />', () => {
  it(`should send a message`, () => {
    const receiveMessage = jest.fn()
    const wrapper = shallow(
      <Messages
        store={configureStore()}
        receiveMessage={receiveMessage}
      />
    )

    wrapper.find('button').simulate('click')
    expect(receiveMessage).toHaveBeenCalled()
  })
})
