import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { StarRating } from '../components/ui/star-rating';

const StarRatingDemo = () => {
    const [rating, setRating] = React.useState(3);

    return (
        <div className="w-96">
            <StarRating rating={rating} onRatingChange={setRating} />
            <p className="mt-4">The current rating is: {rating}</p>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/StarRating',
  component: StarRatingDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
