import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../components/ui/image';

const meta: Meta<typeof Image> = {
  title: 'UI/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args) => (
    <Image
      {...args}
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="A beautiful landscape"
      className="w-96"
    />
  ),
};

export const Rounded: Story = {
  ...Default,
  args: {
    className: 'w-96 rounded-lg',
  },
};

export const Circular: Story = {
  render: (args) => (
    <Image
      {...args}
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="A beautiful landscape"
      className="w-48 h-48 rounded-full object-cover"
    />
  ),
};
