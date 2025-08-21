import type { Meta, StoryObj } from '@storybook/react';
import { BrandCard, Brand } from './BrandCard';

const meta: Meta<typeof BrandCard> = {
  title: 'Ecommerce/BrandCard',
  component: BrandCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BrandCard>;

const sampleBrand: Brand = {
  id: '1',
  name: 'CyberCorp',
  logo: '/placeholder.svg?text=CyberCorp',
  href: '#',
};

export const Default: Story = {
  args: {
    brand: sampleBrand,
  },
};
