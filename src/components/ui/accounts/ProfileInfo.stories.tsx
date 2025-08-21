import type { Meta, StoryObj } from '@storybook/react';
import { ProfileInfo, ProfileInfoItem } from './ProfileInfo';
import { Briefcase, MapPin, Link as LinkIcon, Calendar } from "lucide-react"

const meta: Meta<typeof ProfileInfo> = {
  title: 'Accounts/ProfileInfo',
  component: ProfileInfo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileInfo>;

const sampleInfoItems: ProfileInfoItem[] = [
    { icon: <Briefcase className="h-4 w-4" />, text: 'Software Engineer at CyberCorp' },
    { icon: <MapPin className="h-4 w-4" />, text: 'Neo-Tokyo' },
    { icon: <LinkIcon className="h-4 w-4" />, text: 'cybercorp.dev', href: 'https://cybercorp.dev' },
    { icon: <Calendar className="h-4 w-4" />, text: 'Joined December 2077' },
];

export const Default: Story = {
  args: {
    bio: 'Building the future, one line of code at a time. Powered by ramen and retro-futurism.',
    infoItems: sampleInfoItems,
  },
};

export const WithoutBio: Story = {
    args: {
        infoItems: sampleInfoItems,
    },
};

export const MinimalInfo: Story = {
    args: {
        bio: 'Just a user.',
        infoItems: [sampleInfoItems[3]],
    },
};
