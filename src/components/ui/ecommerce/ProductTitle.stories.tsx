import type { Meta, StoryObj } from '@storybook/react';
import { ProductTitle } from './ProductTitle';

const meta: Meta<typeof ProductTitle> = {
  title: 'Ecommerce/ProductTitle',
  component: ProductTitle,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductTitle>;

export const Default: Story = {
  args: {
    children: 'Cyber-Enhanced Quantum Keyboard',
  },
};

export const AsH1: Story = {
  args: {
    as: 'h1',
    children: 'This is an H1 Product Title',
  },
};

export const AsH2: Story = {
  args: {
    as: 'h2',
    children: 'This is an H2 Product Title',
  },
};
