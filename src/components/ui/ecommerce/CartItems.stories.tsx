import type { Meta, StoryObj } from '@storybook/react';
import { CartItems } from './CartItems';
import { CartItemData } from './CartItem';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof CartItems> = {
  title: 'Ecommerce/CartItems',
  component: CartItems,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartItems>;

const sampleItems: CartItemData[] = [
  {
    id: '1',
    name: 'Cyber-Enhanced Quantum Keyboard',
    price: 199.99,
    image: '/placeholder.svg?id=1',
    quantity: 1,
    variant: 'Color: Neon Green',
  },
  {
    id: '2',
    name: 'Hyper-Dimensional Mouse',
    price: 79.99,
    image: '/placeholder.svg?id=2',
    quantity: 2,
  },
  {
    id: '3',
    name: 'Temporal Shift Headset',
    price: 299.99,
    image: '/placeholder.svg?id=3',
    quantity: 1,
    variant: 'Style: Over-ear',
  },
];

const InteractiveStory = (args) => {
  const [items, setItems] = useState(args.items);

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setItems(items.map(item => item.id === itemId ? { ...item, quantity } : item));
    action('onQuantityChange')(itemId, quantity);
  };

  const handleRemove = (itemId: string) => {
    setItems(items.filter(item => item.id !== itemId));
    action('onRemove')(itemId);
  };

  return <CartItems {...args} items={items} onQuantityChange={handleQuantityChange} onRemove={handleRemove} />;
};

export const Default: Story = {
  render: (args) => <InteractiveStory {...args} />,
  args: {
    items: sampleItems,
  },
};

export const SingleItem: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
      items: [sampleItems[0]],
    },
};

export const NoItems: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
      items: [],
    },
};
