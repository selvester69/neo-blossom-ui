import type { Meta, StoryObj } from '@storybook/react';
import { EmailVerification } from './EmailVerification';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof EmailVerification> = {
  title: 'Accounts/EmailVerification',
  component: EmailVerification,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof EmailVerification>;

export const Default: Story = {
  args: {
    email: 'jules@example.com',
  },
};

export const WithResend: Story = {
    args: {
        ...Default.args,
        onResend: action('onResend'),
    },
};
