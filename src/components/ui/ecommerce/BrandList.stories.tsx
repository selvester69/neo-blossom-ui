import type { Meta, StoryObj } from '@storybook/react';
import { BrandList } from './BrandList';
import { Brand } from './BrandCard';

const meta: Meta<typeof BrandList> = {
  title: 'Ecommerce/BrandList',
  component: BrandList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BrandList>;

const sampleBrands: Pick<Brand, 'id' | 'name' | 'href'>[] = [
    { id: '1', name: 'CyberCorp', href: '#' },
    { id: '2', name: 'DimensionX', href: '#' },
    { id: '3', name: 'QuantumLeap', href: '#' },
    { id: '4', name: 'StellarGear', href: '#' },
    { id: '5', name: 'Nova', href: '#' },
    { id: '6', name: 'Echo', href: '#' },
];

export const Default: Story = {
  args: {
    brands: sampleBrands,
  },
};

export const NoItems: Story = {
    args: {
        brands: [],
    },
};
