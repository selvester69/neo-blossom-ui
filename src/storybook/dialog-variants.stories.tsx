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
import { PromptDialog } from '@/components/ui/prompt-dialog';

const DialogVariantsDemo = () => {
    const [promptOpen, setPromptOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <div className="flex flex-wrap gap-4">
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

            <Button variant="outline" onClick={() => setPromptOpen(true)}>Prompt</Button>
            <PromptDialog
                open={promptOpen}
                onOpenChange={setPromptOpen}
                title="What is your name?"
                description="This will be displayed on your public profile."
                inputLabel="Name"
                onConfirm={(value) => alert(`Your name is: ${value}`)}
            />

            <Button variant="outline" onClick={() => setDrawerOpen(true)}>Persistent Drawer</Button>
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} modal={false}>
                <DrawerContent className="h-48">
                    <DrawerHeader>
                        <DrawerTitle>Persistent Drawer</DrawerTitle>
                        <DrawerDescription>This drawer does not block interaction with the rest of the page.</DrawerDescription>
                    </DrawerHeader>
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
