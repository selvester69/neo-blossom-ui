import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard, Product } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Ecommerce/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const sampleProduct: Product = {
  id: '1',
  name: 'Cyber-Enhanced Quantum Keyboard',
  description: 'A keyboard that types in the past, present, and future.',
  price: 199.99,
  image: '/placeholder.svg',
  category: 'Keyboards',
};

export const Default: Story = {
  args: {
    product: sampleProduct,
  },
};
