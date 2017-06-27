import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('renders the guesses', () => {
        const values = [1,2,3];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value,index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        })
    })
    
});