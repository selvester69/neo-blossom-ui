import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from '../components/ui/tag';

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tag',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Tag',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Tag',
    variant: 'outline',
  },
};
