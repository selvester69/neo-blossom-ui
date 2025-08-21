import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Skeleton } from '../components/ui/skeleton';

const SkeletonCompositionsDemo = ({ variant }: { variant: 'pulse' | 'shimmer' }) => {
    return (
        <div className="w-[700px] space-y-8">
            <div>
                <h3 className="font-bold mb-2">Text Skeleton</h3>
                <div className="space-y-2">
                    <Skeleton variant={variant} className="h-4 w-[250px]" />
                    <Skeleton variant={variant} className="h-4 w-[200px]" />
                </div>
            </div>
            <div>
                <h3 className="font-bold mb-2">Avatar/Card Skeleton</h3>
                <div className="flex items-center space-x-4">
                    <Skeleton variant={variant} className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton variant={variant} className="h-4 w-[250px]" />
                        <Skeleton variant={variant} className="h-4 w-[200px]" />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-bold mb-2">List Skeleton</h3>
                <div className="space-y-3">
                    <Skeleton variant={variant} className="h-[50px] w-full rounded-xl" />
                    <Skeleton variant={variant} className="h-[50px] w-full rounded-xl" />
                    <Skeleton variant={variant} className="h-[50px] w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/Skeleton Compositions',
  component: SkeletonCompositionsDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['pulse', 'shimmer'],
    },
  }
};

export default meta;

export const Pulse: StoryObj = {
    args: {
        variant: 'pulse',
    }
};

export const Shimmer: StoryObj = {
    args: {
        variant: 'shimmer',
    }
};
