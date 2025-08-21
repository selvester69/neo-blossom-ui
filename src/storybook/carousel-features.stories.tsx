import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"

const CarouselFeaturesDemo = ({ orientation, loop, autoplay, fade }: { orientation: 'horizontal' | 'vertical', loop: boolean, autoplay: boolean, fade: boolean }) => {
    const plugins = [];
    if (autoplay) {
        plugins.push(Autoplay({ delay: 2000, stopOnInteraction: true }));
    }
    if (fade) {
        plugins.push(Fade());
    }

    return (
        <div className="w-full max-w-xs p-16">
            <Carousel
                opts={{
                    align: "start",
                    loop: loop,
                }}
                orientation={orientation}
                plugins={plugins}
                className="w-full"
            >
                <CarouselContent className={orientation === 'vertical' ? 'h-64' : ''}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/Carousel Features',
  component: CarouselFeaturesDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    loop: {
        control: 'boolean',
    },
    autoplay: {
        control: 'boolean',
    },
    fade: {
        control: 'boolean',
    }
  }
};

export default meta;

export const AutoplayStory: StoryObj = {
    name: "Autoplay",
    args: {
        orientation: 'horizontal',
        loop: true,
        autoplay: true,
        fade: false,
    }
};

export const InfiniteLoopStory: StoryObj = {
    name: "Infinite Loop",
    args: {
        orientation: 'horizontal',
        loop: true,
        autoplay: false,
        fade: false,
    }
};

export const VerticalStory: StoryObj = {
    name: "Vertical",
    args: {
        orientation: 'vertical',
        loop: false,
        autoplay: false,
        fade: false,
    }
};

export const FadeStory: StoryObj = {
    name: "Fade",
    args: {
        orientation: 'horizontal',
        loop: true,
        autoplay: true,
        fade: true,
    }
};
