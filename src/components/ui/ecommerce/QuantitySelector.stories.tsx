import type { Meta, StoryObj } from '@storybook/react';
import { QuantitySelector } from './QuantitySelector';
import { useState } from 'react';

const meta: Meta<typeof QuantitySelector> = {
  title: 'Ecommerce/QuantitySelector',
  component: QuantitySelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof QuantitySelector>;

const InteractiveStory = (args) => {
  const [quantity, setQuantity] = useState(args.quantity || 1);
  return <QuantitySelector {...args} quantity={quantity} onQuantityChange={setQuantity} />;
};

export const Default: Story = {
  render: (args) => <InteractiveStory {...args} />,
  args: {
    quantity: 1,
  },
};

export const WithDifferentMinMax: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
      quantity: 5,
      min: 5,
      max: 10,
    },
};
