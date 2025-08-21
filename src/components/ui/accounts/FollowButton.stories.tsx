import type { Meta, StoryObj } from '@storybook/react';
import { FollowButton } from './FollowButton';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof FollowButton> = {
  title: 'Accounts/FollowButton',
  component: FollowButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FollowButton>;

const InteractiveStory = (args) => {
    const [isFollowing, setIsFollowing] = useState(args.isFollowing);

    const handleClick = (e) => {
        setIsFollowing(!isFollowing);
        action('onClick')(e);
    }

    return <FollowButton {...args} isFollowing={isFollowing} onClick={handleClick} />;
};

export const Default: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        isFollowing: false,
    },
};

export const Following: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        isFollowing: true,
    },
};
