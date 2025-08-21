import type { Meta, StoryObj } from '@storybook/react';
import { ProductSort, SortOption } from './ProductSort';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ProductSort> = {
  title: 'Ecommerce/ProductSort',
  component: ProductSort,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductSort>;

const sortOptions: SortOption[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating_desc', label: 'Avg. Customer Review' },
    { value: 'newest', label: 'Newest Arrivals' },
];

export const Default: Story = {
  args: {
    options: sortOptions,
    onSortChange: action('onSortChange'),
  },
};

export const WithDefaultValue: Story = {
    args: {
      ...Default.args,
      defaultValue: 'price_asc',
    },
};
