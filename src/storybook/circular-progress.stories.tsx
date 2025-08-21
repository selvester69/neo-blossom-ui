import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { CircularProgress } from '../components/ui/circular-progress';
import { Slider } from '../components/ui/slider';

const CircularProgressDemo = () => {
    const [progress, setProgress] = React.useState(25);

    return (
        <div className="w-96 flex flex-col items-center gap-8">
            <div className="relative">
                <CircularProgress value={progress} size={120} strokeWidth={12} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">{progress}%</span>
                </div>
            </div>

            <div className="w-full">
                <Slider
                    defaultValue={[progress]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setProgress(value[0])}
                />
            </div>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/CircularProgress',
  component: CircularProgressDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
