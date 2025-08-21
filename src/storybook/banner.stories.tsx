import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from '../components/ui/banner';

const meta: Meta<typeof Banner> = {
  title: 'UI/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'warning', 'info', 'announcement'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    children: 'This is a default banner.',
    onClose: () => console.log('Banner closed!'),
  },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'This is a destructive banner.',
        onClose: () => console.log('Banner closed!'),
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'This is a warning banner.',
        onClose: () => console.log('Banner closed!'),
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'This is an info banner.',
        onClose: () => console.log('Banner closed!'),
    },
};

export const Announcement: Story = {
    args: {
        variant: 'announcement',
        children: 'This is an announcement banner.',
        onClose: () => console.log('Banner closed!'),
    },
};
