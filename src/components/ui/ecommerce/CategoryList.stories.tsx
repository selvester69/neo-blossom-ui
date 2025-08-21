import type { Meta, StoryObj } from '@storybook/react';
import { CategoryList } from './CategoryList';
import { Category } from './CategoryCard';

const meta: Meta<typeof CategoryList> = {
  title: 'Ecommerce/CategoryList',
  component: CategoryList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryList>;

const sampleCategories: Pick<Category, 'id' | 'name' | 'href'>[] = [
    { id: '1', name: 'Keyboards', href: '#' },
    { id: '2', name: 'Mice', href: '#' },
    { id: '3', name: 'Headsets', href: '#' },
    { id: '4', name: 'Monitors', href: '#' },
    { id: '5', name: 'Controllers', href: '#' },
    { id: '6', name: 'Webcams', href: '#' },
];

export const Default: Story = {
  args: {
    categories: sampleCategories,
  },
};

export const NoItems: Story = {
    args: {
        categories: [],
    },
};
