/**
 * @jest-environment jsdom
 */

import React from "react"
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DropDown from "../DropDown"

configure({adapter: new Adapter()})


//Enzyme
describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(<DropDown children={<div />} button={<button />} />)
    console.log(wrapper.find('div.dropdown').debug());
    expect(wrapper).toBeDefined();
    console.log(window);
    expect(wrapper.find('div.dropdown').isEmptyRender()).toBeFalsy();
  })

  //Snapshot
  test('should render (snapshot)', () => {
    const wrapper = shallow(<DropDown children={<div />} button={<button />} />)

    expect(wrapper).toMatchSnapshot()
  })
})
