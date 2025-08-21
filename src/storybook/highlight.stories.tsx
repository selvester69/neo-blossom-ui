import type { Meta, StoryObj } from '@storybook/react-vite';
import { Highlight } from '../components/ui/highlight';

const meta: Meta<typeof Highlight> = {
  title: 'UI/Highlight',
  component: Highlight,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'warning', 'destructive'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  render: (args) => (
    <p>
      This is some text with a <Highlight {...args}>highlighted</Highlight> part.
    </p>
  ),
};

export const Warning: Story = {
    render: (args) => (
      <p>
        This is some text with a <Highlight {...args} variant="warning">warning highlight</Highlight>.
      </p>
    ),
  };

export const Destructive: Story = {
    render: (args) => (
        <p>
            This is some text with a <Highlight {...args} variant="destructive">destructive highlight</Highlight>.
        </p>
    ),
};
