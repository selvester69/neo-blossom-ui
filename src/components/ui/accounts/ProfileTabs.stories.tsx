import type { Meta, StoryObj } from '@storybook/react';
import { ProfileTabs, ProfileTab } from './ProfileTabs';
import { Card, CardContent } from '@/components/ui/card';

const meta: Meta<typeof ProfileTabs> = {
  title: 'Accounts/ProfileTabs',
  component: ProfileTabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileTabs>;

const sampleTabs: ProfileTab[] = [
    {
        value: 'posts',
        label: 'Posts',
        content: <Card><CardContent className="p-6">Content for Posts</CardContent></Card>,
    },
    {
        value: 'media',
        label: 'Media',
        content: <Card><CardContent className="p-6">Content for Media</CardContent></Card>,
    },
    {
        value: 'likes',
        label: 'Likes',
        content: <Card><CardContent className="p-6">Content for Likes</CardContent></Card>,
    },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
};

export const WithDefaultValue: Story = {
    args: {
        tabs: sampleTabs,
        defaultValue: 'media',
    },
};
