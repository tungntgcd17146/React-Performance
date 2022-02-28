/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddButton from './index';

export default {
  title: 'Components/AddButton',
  component: AddButton
  //   parameters: {
  //     // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen'
  //   }
} as ComponentMeta<typeof AddButton>;

export const Template: ComponentStory<typeof AddButton> = (args) => <AddButton {...args} />;

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
