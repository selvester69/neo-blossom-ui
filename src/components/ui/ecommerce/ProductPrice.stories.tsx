import type { Meta, StoryObj } from '@storybook/react';
import { ProductPrice } from './ProductPrice';

const meta: Meta<typeof ProductPrice> = {
  title: 'Ecommerce/ProductPrice',
  component: ProductPrice,
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: { type: 'number' },
    },
    currency: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductPrice>;

export const Default: Story = {
  args: {
    price: 199.99,
  },
};

export const WithEuroCurrency: Story = {
  args: {
    price: 150.00,
    currency: '€',
  },
};

export const ZeroPrice: Story = {
  args: {
    price: 0,
  },
};
