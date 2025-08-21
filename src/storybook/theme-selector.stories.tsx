import type { Meta, StoryObj } from '@storybook/react';
import {
  ThemeSelector,
  ThemeToggle,
} from '../components/ui/theme-selector';
import { ThemeProvider } from '../contexts/ThemeContext';

const meta: Meta = {
  title: 'UI/ThemeSelector',
  component: ThemeSelector,
  decorators: [(Story) => <ThemeProvider><Story /></ThemeProvider>],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ThemeSelector>;

export const Selector: Story = {
  render: (args) => <ThemeSelector {...args} />,
};

export const Toggle: Story = {
  render: (args) => <ThemeToggle {...args} />,
};
