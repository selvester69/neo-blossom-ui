import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusIndicator } from '../components/ui/status-indicator';

const meta: Meta<typeof StatusIndicator> = {
  title: 'UI/StatusIndicator',
  component: StatusIndicator,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['online', 'offline', 'typing'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusIndicator>;

export const Online: Story = {
  args: {
    variant: 'online',
  },
};

export const Offline: Story = {
  args: {
    variant: 'offline',
  },
};

export const Typing: Story = {
  args: {
    variant: 'typing',
  },
};
