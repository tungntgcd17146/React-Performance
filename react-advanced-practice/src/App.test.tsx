/* eslint-disable no-undef */
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

describe('Should RoomTable render correctly', () => {
  test('Should render Room correctly', () => {
    const component = shallow(<App />);
    const header = component.find('header');
    const section = component.find('section');

    expect(header).toHaveLength(1);
    expect(section).toHaveLength(1);
  });
});
