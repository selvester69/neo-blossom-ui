import type { Meta, StoryObj } from '@storybook/react';
import { ProfileAvatar } from './ProfileAvatar';

const meta: Meta<typeof ProfileAvatar> = {
  title: 'Accounts/ProfileAvatar',
  component: ProfileAvatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileAvatar>;

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    fallback: 'JD',
  },
};

export const Small: Story = {
    args: {
      ...Default.args,
      size: 'sm',
    },
};

export const Large: Story = {
    args: {
      ...Default.args,
      size: 'lg',
    },
};

export const Fallback: Story = {
    args: {
      src: 'https://broken-url.png',
      fallback: 'JD',
    },
};
