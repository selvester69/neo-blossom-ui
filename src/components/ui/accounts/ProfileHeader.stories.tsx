import type { Meta, StoryObj } from '@storybook/react';
import { ProfileHeader } from './ProfileHeader';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof ProfileHeader> = {
  title: 'Accounts/ProfileHeader',
  component: ProfileHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileHeader>;

export const Default: Story = {
  args: {
    name: 'Jules Doe',
    username: 'julesd',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarFallback: 'JD',
  },
};

export const WithActionButton: Story = {
    args: {
      ...Default.args,
      actionButton: <Button>Edit Profile</Button>,
    },
};

export const WithoutAvatar: Story = {
    args: {
        ...Default.args,
        avatarSrc: undefined,
    },
};
