import React from 'react';
import {shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
    it('renders without crashing', () => {
        shallow(<InfoModal />);
    });
    it('runs onClose when button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback}/>);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
})
