/* eslint-disable no-unused-vars */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ErrorBoundary from './index';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary
} as ComponentMeta<typeof ErrorBoundary>;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => <ErrorBoundary {...args} />;

const ThrowError = () => {
  throw new Error('Test error');
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  children: <ThrowError />
};
