import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout, CalloutDescription, CalloutTitle } from '../components/ui/callout';

const meta: Meta<typeof Callout> = {
  title: 'UI/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  render: (args) => (
    <Callout {...args} className="w-full max-w-md">
      <CalloutTitle>Callout Title</CalloutTitle>
      <CalloutDescription>
        This is a default callout. It can be used for general information.
      </CalloutDescription>
    </Callout>
  ),
};

export const Destructive: Story = {
    render: (args) => (
        <Callout {...args} variant="destructive" className="w-full max-w-md">
            <CalloutTitle>Destructive Callout</CalloutTitle>
            <CalloutDescription>
                This is a destructive callout. It should be used for errors or critical warnings.
            </CalloutDescription>
        </Callout>
    ),
};

export const Success: Story = {
    render: (args) => (
        <Callout {...args} variant="success" className="w-full max-w-md">
            <CalloutTitle>Success Callout</CalloutTitle>
            <CalloutDescription>
                This is a success callout. It can be used to indicate a successful operation.
            </CalloutDescription>
        </Callout>
    ),
};

export const Warning: Story = {
    render: (args) => (
        <Callout {...args} variant="warning" className="w-full max-w-md">
            <CalloutTitle>Warning Callout</CalloutTitle>
            <CalloutDescription>
                This is a warning callout. It should be used for warnings that need attention.
            </CalloutDescription>
        </Callout>
    ),
};

export const Info: Story = {
    render: (args) => (
        <Callout {...args} variant="info" className="w-full max-w-md">
            <CalloutTitle>Info Callout</CalloutTitle>
            <CalloutDescription>
                This is an info callout. It can be used for informational messages.
            </CalloutDescription>
        </Callout>
    ),
};
