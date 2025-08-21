import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { FileUpload } from '../components/ui/file-upload';

const FileUploadDemo = () => {
    const [files, setFiles] = React.useState<File[]>([]);

    return (
        <div className="w-96">
            <FileUpload
                onFilesChange={setFiles}
                multiple
            />
            <div className="mt-4">
                <h4 className="font-medium">Files passed to parent:</h4>
                <ul className="list-disc list-inside">
                    {files.map((file, index) => (
                        <li key={index} className="text-sm">{file.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/FileUpload',
  component: FileUploadDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
