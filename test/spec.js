'use strict';

import React from 'react';
import {expect} from 'chai';
import {renderIntoDocument} from 'react-addons-test-utils';
import {scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import App from '../src/components/App';

describe('App', () => {
	const component = renderIntoDocument(<App data={{ title: 'the title' }} />);

	it('should do something', () => {
		const p = scryRenderedDOMComponentsWithTag(component, 'p');

		expect(p[0].textContent).to.equal('the title');
	});
});
