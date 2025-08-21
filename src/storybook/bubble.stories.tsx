import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bubble } from '../components/ui/bubble';

const meta: Meta<typeof Bubble> = {
  title: 'UI/Bubble',
  component: Bubble,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['sent', 'received'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Bubble>;

export const Sent: Story = {
  render: (args) => (
    <div className="flex flex-col items-end w-64">
        <Bubble {...args} variant="sent">
            <p>This is a sent message.</p>
        </Bubble>
    </div>
  ),
};

export const Received: Story = {
    render: (args) => (
        <div className="flex flex-col items-start w-64">
            <Bubble {...args} variant="received">
                <p>This is a received message.</p>
            </Bubble>
        </div>
    ),
};
