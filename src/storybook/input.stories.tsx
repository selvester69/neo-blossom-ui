import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'neon', 'cyber', 'matrix', 'glass', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input {...args} type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const Neon: Story = {
  ...Default,
  args: {
    variant: 'neon',
  },
};

export const Cyber: Story = {
  ...Default,
  args: {
    variant: 'cyber',
  },
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} type="email" placeholder="Email" />
      <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Subscribe
      </button>
    </div>
  ),
};
