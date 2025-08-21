import type { Meta, StoryObj } from '@storybook/react';
import { UserStatus, Status } from './UserStatus';

const meta: Meta<typeof UserStatus> = {
  title: 'Accounts/UserStatus',
  component: UserStatus,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserStatus>;

export const Online: Story = {
  args: {
    status: 'online',
  },
};

export const Offline: Story = {
    args: {
      status: 'offline',
    },
};

export const Away: Story = {
    args: {
      status: 'away',
    },
};

export const Busy: Story = {
    args: {
      status: 'busy',
    },
};

export const AllStatuses = () => (
    <div className="flex items-center gap-4">
        <UserStatus status="online" />
        <UserStatus status="offline" />
        <UserStatus status="away" />
        <UserStatus status="busy" />
    </div>
);
