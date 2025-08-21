import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { ParallaxSlider } from '../components/ui/parallax-slider';

const slides = Array.from({ length: 5 }).map((_, index) => (
    <img src={`https://picsum.photos/id/${index + 20}/800/600`} key={index} />
));

const ParallaxSliderDemo = () => {
    return (
        <div className="w-[700px]">
            <ParallaxSlider slides={slides} options={{ loop: true }} />
        </div>
    );
}

const meta: Meta = {
  title: 'UI/ParallaxSlider',
  component: ParallaxSliderDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
