import type { Meta, StoryObj } from '@storybook/react';
import { ReviewSummary } from './ReviewSummary';

const meta: Meta<typeof ReviewSummary> = {
  title: 'Ecommerce/ReviewSummary',
  component: ReviewSummary,
  tags: ['autodocs'],
  argTypes: {
    averageRating: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
    reviewCount: {
      control: { type: 'number', min: 0, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReviewSummary>;

export const Default: Story = {
  args: {
    averageRating: 4.2,
    reviewCount: 123,
  },
};

export const SingleReview: Story = {
  args: {
    averageRating: 5,
    reviewCount: 1,
  },
};

export const NoReviews: Story = {
  args: {
    averageRating: 0,
    reviewCount: 0,
  },
};
