import type { Meta, StoryObj } from '@storybook/react';
import { PhoneVerification } from './PhoneVerification';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof PhoneVerification> = {
  title: 'Accounts/PhoneVerification',
  component: PhoneVerification,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PhoneVerification>;

export const Default: Story = {
  args: {
    phoneNumber: '+1 (555) 123-4567',
  },
};

export const WithResend: Story = {
    args: {
        ...Default.args,
        onResend: action('onResend'),
    },
};
