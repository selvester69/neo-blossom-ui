import type { Meta, StoryObj } from '@storybook/react';
import { BrandGrid } from './BrandGrid';
import { Brand } from './BrandCard';

const meta: Meta<typeof BrandGrid> = {
  title: 'Ecommerce/BrandGrid',
  component: BrandGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BrandGrid>;

const sampleBrands: Brand[] = [
    { id: '1', name: 'CyberCorp', logo: '/placeholder.svg?text=CyberCorp', href: '#' },
    { id: '2', name: 'DimensionX', logo: '/placeholder.svg?text=DimensionX', href: '#' },
    { id: '3', name: 'QuantumLeap', logo: '/placeholder.svg?text=QuantumLeap', href: '#' },
    { id: '4', name: 'StellarGear', logo: '/placeholder.svg?text=StellarGear', href: '#' },
    { id: '5', name: 'Nova', logo: '/placeholder.svg?text=Nova', href: '#' },
    { id: '6', name: 'Echo', logo: '/placeholder.svg?text=Echo', href: '#' },
];

export const Default: Story = {
  args: {
    brands: sampleBrands,
  },
};

export const FewerItems: Story = {
    args: {
        brands: sampleBrands.slice(0, 3),
    },
};

export const NoItems: Story = {
    args: {
        brands: [],
    },
};
