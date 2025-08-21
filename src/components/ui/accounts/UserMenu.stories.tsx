import type { Meta, StoryObj } from '@storybook/react';
import { UserMenu, MenuItem } from './UserMenu';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof UserMenu> = {
  title: 'Accounts/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

const sampleUser = {
    name: 'Jules Doe',
    email: 'jules@example.com',
    avatarSrc: 'https://github.com/shadcn.png',
    avatarFallback: 'JD',
};

const profileMenuItems: MenuItem[] = [
    { label: 'Profile', onClick: action('Profile clicked') },
    { label: 'Billing', onClick: action('Billing clicked') },
    { label: 'Settings', onClick: action('Settings clicked') },
    { isSeparator: true },
    { label: 'Log out', onClick: action('Log out clicked') },
];

const accountMenuItems: MenuItem[] = [
    { label: 'Dashboard', onClick: action('Dashboard clicked') },
    { label: 'Team', onClick: action('Team clicked') },
    { label: 'Subscription', onClick: action('Subscription clicked') },
];

export const ProfileMenu: Story = {
  args: {
    user: sampleUser,
    menuItems: profileMenuItems,
  },
};

export const AccountMenu: Story = {
    args: {
      user: sampleUser,
      menuItems: [...profileMenuItems.slice(0, 3), ...accountMenuItems, ...profileMenuItems.slice(3)],
    },
};
