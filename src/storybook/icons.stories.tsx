import type { Meta, StoryObj } from '@storybook/react';
import {
  Icon,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  Menu,
  Plus,
  Search,
  Home,
  Star,
  Heart,
} from '../components/ui/icons';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icons',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => (
    <div className="grid grid-cols-5 gap-4">
      <ChevronRight />
      <ChevronDown />
      <Check />
      <X />
      <Menu />
      <Plus />
      <Search />
      <Home />
      <Star />
      <Heart />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: (args) => (
    <Icon {...args}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </Icon>
  ),
  args: {
    size: '2xl',
    variant: 'neon',
    animation: 'pulse',
  },
};
