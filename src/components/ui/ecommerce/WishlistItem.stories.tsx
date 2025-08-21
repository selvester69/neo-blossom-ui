import type { Meta, StoryObj } from '@storybook/react';
import { WishlistItem, WishlistItemData } from './WishlistItem';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof WishlistItem> = {
  title: 'Ecommerce/WishlistItem',
  component: WishlistItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WishlistItem>;

const sampleItem: WishlistItemData = {
  id: '1',
  name: 'Cyber-Enhanced Quantum Keyboard',
  price: 199.99,
  image: '/placeholder.svg',
  variant: 'Color: Neon Green',
};

export const Default: Story = {
  args: {
    item: sampleItem,
    onAddToCart: action('onAddToCart'),
    onRemove: action('onRemove'),
  },
};

export const WithoutVariant: Story = {
    args: {
      item: { ...sampleItem, variant: undefined },
      onAddToCart: action('onAddToCart'),
      onRemove: action('onRemove'),
    },
};
