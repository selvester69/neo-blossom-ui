import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';
import { useState } from 'react';

const meta: Meta<typeof StarRating> = {
  title: 'Ecommerce/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
    totalStars: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
    },
    size: {
      control: { type: 'number', min: 10, max: 50, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {
    rating: 3.5,
  },
};

export const TenStars: Story = {
  args: {
    rating: 7.2,
    totalStars: 10,
  },
};

export const Large: Story = {
  args: {
    rating: 4,
    size: 40,
  },
};

const InteractiveStory = () => {
  const [rating, setRating] = useState(3);
  return <StarRating rating={rating} onRatingChange={setRating} />;
};

export const Interactive: Story = {
    render: () => <InteractiveStory />,
};
