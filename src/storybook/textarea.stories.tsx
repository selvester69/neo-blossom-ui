import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea {...args} placeholder="Type your message here." id="message" />
    </div>
  ),
};
