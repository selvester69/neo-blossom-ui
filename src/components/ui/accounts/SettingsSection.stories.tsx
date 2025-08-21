import type { Meta, StoryObj } from '@storybook/react';
import { SettingsSection } from './SettingsSection';
import { Card, CardContent } from '@/components/ui/card';

const meta: Meta<typeof SettingsSection> = {
  title: 'Accounts/SettingsSection',
  component: SettingsSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SettingsSection>;

export const Default: Story = {
  args: {
    title: 'Profile Information',
    description: 'Update your personal details here.',
    children: <Card><CardContent className="p-6">Content for the section goes here.</CardContent></Card>,
  },
};

export const WithoutDescription: Story = {
    args: {
        title: 'Danger Zone',
        children: <Card><CardContent className="p-6">Destructive actions.</CardContent></Card>,
    },
};
