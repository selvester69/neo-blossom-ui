import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../components/ui/progress';
import { Skeleton } from '../components/ui/skeleton';
import { Status } from '../components/ui/status';

const meta: Meta = {
  title: 'UI/LoadingStatus',
  component: () => null, // No single component, just a demonstration
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const WithProgress: StoryObj = {
  render: () => (
    <>
      <Status>Loading...</Status>
      <Progress value={45} />
    </>
  ),
};

export const WithSkeleton: StoryObj = {
  render: () => (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-4 w-[100px]" />
    </div>
  ),
};
