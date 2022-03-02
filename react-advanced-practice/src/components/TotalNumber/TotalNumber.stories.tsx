/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TotalNumber from './index';

export default {
  title: 'Components/TotalNumber',
  component: TotalNumber
} as ComponentMeta<typeof TotalNumber>;

const Default: ComponentStory<typeof TotalNumber> = (args) => <TotalNumber {...args} />;

export const Number = Default.bind({});
Number.args = {
  numberList: 5
};
