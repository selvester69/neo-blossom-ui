import type { Meta, StoryObj } from '@storybook/react';
import { CompareList } from './CompareList';
import { CompareItemData } from './CompareList';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof CompareList> = {
  title: 'Ecommerce/CompareList',
  component: CompareList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CompareList>;

const sampleItems: CompareItemData[] = [
    {
        id: '1',
        name: 'Cyber-Enhanced Quantum Keyboard',
        image: '/placeholder.svg?id=1',
    },
    {
        id: '2',
        name: 'Hyper-Dimensional Mouse',
        image: '/placeholder.svg?id=2',
    },
    {
        id: '3',
        name: 'Temporal Shift Headset',
        image: '/placeholder.svg?id=3',
    },
];

const InteractiveStory = (args) => {
    const [items, setItems] = useState(args.items);

    const handleRemove = (itemId: string) => {
      setItems(items.filter(item => item.id !== itemId));
      action('onRemove')(itemId);
    };

    return <CompareList {...args} items={items} onRemove={handleRemove} />;
  };

export const Default: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        items: sampleItems,
    },
};

export const WithoutImages: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        items: sampleItems.map(item => ({ ...item, image: undefined })),
    },
};

export const NoItems: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        items: [],
    },
};
