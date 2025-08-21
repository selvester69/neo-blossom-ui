import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'neon', 'cyber', 'matrix', 'hero'],
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
