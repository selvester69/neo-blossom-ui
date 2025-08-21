import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionVariantsDemo = () => {
    return (
        <div className="w-[600px] space-y-8">
            <div>
                <h3 className="font-bold mb-2">Default (Multiple Open)</h3>
                <Accordion type="multiple">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Item 1</AccordionTrigger>
                        <AccordionContent>Content for item 1.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Item 2</AccordionTrigger>
                        <AccordionContent>Content for item 2.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div>
                <h3 className="font-bold mb-2">Single Open</h3>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Item 1</AccordionTrigger>
                        <AccordionContent>Content for item 1.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Item 2</AccordionTrigger>
                        <AccordionContent>Content for item 2.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div>
                <h3 className="font-bold mb-2">Nested Accordion</h3>
                <Accordion type="multiple">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Outer Item 1</AccordionTrigger>
                        <AccordionContent>
                            <Accordion type="single" collapsible className="ml-4 mt-2">
                                <AccordionItem value="nested-item-1">
                                    <AccordionTrigger>Nested Item 1.1</AccordionTrigger>
                                    <AccordionContent>Content for nested item 1.1</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="nested-item-2">
                                    <AccordionTrigger>Nested Item 1.2</AccordionTrigger>
                                    <AccordionContent>Content for nested item 1.2</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/Accordion Variants',
  component: AccordionVariantsDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
