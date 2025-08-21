import type { Meta, StoryObj } from '@storybook/react';
import { UserList } from './UserList';
import { User } from './UserCard';

const meta: Meta<typeof UserList> = {
  title: 'Accounts/UserList',
  component: UserList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div className="w-full max-w-md">
            <Story />
        </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserList>;

const sampleUsers: User[] = [
    { id: '1', name: 'Jules Doe', email: 'jules@example.com', avatarSrc: 'https://github.com/shadcn.png', role: 'Admin' },
    { id: '2', name: 'Vincent Vega', email: 'vincent@example.com', role: 'Member', avatarSrc: undefined },
    { id: '3', name: 'Mia Wallace', email: 'mia@example.com', role: 'Guest', avatarSrc: 'https://i.pravatar.cc/150?u=mia' },
];

export const Default: Story = {
  args: {
    users: sampleUsers,
  },
};

export const NoUsers: Story = {
    args: {
        users: [],
    },
};
