import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ForgotPasswordForm> = {
  title: 'Accounts/ForgotPasswordForm',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};
