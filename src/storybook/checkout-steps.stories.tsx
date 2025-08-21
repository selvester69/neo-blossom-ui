import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { CheckoutSteps } from '../components/ui/checkout-steps';
import { Button } from '../components/ui/button';

const CheckoutStepsDemo = () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    const handleNext = () => {
        setCurrentStep((prev) => (prev < 3 ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="w-[700px] flex flex-col items-center gap-8">
            <CheckoutSteps currentStep={currentStep} />
            <div className="flex gap-2">
                <Button onClick={handlePrev} disabled={currentStep === 0}>Previous</Button>
                <Button onClick={handleNext} disabled={currentStep >= 2}>Next</Button>
            </div>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/CheckoutSteps',
  component: CheckoutStepsDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
