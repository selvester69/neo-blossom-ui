import type { Meta, StoryObj } from '@storybook/react';
import { ChangePasswordForm } from './ChangePasswordForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ChangePasswordForm> = {
  title: 'Accounts/ChangePasswordForm',
  component: ChangePasswordForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChangePasswordForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};
