import type { Meta, StoryObj } from '@storybook/react';
import { ReviewList } from './ReviewList';
import { Review } from './ProductReview';

const meta: Meta<typeof ReviewList> = {
  title: 'Ecommerce/ReviewList',
  component: ReviewList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReviewList>;

const sampleReviews: Review[] = [
  {
    id: '1',
    author: 'Jules Winnfield',
    avatarUrl: 'https://i.pravatar.cc/150?u=jules',
    rating: 5,
    date: '2 weeks ago',
    title: 'This is a tasty burger!',
    body: 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.',
  },
  {
    id: '2',
    author: 'Vincent Vega',
    avatarUrl: 'https://i.pravatar.cc/150?u=vincent',
    rating: 4,
    date: '3 weeks ago',
    title: 'Pretty good.',
    body: 'I can\'t believe this is what they call a Quarter Pounder with Cheese in Paris.',
  },
  {
    id: '3',
    author: 'Mia Wallace',
    avatarUrl: undefined,
    rating: 4.5,
    date: '1 month ago',
    title: 'Don\'t be a square.',
    body: 'I said goddamn! Goddamn.',
  },
];

export const Default: Story = {
  args: {
    reviews: sampleReviews,
  },
};

export const SingleReview: Story = {
  args: {
    reviews: [sampleReviews[0]],
  },
};

export const NoReviews: Story = {
  args: {
    reviews: [],
  },
};
