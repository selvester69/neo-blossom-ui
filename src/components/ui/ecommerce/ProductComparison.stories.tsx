import type { Meta, StoryObj } from '@storybook/react';
import { ProductComparison, ProductToCompare } from './ProductComparison';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ProductComparison> = {
  title: 'Ecommerce/ProductComparison',
  component: ProductComparison,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductComparison>;

const sampleProducts: ProductToCompare[] = [
    {
        id: '1',
        name: 'Cyber-Enhanced Quantum Keyboard',
        image: '/placeholder.svg?id=1',
        price: 199.99,
        rating: 4.5,
        features: {
            'Backlight': 'RGB',
            'Switches': 'Mechanical',
            'Wireless': 'Yes',
        },
    },
    {
        id: '2',
        name: 'Hyper-Dimensional Mouse',
        image: '/placeholder.svg?id=2',
        price: 79.99,
        rating: 4.2,
        features: {
            'Backlight': 'Blue',
            'Switches': 'Optical',
            'Wireless': 'Yes',
        },
    },
    {
        id: '3',
        name: 'Temporal Shift Headset',
        image: '/placeholder.svg?id=3',
        price: 299.99,
        rating: 4.8,
        features: {
            'Backlight': 'None',
            'Switches': 'N/A',
            'Wireless': 'No',
        },
    },
];

const allFeatures = ['Backlight', 'Switches', 'Wireless'];

const InteractiveStory = (args) => {
    const [products, setProducts] = useState(args.products);

    const handleRemove = (productId: string) => {
      setProducts(products.filter(p => p.id !== productId));
      action('onRemove')(productId);
    };

    return <ProductComparison {...args} products={products} onRemove={handleRemove} />;
  };

export const Default: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        products: sampleProducts,
        features: allFeatures,
    },
};

export const TwoProducts: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        products: sampleProducts.slice(0, 2),
        features: allFeatures,
    },
};

export const NoProducts: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        products: [],
        features: allFeatures,
    },
};
