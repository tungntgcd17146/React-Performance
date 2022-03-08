/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TotalNumber from './index';

export default {
  title: 'Components/NotifyButton',
  component: TotalNumber
} as ComponentMeta<typeof TotalNumber>;

const Default: ComponentStory<typeof TotalNumber> = (args) => <TotalNumber {...args} />;

export const BadgeButton = Default.bind({});
BadgeButton.args = {
  numberList: 5
};
