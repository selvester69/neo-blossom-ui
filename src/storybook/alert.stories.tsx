import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal } from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info', 'help'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-full max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive" className="w-full max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: (args) => (
    <Alert {...args} variant="success" className="w-full max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args} variant="warning" className="w-full max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your subscription is about to expire.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: (args) => (
    <Alert {...args} variant="info" className="w-full max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>
        A new version of the app is available.
      </AlertDescription>
    </Alert>
  ),
};

export const Help: Story = {
  render: (args) => (
    <Alert {...args} variant="help" className="w-full max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Help</AlertTitle>
      <AlertDescription>
        Please contact support for assistance.
      </AlertDescription>
    </Alert>
  ),
};
