import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '../components/ui/slider';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => <Slider {...args} className="w-[60%]" />,
  args: {
    defaultValue: [33],
    max: 100,
    step: 1,
  },
};
