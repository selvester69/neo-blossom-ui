import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { ErrorBoundary } from '../components/ui/error-boundary';
import { Button } from '../components/ui/button';

// A component that throws an error when a button is clicked
const ProblemChild = () => {
    const [shouldThrow, setShouldThrow] = React.useState(false);

    if (shouldThrow) {
        throw new Error('💥 Kaboom!');
    }

    return (
        <div className="p-4 border rounded-lg">
            <p className="mb-4">This is a child component. Click the button to throw an error.</p>
            <Button onClick={() => setShouldThrow(true)} variant="destructive">
                Throw Error
            </Button>
        </div>
    );
};

// A story that demonstrates the ErrorBoundary
const ErrorBoundaryDemo = () => {
    // A key is used to reset the state of the ErrorBoundary
    const [key, setKey] = React.useState(0);

    return (
        <div className="w-96">
            <p className="mb-4">The ErrorBoundary will catch errors from its children and display a fallback UI.</p>
            <Button onClick={() => setKey(k => k + 1)} className="mb-4">
                Reset Boundary
            </Button>
            <ErrorBoundary key={key}>
                <ProblemChild />
            </ErrorBoundary>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/ErrorBoundary',
  component: ErrorBoundaryDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
