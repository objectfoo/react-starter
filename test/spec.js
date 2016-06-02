'use strict';

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import App from '../src/components/App';

describe('Title', () => {
	const wrapper = shallow(<App data={{ title: 'the title' }} />);

	it('should render title inside a paragraph', () => {
		const paragraphText = wrapper.find('p').text();

		expect(paragraphText).to.eql('the title');
	});
});
