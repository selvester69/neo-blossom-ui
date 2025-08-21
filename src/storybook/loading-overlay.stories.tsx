import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { LoadingOverlay } from '../components/ui/loading-overlay';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const LoadingOverlayDemo = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
        <div className="w-96">
            <Button onClick={() => setIsLoading(p => !p)} className="mb-4">
                Toggle Loading
            </Button>
            <LoadingOverlay isLoading={isLoading}>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>This is the content of the card. When the loading overlay is active, you cannot interact with this content.</p>
                    </CardContent>
                </Card>
            </LoadingOverlay>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/LoadingOverlay',
  component: LoadingOverlayDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
