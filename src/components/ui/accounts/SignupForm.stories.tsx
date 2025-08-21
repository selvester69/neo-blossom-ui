import type { Meta, StoryObj } from '@storybook/react';
import { SignupForm } from './SignupForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SignupForm> = {
  title: 'Accounts/SignupForm',
  component: SignupForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};
