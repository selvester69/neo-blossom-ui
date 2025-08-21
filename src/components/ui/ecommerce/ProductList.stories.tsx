import type { Meta, StoryObj } from '@storybook/react';
import { ProductList } from './ProductList';
import { Product } from './ProductCard';

const meta: Meta<typeof ProductList> = {
  title: 'Ecommerce/ProductList',
  component: ProductList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductList>;

const sampleProducts: (Product & { rating?: number })[] = [
    {
        id: '1',
        name: 'Cyber-Enhanced Quantum Keyboard',
        description: 'A keyboard that types in the past, present, and future.',
        price: 199.99,
        image: '/placeholder.svg?id=1',
        category: 'Keyboards',
        rating: 4.5,
    },
    {
        id: '2',
        name: 'Hyper-Dimensional Mouse',
        description: 'A mouse that clicks in multiple dimensions.',
        price: 79.99,
        image: '/placeholder.svg?id=2',
        category: 'Mice',
        rating: 4.2,
    },
    {
        id: '3',
        name: 'Temporal Shift Headset',
        description: 'Listen to the sounds of tomorrow, yesterday.',
        price: 299.99,
        image: '/placeholder.svg?id=3',
        category: 'Headsets',
        rating: 4.8,
    },
];

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};

export const SingleItem: Story = {
    args: {
        products: sampleProducts.slice(0, 1),
    },
};

export const NoItems: Story = {
    args: {
        products: [],
    },
};
