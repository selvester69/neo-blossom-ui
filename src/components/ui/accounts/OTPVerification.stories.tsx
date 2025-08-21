import type { Meta, StoryObj } from '@storybook/react';
import { OTPVerification } from './OTPVerification';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof OTPVerification> = {
  title: 'Accounts/OTPVerification',
  component: OTPVerification,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    numberOfDigits: {
        control: { type: 'number', min: 4, max: 8, step: 1 },
    }
  }
};

export default meta;
type Story = StoryObj<typeof OTPVerification>;

export const Default: Story = {
  args: {
    onComplete: action('onComplete'),
    numberOfDigits: 6,
  },
};

export const FourDigits: Story = {
    args: {
      onComplete: action('onComplete'),
      numberOfDigits: 4,
    },
};
