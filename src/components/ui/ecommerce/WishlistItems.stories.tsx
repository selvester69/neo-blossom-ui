import type { Meta, StoryObj } from '@storybook/react';
import { WishlistItems } from './WishlistItems';
import { WishlistItemData } from './WishlistItem';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof WishlistItems> = {
  title: 'Ecommerce/WishlistItems',
  component: WishlistItems,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WishlistItems>;

const sampleItems: WishlistItemData[] = [
    {
        id: '1',
        name: 'Cyber-Enhanced Quantum Keyboard',
        price: 199.99,
        image: '/placeholder.svg?id=1',
        variant: 'Color: Neon Green',
    },
    {
        id: '2',
        name: 'Hyper-Dimensional Mouse',
        price: 79.99,
        image: '/placeholder.svg?id=2',
    },
    {
        id: '3',
        name: 'Temporal Shift Headset',
        price: 299.99,
        image: '/placeholder.svg?id=3',
        variant: 'Style: Over-ear',
    },
];

const InteractiveStory = (args) => {
    const [items, setItems] = useState(args.items);

    const handleAddToCart = (itemId: string) => {
      action('onAddToCart')(itemId);
    };

    const handleRemove = (itemId: string) => {
      setItems(items.filter(item => item.id !== itemId));
      action('onRemove')(itemId);
    };

    return <WishlistItems {...args} items={items} onAddToCart={handleAddToCart} onRemove={handleRemove} />;
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
