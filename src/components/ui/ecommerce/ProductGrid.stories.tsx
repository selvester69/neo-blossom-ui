import type { Meta, StoryObj } from '@storybook/react';
import { ProductGrid } from './ProductGrid';
import { Product } from './ProductCard';

const meta: Meta<typeof ProductGrid> = {
  title: 'Ecommerce/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductGrid>;

const sampleProducts: Product[] = [
    {
        id: '1',
        name: 'Cyber-Enhanced Quantum Keyboard',
        description: 'A keyboard that types in the past, present, and future.',
        price: 199.99,
        image: '/placeholder.svg?id=1',
        category: 'Keyboards',
    },
    {
        id: '2',
        name: 'Hyper-Dimensional Mouse',
        description: 'A mouse that clicks in multiple dimensions.',
        price: 79.99,
        image: '/placeholder.svg?id=2',
        category: 'Mice',
    },
    {
        id: '3',
        name: 'Temporal Shift Headset',
        description: 'Listen to the sounds of tomorrow, yesterday.',
        price: 299.99,
        image: '/placeholder.svg?id=3',
        category: 'Headsets',
    },
    {
        id: '4',
        name: 'Quantum Entanglement Monitor',
        description: 'See what you see, even when you\'re not looking.',
        price: 499.99,
        image: '/placeholder.svg?id=4',
        category: 'Monitors',
    },
];

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};

export const FewerItems: Story = {
    args: {
        products: sampleProducts.slice(0, 2),
    },
};

export const NoItems: Story = {
    args: {
        products: [],
    },
};
