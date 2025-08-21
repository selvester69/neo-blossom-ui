import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { ZoomSlider } from '../components/ui/zoom-slider';
import { Card, CardContent } from '../components/ui/card';

const slides = Array.from({ length: 5 }).map((_, index) => (
    <Card key={index}>
        <CardContent className="flex aspect-square items-center justify-center p-6">
            <span className="text-4xl font-semibold">{index + 1}</span>
        </CardContent>
    </Card>
));

const ZoomSliderDemo = () => {
    return (
        <div className="w-[700px]">
            <ZoomSlider slides={slides} options={{ loop: true }} />
        </div>
    );
}

const meta: Meta = {
  title: 'UI/ZoomSlider',
  component: ZoomSliderDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
