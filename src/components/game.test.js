import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('renders without crashing', () => {
        shallow(<Game />);
    });
    it('starts a new game', () => {
        const wrapper = shallow(<Game />);
        //sets a state here so we have a 'current game' to let us restart game
        wrapper.setState({
            guesses: [1, 2, 3, 4],
            feedback: 'Awesome',
            correctAnswer: 5
        });
        wrapper.instance().newGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('makes and stores guesses', () => {
        const wrapper = shallow(<Game />);
        // setting answer we are looking for
        wrapper.setState({
            correctAnswer: 100
        });

        //guesses, wrapper holding array of all guesses
        wrapper.instance().guess(25);
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().guess(60);
        expect(wrapper.state('guesses')).toEqual([25, 60]);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().guess(80);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');

        wrapper.instance().guess(95);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().guess(100);
        expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });
});
