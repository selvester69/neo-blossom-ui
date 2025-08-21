import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status } from '../components/ui/status';
import { StatusIndicator } from '../components/ui/status-indicator';

const meta: Meta<typeof Status> = {
  title: 'UI/Status',
  component: Status,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'destructive'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Default: Story = {
  render: (args) => (
    <>
      <StatusIndicator variant="offline" />
      <Status {...args}>Offline</Status>
    </>
  ),
};

export const Success: Story = {
  render: (args) => (
    <>
      <StatusIndicator variant="online" />
      <Status {...args} variant="success">Online</Status>
    </>
  ),
};

export const Warning: Story = {
    render: (args) => (
      <>
        <StatusIndicator variant="typing" />
        <Status {...args} variant="warning">Connecting</Status>
      </>
    ),
  };

export const Destructive: Story = {
  render: (args) => (
    <>
      <StatusIndicator variant="offline" />
      <Status {...args} variant="destructive">Disconnected</Status>
    </>
  ),
};
