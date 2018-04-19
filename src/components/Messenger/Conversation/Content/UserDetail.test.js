import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import UserDetail from './UserDetail'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

describe('<UserDetail />', () => {
  it('renders properly',() => {
    const wrapper = shallow(<UserDetail secondsAgo={1} toggleModal={() =>{}} />)

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
