import type { Meta, StoryObj } from '@storybook/react-vite';
import { Ribbon } from '../components/ui/ribbon';
import { Card, CardContent } from '../components/ui/card';

const meta: Meta<typeof Ribbon> = {
  title: 'UI/Ribbon',
  component: Ribbon,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'new', 'beta', 'sale'],
    },
  },
  decorators: [
    (Story) => (
      <Card className="relative w-64 h-32">
        <CardContent className="p-6">
          <p>This is a card with a ribbon.</p>
        </CardContent>
        <Story />
      </Card>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Ribbon>;

export const Default: Story = {
  args: {
    children: 'Featured',
  },
};

export const New: Story = {
    args: {
        variant: 'new',
        children: 'New',
    },
};

export const Beta: Story = {
    args: {
        variant: 'beta',
        children: 'Beta',
    },
};

export const Sale: Story = {
    args: {
        variant: 'sale',
        children: 'Sale',
    },
};
