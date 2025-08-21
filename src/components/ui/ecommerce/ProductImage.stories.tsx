import type { Meta, StoryObj } from '@storybook/react';
import { ProductImage } from './ProductImage';

const meta: Meta<typeof ProductImage> = {
  title: 'Ecommerce/ProductImage',
  component: ProductImage,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number', min: 0.5, max: 2, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductImage>;

export const Default: Story = {
  args: {
    src: '/placeholder.svg',
    alt: 'A placeholder image',
    ratio: 1,
  },
};

export const Landscape: Story = {
  args: {
    src: '/placeholder.svg',
    alt: 'A placeholder image',
    ratio: 16 / 9,
  },
};

export const Portrait: Story = {
  args: {
    src: '/placeholder.svg',
    alt: 'A placeholder image',
    ratio: 4 / 5,
  },
};
