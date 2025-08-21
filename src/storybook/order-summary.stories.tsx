import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import {
    OrderSummary,
    OrderItems,
    OrderItem,
    OrderTotal,
    OrderDiscount,
    OrderTax,
    OrderShipping,
    PromoCode
} from '../components/ui/order-summary';
import { CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

const OrderSummaryDemo = () => {
    return (
        <div className="w-[400px]">
            <OrderSummary>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <OrderItems>
                        <OrderItem name="Neon T-Shirt" price="$25.00" quantity={1} imageSrc="https://picsum.photos/id/21/200/200" />
                        <OrderItem name="Cyberpunk Cap" price="$15.00" quantity={2} imageSrc="https://picsum.photos/id/22/200/200" />
                    </OrderItems>
                    <Separator />
                    <div className="space-y-2">
                        <OrderShipping value="$5.00" />
                        <OrderTax value="$2.50" />
                        <OrderDiscount value="-$5.00" />
                    </div>
                    <Separator />
                    <OrderTotal value="$62.50" />
                </CardContent>
                <CardFooter>
                    <PromoCode />
                </CardFooter>
            </OrderSummary>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/OrderSummary',
  component: OrderSummaryDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
