import type { Meta, StoryObj } from '@storybook/react';
import { ProductDescription } from './ProductDescription';

const meta: Meta<typeof ProductDescription> = {
  title: 'Ecommerce/ProductDescription',
  component: ProductDescription,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductDescription>;

export const Default: Story = {
  args: {
    children: 'This is a detailed description of the Cyber-Enhanced Quantum Keyboard. It has features that will blow your mind, and some that will even travel back in time to fix your typos.',
  },
};

export const ShortDescription: Story = {
  args: {
    children: 'A keyboard from the future.',
  },
};
