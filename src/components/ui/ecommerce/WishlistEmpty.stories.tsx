import type { Meta, StoryObj } from '@storybook/react';
import { WishlistEmpty } from './WishlistEmpty';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof WishlistEmpty> = {
  title: 'Ecommerce/WishlistEmpty',
  component: WishlistEmpty,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof WishlistEmpty>;

export const Default: Story = {
  args: {},
};

export const WithButton: Story = {
    args: {
        onContinueShopping: action('onContinueShopping'),
    },
};
