import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const OrderSuccessPage = () => (
    <div className="w-[600px] space-y-4">
        <Alert variant="success">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Order Confirmed!</AlertTitle>
            <AlertDescription>
                Thank you for your purchase. Your order #12345 has been placed successfully.
            </AlertDescription>
        </Alert>
        <Card>
            <CardHeader><CardTitle>Your Order</CardTitle></CardHeader>
            <CardContent>
                <p>A summary of the order would be displayed here.</p>
            </CardContent>
        </Card>
        <Button>Continue Shopping</Button>
    </div>
);

const OrderErrorPage = () => (
    <div className="w-[600px] space-y-4">
        <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Payment Failed</AlertTitle>
            <AlertDescription>
                We were unable to process your payment. Please try again or use a different payment method.
            </AlertDescription>
        </Alert>
        <Button>Try Again</Button>
    </div>
);


const meta: Meta = {
  title: 'UI/Order Status Pages',
  component: () => (
    <div className="space-y-8">
        <OrderSuccessPage />
        <Separator className="my-8" />
        <OrderErrorPage />
    </div>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
