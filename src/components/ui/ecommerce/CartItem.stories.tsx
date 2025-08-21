import type { Meta, StoryObj } from '@storybook/react';
import { CartItem, CartItemData } from './CartItem';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof CartItem> = {
  title: 'Ecommerce/CartItem',
  component: CartItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartItem>;

const sampleItem: CartItemData = {
  id: '1',
  name: 'Cyber-Enhanced Quantum Keyboard',
  price: 199.99,
  image: '/placeholder.svg',
  quantity: 1,
  variant: 'Color: Neon Green',
};

const InteractiveStory = (args) => {
  const [item, setItem] = useState(args.item);

  const handleQuantityChange = (quantity: number) => {
    setItem({ ...item, quantity });
    action('onQuantityChange')(quantity);
  };

  return <CartItem {...args} item={item} onQuantityChange={handleQuantityChange} />;
};

export const Default: Story = {
  render: (args) => <InteractiveStory {...args} />,
  args: {
    item: sampleItem,
    onRemove: action('onRemove'),
  },
};

export const WithoutVariant: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
      item: { ...sampleItem, variant: undefined },
      onRemove: action('onRemove'),
    },
};
