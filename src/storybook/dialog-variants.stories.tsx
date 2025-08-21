import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '@/components/ui/button';

const DialogVariantsDemo = () => {
    return (
        <div className="flex gap-4">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Confirm Action</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Drawer direction="right">
                <DrawerTrigger asChild>
                    <Button variant="outline">Open Side Sheet</Button>
                </DrawerTrigger>
                <DrawerContent className="h-full top-0 right-0 left-auto mt-0 w-96 rounded-none">
                    <DrawerHeader>
                        <DrawerTitle>Side Sheet</DrawerTitle>
                        <DrawerDescription>This is a dialog that slides in from the side.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                        <p>This is the content of the side sheet.</p>
                    </div>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/Dialog Variants',
  component: DialogVariantsDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
