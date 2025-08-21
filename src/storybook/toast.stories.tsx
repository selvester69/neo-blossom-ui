import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/ui/toast';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';

const meta: Meta<typeof Toast> = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => {
    const { toast } = useToast();
    return (
      <div>
        <Toaster />
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up ',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              action: (
                <button className="px-3 py-1 bg-green-500 text-white rounded-md">
                  Undo
                </button>
              ),
            });
          }}
        >
          Show Toast
        </Button>
      </div>
    );
  },
};
