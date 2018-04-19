import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../../../../store'
import ConnectedMessage, { Messages, MessageBox, Message } from './Messages'

Enzyme.configure({ adapter: new Adapter() })

describe('<Messages />', () => {
  it(`should send a message (unit test)`, async () => {
    
  })

  it(`should send a message (integration test)`, async () => {

  })
})
