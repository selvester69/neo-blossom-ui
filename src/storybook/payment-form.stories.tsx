import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { PaymentForm } from '../components/ui/payment-form';
import { PaymentIcons } from '../components/ui/payment-icons';
import { TrustBadge } from '../components/ui/trust-badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const PaymentFormDemo = () => {
    const handleConfirm = (token: string) => {
        alert(`Payment successful! Token: ${token}`);
    };

    return (
        <div className="w-[450px]">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Pay with Card</CardTitle>
                        <PaymentIcons />
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <PaymentForm onConfirm={handleConfirm} />
                    <TrustBadge />
                </CardContent>
            </Card>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/PaymentForm',
  component: PaymentFormDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
