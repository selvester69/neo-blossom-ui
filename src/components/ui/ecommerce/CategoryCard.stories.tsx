import type { Meta, StoryObj } from '@storybook/react';
import { CategoryCard, Category } from './CategoryCard';

const meta: Meta<typeof CategoryCard> = {
  title: 'Ecommerce/CategoryCard',
  component: CategoryCard,
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
type Story = StoryObj<typeof CategoryCard>;

const sampleCategory: Category = {
  id: '1',
  name: 'Keyboards',
  image: '/placeholder.svg?text=Keyboards',
  href: '#',
};

export const Default: Story = {
  args: {
    category: sampleCategory,
  },
};
