/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputSearch from './index';

export default {
  title: 'Components/InputSearch',
  component: InputSearch,
  argTypes: { setInputSearch: { action: 'hello onChange' } }
} as ComponentMeta<typeof InputSearch>;

export const Template: ComponentStory<typeof InputSearch> = (args) => <InputSearch {...args} />;
