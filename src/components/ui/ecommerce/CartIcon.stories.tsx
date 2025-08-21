import type { Meta, StoryObj } from '@storybook/react';
import { CartIcon } from './CartIcon';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof CartIcon> = {
  title: 'Ecommerce/CartIcon',
  component: CartIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    count: {
      control: { type: 'number', min: 0, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CartIcon>;

export const Default: Story = {
  args: {
    onClick: action('onClick'),
  },
};

export const WithItems: Story = {
  args: {
    ...Default.args,
    count: 3,
  },
};

export const ManyItems: Story = {
  args: {
    ...Default.args,
    count: 120,
  },
};

export const NoItems: Story = {
    args: {
      ...Default.args,
      count: 0,
    },
  };
