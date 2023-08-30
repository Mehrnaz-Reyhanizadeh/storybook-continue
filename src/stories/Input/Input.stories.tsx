import type { Meta, StoryObj,Story  } from '@storybook/react';
import React from 'react';
import Input, {  InputProps } from './Input';
import { useState } from 'react';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<InputProps> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;





// type Story = StoryObj<typeof meta>;

const Template: Story<InputProps> = (args: InputProps) => {
  const [value, setValue] = useState('');

  return <Input {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Example Input',
};