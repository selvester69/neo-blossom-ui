import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { ImageGallery } from '../components/ui/image-gallery';

const images = Array.from({ length: 8 }, (_, i) => `https://picsum.photos/id/${i + 10}/800/600`);

const ImageGalleryDemo = () => {
    return (
        <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-4">My Awesome Gallery</h2>
            <ImageGallery images={images} />
        </div>
    );
}

const meta: Meta = {
  title: 'UI/ImageGallery',
  component: ImageGalleryDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {};
