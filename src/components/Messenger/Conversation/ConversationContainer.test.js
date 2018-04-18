import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'

import configureStore from '../../../store'

Enzyme.configure({ adapter: new Adapter() })

import ConversationContainer from './ConversationContainer'

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
