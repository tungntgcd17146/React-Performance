/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Room from './index';

export default {
  title: 'Components/Room',
  component: Room,
  argTypes: {
    onDeleteRoom: { action: 'Delete click' }
  }
} as ComponentMeta<typeof Room>;

const Template: ComponentStory<typeof Room> = (args) => <Room {...args} />;

export const Rooms = Template.bind({});
Rooms.args = {
  order: 1,
  room: {
    id: 'bTvTk',
    name: 'Deluxe Room',
    quantity: 32,
    price: 50
  }
};
