import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof LoginForm> = {
  title: 'Accounts/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};
