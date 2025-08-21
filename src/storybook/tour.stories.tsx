import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Tour } from '../components/ui/tour';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useTour, TourStep } from '../hooks/use-tour';

const TourDemo = () => {
  const ref1 = React.useRef<HTMLButtonElement>(null);
  const ref2 = React.useRef<HTMLDivElement>(null);
  const ref3 = React.useRef<HTMLButtonElement>(null);

  const { start, stop, nextStep, prevStep, ...tourProps } = useTour({
    steps: [
      {
        targetRef: ref1,
        content: (
          <div className="p-4 bg-background rounded-lg shadow-lg max-w-xs m-4">
            <p className="mb-4">This is the first step. Click the button to start the tour.</p>
            <div className="flex justify-end">
              <Button onClick={() => nextStep()}>Next</Button>
            </div>
          </div>
        ),
      },
      {
        targetRef: ref2,
        content: (
          <div className="p-4 bg-background rounded-lg shadow-lg max-w-xs m-4">
            <p className="mb-4">This is the second step, highlighting a card.</p>
            <div className="flex justify-between">
              <Button onClick={() => prevStep()} variant="outline">Previous</Button>
              <Button onClick={() => nextStep()}>Next</Button>
            </div>
          </div>
        ),
      },
      {
        targetRef: ref3,
        content: (
          <div className="p-4 bg-background rounded-lg shadow-lg max-w-xs m-4">
            <p className="mb-4">This is the final step. Click finish to end the tour.</p>
            <div className="flex justify-between">
              <Button onClick={() => prevStep()} variant="outline">Previous</Button>
              <Button onClick={() => stop()}>Finish</Button>
            </div>
          </div>
        ),
      },
    ],
  });

  return (
    <div className="p-8 w-[800px] h-[400px]">
      <div className="flex justify-between items-start mb-8">
        <Button ref={ref1} onClick={start}>
          Start Tour
        </Button>

        <Card ref={ref2} className="w-64">
          <CardHeader>
            <CardTitle>A Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a card that can be highlighted.</p>
          </CardContent>
        </Card>

        <Button ref={ref3} variant="destructive">
          Another Button
        </Button>
      </div>

      <Tour {...tourProps} onClose={stop} />
    </div>
  );
};


const meta: Meta = {
  title: 'UI/Tour',
  component: TourDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
