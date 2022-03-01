/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SortButton from './index';

export default {
  title: 'Components/SortButton',
  component: SortButton,
  argTypes: {
    onSortRooms: { action: 'Sort click' }
  }
} as ComponentMeta<typeof SortButton>;

const Template: ComponentStory<typeof SortButton> = (args) => <SortButton {...args} />;

export const SortZA = Template.bind({});
SortZA.args = {
  toggleSort: true
};

export const SortAZ = Template.bind({});
SortAZ.args = {
  toggleSort: false
};
