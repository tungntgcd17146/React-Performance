/* eslint-disable no-undef */
import React from 'react';
import AddButton from './index';
import { shallow } from 'enzyme';

const props = { addRoom: jest.fn() };
const component = shallow(<AddButton {...props} />);

describe('Add button test', () => {
  test('Should button onClick event correctly', () => {
    const button = component.find('button');
    button.simulate('click');

    expect(button).toHaveLength(1);
    expect(props.addRoom).toHaveBeenCalled();
  });
});
