/* eslint-disable no-undef */
import React from 'react';
import Button from './index';
import { shallow } from 'enzyme';

const props = { onAddRoom: jest.fn(), title: 'Add New Room', type: 'success', status: false };
const component = shallow(<Button {...props} />);

describe('Add button test', () => {
  test('Should button onClick event correctly', () => {
    const button = component.find('button');
    button.simulate('click');

    expect(button).toHaveLength(1);
    expect(props.onAddRoom).toHaveBeenCalled();
  });
});
