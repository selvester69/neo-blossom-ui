import * as React from "react"
import { useMask, type MaskOptions } from "@react-input/mask"
import { Input, type InputProps } from "./input"

export type MaskInputProps = InputProps & MaskOptions;

const MaskInput = React.forwardRef<
  HTMLInputElement,
  MaskInputProps
>(({ mask, replacement, showMask, separate, ...props }, ref) => {
  const inputRef = useMask({ mask, replacement, showMask, separate });

  const combinedRef = React.useCallback(
    (node: HTMLInputElement) => {
      // Set the hook's ref
      (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = node

      // Set the forwarded ref
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    },
    [inputRef, ref]
  )

  return <Input {...props} ref={combinedRef} />
})
MaskInput.displayName = "MaskInput"

export { MaskInput }
