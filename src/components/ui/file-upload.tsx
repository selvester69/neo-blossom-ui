import * as React from "react"
import { UploadCloud, File as FileIcon, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  onFilesChange: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
}

const FileUpload = React.forwardRef<
  HTMLDivElement,
  FileUploadProps
>(({ className, onFilesChange, multiple = false, accept, ...props }, ref) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      setFiles(multiple ? [...files, ...newFiles] : newFiles);
      onFilesChange(multiple ? [...files, ...newFiles] : newFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFilesChange(newFiles);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
        const newFiles = Array.from(event.dataTransfer.files);
        setFiles(multiple ? [...files, ...newFiles] : newFiles);
        onFilesChange(multiple ? [...files, ...newFiles] : newFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div ref={ref} className={cn("space-y-4", className)} {...props}>
      <div
        className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-lg cursor-pointer border-muted-foreground/50 hover:bg-muted/50"
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <UploadCloud className="w-12 h-12 text-muted-foreground" />
        <p className="mt-4 text-sm text-muted-foreground">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium">Selected Files:</h4>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between p-2 border rounded-lg">
                <div className="flex items-center gap-2">
                    <FileIcon className="w-6 h-6 text-muted-foreground" />
                    <span className="text-sm">{file.name}</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleRemoveFile(index)}>
                    <X className="w-4 h-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
})
FileUpload.displayName = "FileUpload"

export { FileUpload }
