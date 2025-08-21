import type { Meta, StoryObj } from '@storybook/react';
import { CategoryGrid } from './CategoryGrid';
import { Category } from './CategoryCard';

const meta: Meta<typeof CategoryGrid> = {
  title: 'Ecommerce/CategoryGrid',
  component: CategoryGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryGrid>;

const sampleCategories: Category[] = [
    { id: '1', name: 'Keyboards', image: '/placeholder.svg?text=Keyboards', href: '#' },
    { id: '2', name: 'Mice', image: '/placeholder.svg?text=Mice', href: '#' },
    { id: '3', name: 'Headsets', image: '/placeholder.svg?text=Headsets', href: '#' },
    { id: '4', name: 'Monitors', image: '/placeholder.svg?text=Monitors', href: '#' },
    { id: '5', name: 'Controllers', image: '/placeholder.svg?text=Controllers', href: '#' },
    { id: '6', name: 'Webcams', image: '/placeholder.svg?text=Webcams', href: '#' },
];

export const Default: Story = {
  args: {
    categories: sampleCategories,
  },
};

export const FewerItems: Story = {
    args: {
        categories: sampleCategories.slice(0, 3),
    },
};

export const NoItems: Story = {
    args: {
        categories: [],
    },
};
