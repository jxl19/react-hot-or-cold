import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('renders without crashing', () => {
        shallow(<TopNav />);
    });
    it('toggles info on infoclick', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback}/>);
        const link = wrapper.find('.what');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('starts new game when when clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame={callback}/>);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    })
});


