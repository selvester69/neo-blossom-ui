import type { Meta, StoryObj } from '@storybook/react';
import { ProductSearch } from './ProductSearch';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ProductSearch> = {
  title: 'Ecommerce/ProductSearch',
  component: ProductSearch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductSearch>;

export const Default: Story = {
  args: {
    onSearch: action('onSearch'),
  },
};
