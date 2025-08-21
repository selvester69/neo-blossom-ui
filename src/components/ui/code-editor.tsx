import * as React from "react"
import CodeMirror from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { githubDark } from "@uiw/codemirror-theme-github"

import { cn } from "@/lib/utils"

type CodeEditorProps = React.ComponentProps<typeof CodeMirror>;

const CodeEditor = React.forwardRef<
  HTMLDivElement,
  CodeEditorProps
>(({ className, ...props }, ref) => {

  return (
    <div ref={ref} className={cn("rounded-md border", className)}>
        <CodeMirror
            theme={githubDark}
            extensions={[javascript({ jsx: true })]}
            height="200px"
            {...props}
        />
    </div>
  )
})
CodeEditor.displayName = "CodeEditor"

export { CodeEditor }
