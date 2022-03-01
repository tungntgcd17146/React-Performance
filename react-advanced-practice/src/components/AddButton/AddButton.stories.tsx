/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onAddRoom: { action: 'Hello onClick' } }
} as ComponentMeta<typeof Button>;

const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const AddButton = Default.bind({});
AddButton.args = {
  title: 'Add New Room',
  type: 'success'
};

export const DangerButton = Default.bind({});
DangerButton.args = {
  title: 'Danger Button',
  type: 'danger'
};

export const DisableButton = Default.bind({});
DisableButton.args = {
  title: 'Disable Button',
  type: 'danger',
  status: true
};

export const TotalNumberButton = Default.bind({});
TotalNumberButton.args = {
  title: 'Total list',
  type: 'primary'
};
