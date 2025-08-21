import type { Meta, StoryObj } from '@storybook/react';
import { ReviewForm } from './ReviewForm';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ReviewForm> = {
  title: 'Ecommerce/ReviewForm',
  component: ReviewForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ReviewForm>;

export const Default: Story = {
  args: {
    onSubmit: action('onSubmit'),
  },
};
