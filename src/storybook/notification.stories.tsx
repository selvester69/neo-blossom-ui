import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/ui/button';
import { toast } from '../components/ui/sonner';

const meta: Meta = {
  title: 'UI/Notification',
  component: () => (
    <div>
      <p className="mb-4">
        The <code>Toaster</code> component acts as the Notification Center. Notifications are triggered using the <code>toast</code> function.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Button onClick={() => toast('A default notification has been triggered.')}>
          Default Notification
        </Button>
        <Button variant="success" onClick={() => toast.success('A success notification has been triggered.')}>
          Success Notification
        </Button>
        <Button variant="destructive" onClick={() => toast.error('An error notification has been triggered.')}>
          Error Notification
        </Button>
        <Button variant="info" onClick={() => toast.info('An info notification has been triggered.')}>
          Info Notification
        </Button>
        <Button variant="warning" onClick={() => toast.warning('A warning notification has been triggered.')}>
          Warning Notification
        </Button>
      </div>
    </div>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
