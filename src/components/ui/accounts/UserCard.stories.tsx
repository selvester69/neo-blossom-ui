import type { Meta, StoryObj } from '@storybook/react';
import { UserCard, User } from './UserCard';

const meta: Meta<typeof UserCard> = {
  title: 'Accounts/UserCard',
  component: UserCard,
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
type Story = StoryObj<typeof UserCard>;

const sampleUser: User = {
    id: '1',
    name: 'Jules Doe',
    email: 'jules@example.com',
    avatarSrc: 'https://github.com/shadcn.png',
    role: 'Admin',
};

export const AdminUser: Story = {
  args: {
    user: sampleUser,
  },
};

export const MemberUser: Story = {
    args: {
      user: { ...sampleUser, id: '2', name: 'Vincent Vega', email: 'vincent@example.com', role: 'Member', avatarSrc: undefined },
    },
};

export const GuestUser: Story = {
    args: {
        user: { ...sampleUser, id: '3', name: 'Mia Wallace', email: 'mia@example.com', role: 'Guest', avatarSrc: 'https://i.pravatar.cc/150?u=mia' },
    },
};
