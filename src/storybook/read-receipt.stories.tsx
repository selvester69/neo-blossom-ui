import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReadReceipt } from '../components/ui/read-receipt';

const meta: Meta<typeof ReadReceipt> = {
  title: 'UI/ReadReceipt',
  component: ReadReceipt,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['sent', 'delivered', 'read'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ReadReceipt>;

export const Sent: Story = {
  args: {
    variant: 'sent',
  },
};

export const Delivered: Story = {
  args: {
    variant: 'delivered',
  },
};

export const Read: Story = {
  args: {
    variant: 'read',
  },
};
