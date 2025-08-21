import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { MasonryGallery } from '../components/ui/masonry-gallery';

const images = [
    { src: 'https://picsum.photos/id/10/400/600', alt: 'Image 1' },
    { src: 'https://picsum.photos/id/11/400/400', alt: 'Image 2' },
    { src: 'https://picsum.photos/id/12/400/700', alt: 'Image 3' },
    { src: 'https://picsum.photos/id/13/400/500', alt: 'Image 4' },
    { src: 'https://picsum.photos/id/14/400/800', alt: 'Image 5' },
    { src: 'https://picsum.photos/id/15/400/450', alt: 'Image 6' },
];

const MasonryGalleryDemo = () => {
    return (
        <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-4">Masonry Gallery</h2>
            <MasonryGallery images={images} />
        </div>
    );
}

const meta: Meta = {
  title: 'UI/MasonryGallery',
  component: MasonryGalleryDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {};
