import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import { ButtonGroup } from '../components/ui/button-group';
import { Fab } from '../components/ui/fab';
import { Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'destructive',
        'success',
        'warning',
        'outline',
        'secondary',
        'ghost',
        'link',
        'neon',
        'cyber',
        'matrix',
        'hero',
      ],
      description: 'The variant of the button.',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'xl', 'icon'],
      description: 'The size of the button.',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child component.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const Neon: Story = {
    args: {
      children: 'Button',
      variant: 'neon',
    },
  };

export const Cyber: Story = {
    args: {
        children: 'Button',
        variant: 'cyber',
    },
};

export const Matrix: Story = {
    args: {
        children: 'Button',
        variant: 'matrix',
    },
};

export const Hero: Story = {
    args: {
        children: 'Button',
        variant: 'hero',
    },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
    args: {
      children: 'Button',
      size: 'xl',
    },
  };

export const Icon: Story = {
  args: {
    children: '👍',
    size: 'icon',
  },
};

export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Button',
    variant: 'warning',
  },
};

export const Group: Story = {
  render: (args) => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const FloatingActionButton: Story = {
  render: (args) => (
    <Fab {...args}>
      <Plus />
    </Fab>
  ),
};
