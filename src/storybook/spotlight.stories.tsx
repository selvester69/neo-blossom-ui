import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Spotlight } from '../components/ui/spotlight';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const SpotlightDemo = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const refs = [
    React.useRef<HTMLButtonElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLButtonElement>(null),
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % refs.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + refs.length) % refs.length);
  };

  return (
    <div className="p-8 w-[800px] h-[400px]">
      <div className="flex justify-between items-start mb-8">
        <Button ref={refs[0]} onClick={() => {setIsVisible(true); setActiveIndex(0);}}>
          Start Tour
        </Button>

        <Card ref={refs[1]} className="w-64">
          <CardHeader>
            <CardTitle>A Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is a card that can be highlighted.</p>
          </CardContent>
        </Card>

        <Button ref={refs[2]} variant="destructive">
          Another Button
        </Button>
      </div>

      <Spotlight
        isVisible={isVisible}
        targetRef={refs[activeIndex]}
        onClose={() => setIsVisible(false)}
        padding={10}
        radius={8}
      >
        <div className="p-4 bg-background rounded-lg shadow-lg max-w-xs m-4">
            <p className="mb-4">This is step {activeIndex + 1} of the tour.</p>
            <div className="flex justify-between">
                <Button onClick={handlePrev} variant="outline">Previous</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </div>
      </Spotlight>
    </div>
  );
};


const meta: Meta = {
  title: 'UI/Spotlight',
  component: SpotlightDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
