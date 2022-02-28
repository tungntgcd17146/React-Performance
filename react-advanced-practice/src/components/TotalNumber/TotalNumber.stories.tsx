/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TotalNumber from './index';

export default {
  title: 'Components/TotalNumber',
  component: TotalNumber
} as ComponentMeta<typeof TotalNumber>;

const Template: ComponentStory<typeof TotalNumber> = (args) => <TotalNumber {...args} />;

export const number = Template.bind({});
number.args = {
  numberList: 5
};
