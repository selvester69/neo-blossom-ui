import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../components/ui/chip';

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Chip',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Chip',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Chip',
    variant: 'outline',
  },
};
