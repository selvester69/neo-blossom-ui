import * as React from 'react';
import { Spotlight } from './spotlight';
import { TourStep } from '@/hooks/use-tour';

interface TourProps {
  steps: TourStep[];
  currentStep: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Tour = ({
  steps,
  currentStep,
  isOpen,
  onClose,
}: TourProps) => {
  const step = steps[currentStep];

  if (!step) {
    return null;
  }

  return (
    <Spotlight
      isVisible={isOpen}
      targetRef={step.targetRef}
      onClose={onClose}
      padding={10}
      radius={8}
    >
      {step.content}
    </Spotlight>
  );
};
