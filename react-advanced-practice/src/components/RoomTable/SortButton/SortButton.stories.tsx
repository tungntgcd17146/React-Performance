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

const Default: ComponentStory<typeof SortButton> = (args) => <SortButton {...args} />;

export const SortZA = Default.bind({});
SortZA.args = {
  toggleSort: true
};

export const SortAZ = Default.bind({});
SortAZ.args = {
  toggleSort: false
};
