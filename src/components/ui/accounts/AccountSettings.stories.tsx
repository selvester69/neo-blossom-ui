import type { Meta, StoryObj } from '@storybook/react';
import { AccountSettings } from './AccountSettings';

const meta: Meta<typeof AccountSettings> = {
  title: 'Accounts/AccountSettings',
  component: AccountSettings,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AccountSettings>;

export const Default: Story = {
  args: {},
};
