import type { Meta, StoryObj } from '@storybook/react';
import { WishlistIcon } from './WishlistIcon';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof WishlistIcon> = {
  title: 'Ecommerce/WishlistIcon',
  component: WishlistIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isWishlisted: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof WishlistIcon>;

export const Default: Story = {
  args: {
    isWishlisted: false,
    onClick: action('onClick'),
  },
};

export const Wishlisted: Story = {
    args: {
      isWishlisted: true,
      onClick: action('onClick'),
    },
};

const InteractiveStory = (args) => {
    const [isWishlisted, setIsWishlisted] = useState(args.isWishlisted || false);

    const handleClick = (e) => {
        setIsWishlisted(!isWishlisted);
        action('onClick')(e);
    }

    return <WishlistIcon {...args} isWishlisted={isWishlisted} onClick={handleClick} />;
};

export const Interactive: Story = {
    render: (args) => <InteractiveStory {...args} />,
    args: {
        isWishlisted: false,
    },
};
