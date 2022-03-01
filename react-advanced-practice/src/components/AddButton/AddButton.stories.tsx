/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddButton from './index';

export default {
  title: 'Components/AddButton',
  component: AddButton,
  argTypes: { addRoom: { action: 'hello click' } }
} as ComponentMeta<typeof AddButton>;

export const Default: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;
