import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '../components/ui/spinner';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'dots', 'wave'],
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
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Dots: Story = {
    args: {
        variant: 'dots',
    },
};

export const Wave: Story = {
    args: {
        variant: 'wave',
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
