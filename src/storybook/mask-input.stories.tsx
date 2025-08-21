import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { MaskInput } from '../components/ui/mask-input';
import { FormGroup } from '../components/ui/form-group';
import { Label } from '../components/ui/label';

const MaskInputDemo = () => {
    return (
        <div className="w-96 space-y-8">
            <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <MaskInput
                    id="phone"
                    mask="+1 (___) ___-____"
                    replacement={{ _: /\d/ }}
                    placeholder="+1 (555) 555-5555"
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="date">Date</Label>
                <MaskInput
                    id="date"
                    mask="mm/dd/yyyy"
                    replacement={{ m: /\d/, d: /\d/, y: /\d/ }}
                    placeholder="MM/DD/YYYY"
                    showMask
                    separate
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="card">Credit Card</Label>
                <MaskInput
                    id="card"
                    mask="____-____-____-____"
                    replacement={{ _: /\d/ }}
                    placeholder="0000-0000-0000-0000"
                />
            </FormGroup>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/MaskInput',
  component: MaskInputDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
