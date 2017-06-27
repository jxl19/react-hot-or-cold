import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });
    //test to make no modal onstart
    it('hides info modal on start', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });
    //test for modal when toggled
    it('renders info modal when toggled', () =>{
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal(true);
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
})
