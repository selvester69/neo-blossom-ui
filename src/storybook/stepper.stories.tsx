import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Stepper } from '../components/ui/stepper';
import { Button } from '../components/ui/button';

const steps = [
    { title: 'Step 1', description: 'Create Account' },
    { title: 'Step 2', description: 'Verify Email' },
    { title: 'Step 3', description: 'Add Profile Info' },
    { title: 'Step 4', description: 'Done!' },
];

const StepperDemo = () => {
    const [currentStep, setCurrentStep] = React.useState(1);

    const handleNext = () => {
        setCurrentStep((prev) => (prev < steps.length ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    };

    return (
        <div className="w-[700px] flex flex-col items-center gap-8">
            <Stepper steps={steps} currentStep={currentStep} />
            <div className="flex gap-2">
                <Button onClick={handlePrev} disabled={currentStep === 0}>Previous</Button>
                <Button onClick={handleNext} disabled={currentStep > steps.length -1}>Next</Button>
            </div>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/Stepper',
  component: StepperDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
