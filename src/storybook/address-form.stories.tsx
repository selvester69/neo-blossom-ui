import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { AddressForm } from '../components/ui/address-form';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const AddressFormDemo = () => {
    return (
        <div className="w-[600px] space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                    <AddressForm />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                <CardContent>
                    <AddressForm />
                </CardContent>
            </Card>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/AddressForm',
  component: AddressFormDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
