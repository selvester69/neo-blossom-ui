import type { Meta, StoryObj } from '@storybook/react';
import { ProductGallery } from './ProductGallery';

const meta: Meta<typeof ProductGallery> = {
  title: 'Ecommerce/ProductGallery',
  component: ProductGallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductGallery>;

const sampleImages = [
  { src: '/placeholder.svg?id=1', alt: 'Image 1' },
  { src: '/placeholder.svg?id=2', alt: 'Image 2' },
  { src: '/placeholder.svg?id=3', alt: 'Image 3' },
  { src: '/placeholder.svg?id=4', alt: 'Image 4' },
  { src: '/placeholder.svg?id=5', alt: 'Image 5' },
];

export const Default: Story = {
  args: {
    images: sampleImages,
  },
};

export const SingleImage: Story = {
  args: {
    images: [sampleImages[0]],
  },
};

export const NoImages: Story = {
  args: {
    images: [],
  },
};
