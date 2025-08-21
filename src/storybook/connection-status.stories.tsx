import type { Meta, StoryObj } from '@storybook/react';
import { Status } from '../components/ui/status';
import { StatusIndicator } from '../components/ui/status-indicator';

const meta: Meta = {
  title: 'UI/ConnectionStatus',
  component: () => null, // No single component, just a demonstration
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Connected: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <StatusIndicator variant="online" />
      <Status variant="success">Connected</Status>
    </div>
  ),
};

export const Connecting: StoryObj = {
    render: () => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusIndicator variant="typing" />
        <Status variant="warning">Connecting</Status>
      </div>
    ),
  };

export const Disconnected: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <StatusIndicator variant="offline" />
      <Status variant="destructive">Disconnected</Status>
    </div>
  ),
};
