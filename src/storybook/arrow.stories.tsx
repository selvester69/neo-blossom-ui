import type { Meta, StoryObj } from '@storybook/react';
import { Arrow } from '../components/ui/arrow';

const meta: Meta<typeof Arrow> = {
  title: 'UI/Arrow',
  component: Arrow,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['up', 'down', 'left', 'right'],
    },
    size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Arrow>;

export const Up: Story = {
  args: {
    direction: 'up',
  },
};

export const Down: Story = {
    args: {
        direction: 'down',
    },
};

export const Left: Story = {
    args: {
        direction: 'left',
    },
};

export const Right: Story = {
    args: {
        direction: 'right',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
};
