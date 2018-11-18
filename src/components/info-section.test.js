import React from 'react';
import {shallow} from 'enzyme'

import InfoSection from './info-section'

describe('<InfoSection />', () => {

	it('should render without crashing', () => {
		shallow(<InfoSection />);
	});

	it('should prove that it is loading the initial class', () => {
		let wrapper = shallow(<InfoSection />);
		expect(wrapper.hasClass('what')).toEqual(true);
	});


})