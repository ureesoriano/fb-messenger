import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'

import configureStore from '../../../store'

Enzyme.configure({ adapter: new Adapter() })

import ConversationContainer from './ConversationContainer'
import { Message, MessagesWrapper, Messages } from './Content/Messages'

const store = configureStore()
const api = {
  fetchConversation: jest.fn( () => Promise.resolve([{
      "from": "crazypeacock512",
      "to":"you",
      "time":"2018-02-11T12:00:00Z",
      "message":"Hi! how do you find the React course?",
      "id": "k0ut102efa"
  }])
)}

describe('<ConversationContainer />', () => {
  it(`should fetch messages`, () => {
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <ConversationContainer
            api={ api }
          />
        </Provider>
      </Router>
    )

    expect(api.fetchConversation).toHaveBeenCalled()
  })
})

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
