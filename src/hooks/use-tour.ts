import * as React from 'react';

export interface TourStep {
  targetRef: React.RefObject<HTMLElement>;
  content: React.ReactNode;
}

interface UseTourProps {
  steps: TourStep[];
}

export const useTour = ({ steps }: UseTourProps) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsOpen(false); // End of tour
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const start = () => {
    setCurrentStep(0);
    setIsOpen(true);
  };

  const stop = () => {
    setIsOpen(false);
  };

  return {
    currentStep,
    steps,
    isOpen,
    nextStep,
    prevStep,
    start,
    stop,
    step: steps[currentStep],
    setCurrentStep,
    setIsOpen,
  };
};
