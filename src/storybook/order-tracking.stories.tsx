import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Stepper } from '../components/ui/stepper';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const trackingSteps = [
    { title: "Order Placed", description: "June 1, 2025" },
    { title: "Processing", description: "June 1, 2025" },
    { title: "Shipped", description: "June 2, 2025" },
    { title: "Out for Delivery", description: "June 3, 2025" },
    { title: "Delivered" },
];

const OrderTrackingDemo = () => {
    const [currentStep, setCurrentStep] = React.useState(3);

    return (
        <div className="w-[800px]">
            <Card>
                <CardHeader>
                    <CardTitle>Track Your Order</CardTitle>
                    <p className="text-sm text-muted-foreground">Tracking #12345XYZ</p>
                </CardHeader>
                <CardContent>
                    <Stepper steps={trackingSteps} currentStep={currentStep} />
                </CardContent>
            </Card>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/OrderTracking',
  component: OrderTrackingDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
