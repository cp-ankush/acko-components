import React from 'react';

import { AckoButton } from '@acko-components/atomic-components';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/AckoButton',
  component: AckoButton,
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant of the button.',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: [
          'primary',
          'primary-reversed',
          'secondary',
          'secondary-reversed',
          'ghost',
          'conversion',
        ],
      },
    },
    className: {
      type: { name: 'string', required: false },
      description: 'Styles of the button.',
      defaultValue: 'acko-bg-info',
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the button.',
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'stretched'],
      },
    },
    children: {
      type: { name: 'string', required: false },
      description: 'The content to render inside the component',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    backgrounds: { default: 'grey' },
    actions: {
      handles: ['mouseenter', 'click', 'focusin', 'focusout'],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zDZIyayUlr1yTWrsi7cFoo/Acko-Web?node-id=31%3A136',
    },
  },
} as Meta;

const Template: Story = (args) => <AckoButton {...args} />;
export const Overview = Template.bind({});
