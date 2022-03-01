/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RoomTable } from './index';
import Room from './Room';

export default {
  title: 'Components/RoomTable',
  component: RoomTable
} as ComponentMeta<typeof RoomTable>;

const Template: ComponentStory<typeof RoomTable> = ({ rooms, ...args }) => (
  <RoomTable {...args}>
    {[...Array(rooms).keys()].map((item) => (
      <Room {...item} />
    ))}
  </RoomTable>
);

export const Rooms = Template.bind({});
Rooms.args = {
  rooms: [
    {
      id: 'bTvTk',
      name: 'Deluxe Room',
      quantity: 32,
      price: 50
    },
    {
      id: '90dRR',
      name: 'Luxury Room',
      quantity: 26,
      price: 150
    },
    {
      id: 'nnkL9',
      name: 'Executive Room',
      quantity: 17,
      price: 250
    }
  ]
};
