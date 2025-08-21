import type { Meta, StoryObj } from '@storybook/react';
import { ResetPasswordForm } from './ResetPasswordForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ResetPasswordForm> = {
  title: 'Accounts/ResetPasswordForm',
  component: ResetPasswordForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};
