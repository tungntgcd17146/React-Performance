/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddButton from './index';

export default {
  title: 'Components/AddButton',
  component: AddButton
} as ComponentMeta<typeof AddButton>;

export const Template: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;
