import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../components/ui/image';
import { BackgroundImage } from '../components/ui/background-image';

const meta: Meta<typeof Image> = {
  title: 'UI/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'circular'],
    },
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
    variant: 'rounded',
  },
};

export const Circular: Story = {
  ...Default,
  args: {
    variant: 'circular',
    className: 'w-48 h-48',
  },
};

export const Background: StoryObj<typeof BackgroundImage> = {
  render: (args) => (
    <BackgroundImage
      {...args}
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      className="w-96 h-64 flex items-center justify-center"
    >
      <h2 className="text-white text-2xl font-bold">Hero Title</h2>
    </BackgroundImage>
  ),
};
