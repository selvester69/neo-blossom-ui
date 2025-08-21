import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '../components/ui/toaster';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: (args) => {
    const { toast } = useToast();
    return (
      <div>
        <Toaster {...args} />
        <p>
          The Toaster component is the container for all the toasts. It is
          usually placed at the root of the application.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'A toast',
              description: 'This is a toast message.',
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
};
