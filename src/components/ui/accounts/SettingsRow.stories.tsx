import type { Meta, StoryObj } from '@storybook/react';
import { SettingsRow } from './SettingsRow';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof SettingsRow> = {
  title: 'Accounts/SettingsRow',
  component: SettingsRow,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div className="w-full max-w-md border rounded-lg">
            <Story />
        </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SettingsRow>;

export const WithSwitch: Story = {
  args: {
    label: 'Email Notifications',
    description: 'Receive notifications about new messages and account activity.',
    children: <Switch />,
  },
};

export const WithButton: Story = {
    args: {
      label: 'Delete Account',
      description: 'Permanently delete your account and all of your data.',
      children: <Button variant="destructive">Delete</Button>,
    },
};

export const WithoutDescription: Story = {
    args: {
      label: 'Username',
      children: <Button variant="secondary">Change</Button>,
    },
};
