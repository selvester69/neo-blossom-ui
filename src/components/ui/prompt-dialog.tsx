import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

interface PromptDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  inputLabel: string;
  onConfirm: (value: string) => void;
}

export const PromptDialog = ({
  open,
  onOpenChange,
  title,
  description,
  inputLabel,
  onConfirm,
}: PromptDialogProps) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleConfirm = () => {
    onConfirm(inputValue);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="prompt-input" className="text-right">
              {inputLabel}
            </Label>
            <Input
              id="prompt-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleConfirm}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
