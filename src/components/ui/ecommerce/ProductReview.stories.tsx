import type { Meta, StoryObj } from '@storybook/react';
import { ProductReview, Review } from './ProductReview';

const meta: Meta<typeof ProductReview> = {
  title: 'Ecommerce/ProductReview',
  component: ProductReview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProductReview>;

const sampleReview: Review = {
  id: '1',
  author: 'Jules Winnfield',
  avatarUrl: 'https://i.pravatar.cc/150?u=jules',
  rating: 5,
  date: '2 weeks ago',
  title: 'This is a tasty burger!',
  body: 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children.',
};

export const Default: Story = {
  args: {
    review: sampleReview,
  },
};

export const WithoutAvatar: Story = {
  args: {
    review: {
      ...sampleReview,
      avatarUrl: undefined,
    },
  },
};

export const ShortReview: Story = {
  args: {
    review: {
      ...sampleReview,
      author: 'Vincent Vega',
      avatarUrl: 'https://i.pravatar.cc/150?u=vincent',
      rating: 4,
      title: 'I mean, it\'s a pretty good burger.',
      body: 'I can\'t believe this is what they call a Quarter Pounder with Cheese in Paris.',
    },
  },
};
