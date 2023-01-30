import React from 'react';

import Typography from '../../components/typography/Typography';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    fontWeight: { control: '' }
  }
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Text',
};

export const UltraSmall = Template.bind({});
UltraSmall.args = {
  size: 'xs',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};
