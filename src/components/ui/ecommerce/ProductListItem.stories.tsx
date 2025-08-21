import type { Meta, StoryObj } from '@storybook/react';
import { ProductListItem } from './ProductListItem';
import { Product } from './ProductCard';

const meta: Meta<typeof ProductListItem> = {
  title: 'Ecommerce/ProductListItem',
  component: ProductListItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductListItem>;

const sampleProduct: Product & { rating?: number } = {
    id: '1',
    name: 'Cyber-Enhanced Quantum Keyboard',
    description: 'A keyboard that types in the past, present, and future. Features include time-traveling keys, a quantum entanglement spacebar, and a sleek, retro-futuristic design.',
    price: 199.99,
    image: '/placeholder.svg?id=1',
    category: 'Keyboards',
    rating: 4.5,
};

export const Default: Story = {
  args: {
    product: sampleProduct,
  },
};

export const WithoutRating: Story = {
    args: {
        product: { ...sampleProduct, rating: undefined },
    },
};
