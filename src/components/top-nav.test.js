import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav'

describe('<TopNav />', () => {

	it('should render without crashing', () => {
		shallow(<TopNav />);
	});

	it('should try to start a new game when the new anchor is clicked', () => {
		const callback = jest.fn();
		const bullshit = jest.fn();
		let wrapper = mount(<TopNav onRestartGame={callback} />);
		wrapper.find('.new').simulate('click');
		expect(callback).toHaveBeenCalled();
	})
})