import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { CodeEditor } from '../components/ui/code-editor';

const CodeEditorDemo = () => {
    const [code, setCode] = React.useState("console.log('hello, world!');");

    return (
        <div className="w-[700px]">
            <CodeEditor value={code} onChange={setCode} />
        </div>
    );
}

const meta: Meta = {
  title: 'UI/CodeEditor',
  component: CodeEditorDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
