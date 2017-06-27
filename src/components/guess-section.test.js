import React from 'react';
import { shallow } from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('renders without crashing', () => {
        shallow(<GuessSection />);
    });
    it('renders feedback', () => {
        const feedback = "feedback";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
})