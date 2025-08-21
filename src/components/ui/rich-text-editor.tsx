import * as React from "react"
import { useEditor, EditorContent, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { cn } from "@/lib/utils"
import { Toggle } from "./toggle"
import { Bold, Italic, Strikethrough, List, ListOrdered, Heading2 } from "lucide-react"

const RichTextEditorToolbar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
      return null
    }

    return (
      <div className="border border-input rounded-md p-1 flex items-center gap-1">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
            size="sm"
            pressed={editor.isActive('strike')}
            onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        >
            <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('heading', { level: 2 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
            <Heading2 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('bulletList')}
          onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        >
            <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive('orderedList')}
          onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        >
            <ListOrdered className="h-4 w-4" />
        </Toggle>
      </div>
    )
  }


interface RichTextEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  onContentChange: (content: string) => void;
}

const RichTextEditor = React.forwardRef<
  HTMLDivElement,
  RichTextEditorProps
>(({ className, content, onContentChange, ...props }, ref) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        onUpdate: ({ editor }) => {
            onContentChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
              class: 'prose dark:prose-invert min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            },
          },
    });

  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      <RichTextEditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
})
RichTextEditor.displayName = "RichTextEditor"

export { RichTextEditor }
