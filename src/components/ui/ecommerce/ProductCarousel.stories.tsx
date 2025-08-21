import type { Meta, StoryObj } from '@storybook/react';
import { ProductCarousel } from './ProductCarousel';
import { Product } from './ProductCard';

const meta: Meta<typeof ProductCarousel> = {
  title: 'Ecommerce/ProductCarousel',
  component: ProductCarousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductCarousel>;

const sampleProducts: Product[] = [
    { id: '1', name: 'Product 1', description: 'Description 1', price: 10, image: '/placeholder.svg?id=1', category: 'Category A' },
    { id: '2', name: 'Product 2', description: 'Description 2', price: 20, image: '/placeholder.svg?id=2', category: 'Category A' },
    { id: '3', name: 'Product 3', description: 'Description 3', price: 30, image: '/placeholder.svg?id=3', category: 'Category B' },
    { id: '4', name: 'Product 4', description: 'Description 4', price: 40, image: '/placeholder.svg?id=4', category: 'Category B' },
    { id: '5', name: 'Product 5', description: 'Description 5', price: 50, image: '/placeholder.svg?id=5', category: 'Category C' },
    { id: '6', name: 'Product 6', description: 'Description 6', price: 60, image: '/placeholder.svg?id=6', category: 'Category C' },
];

export const FeaturedProducts: Story = {
  args: {
    title: 'Featured Products',
    products: sampleProducts,
  },
};

export const RelatedProducts: Story = {
    args: {
      title: 'Related Products',
      products: sampleProducts.slice(0, 4),
    },
};

export const NoProducts: Story = {
    args: {
        title: 'Trending Products',
        products: [],
    },
};
