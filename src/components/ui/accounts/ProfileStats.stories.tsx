import type { Meta, StoryObj } from '@storybook/react';
import { ProfileStats, ProfileStat } from './ProfileStats';

const meta: Meta<typeof ProfileStats> = {
  title: 'Accounts/ProfileStats',
  component: ProfileStats,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ProfileStats>;

const sampleStats: ProfileStat[] = [
    { label: 'Following', value: 123 },
    { label: 'Followers', value: '45.6k' },
    { label: 'Likes', value: '1.2M' },
];

export const Default: Story = {
  args: {
    stats: sampleStats,
  },
};
