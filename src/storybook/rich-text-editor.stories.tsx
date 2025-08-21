import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { RichTextEditor } from '../components/ui/rich-text-editor';

const RichTextEditorDemo = () => {
    const [content, setContent] = React.useState(
        '<h2>Hello World!</h2><p>This is a basic Tiptap editor.</p>'
    );

    return (
        <div className="w-[700px]">
            <RichTextEditor content={content} onContentChange={setContent} />
            <div className="mt-4 p-4 border rounded-lg bg-muted">
                <h3 className="font-bold mb-2">HTML Output:</h3>
                <pre className="text-xs whitespace-pre-wrap">{content}</pre>
            </div>
        </div>
    );
}

const meta: Meta = {
  title: 'UI/RichTextEditor',
  component: RichTextEditorDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
