/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';
import { ButtonType } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onAddRoom: { action: 'Hello onClick' } }
} as ComponentMeta<typeof Button>;

const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const successButton = Default.bind({});
successButton.args = {
  title: 'Add New Room',
  type: ButtonType.success
};

export const DangerButton = Default.bind({});
DangerButton.args = {
  title: 'Danger Button',
  type: ButtonType.danger
};

export const DisableButton = Default.bind({});
DisableButton.args = {
  title: 'Disable Button',
  type: ButtonType.secondary,
  status: true
};

export const primaryButton = Default.bind({});
primaryButton.args = {
  title: 'Total list',
  type: ButtonType.primary
};
