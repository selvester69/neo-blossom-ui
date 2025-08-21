import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '../components/ui/context-menu';

const meta: Meta<typeof ContextMenu> = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back
        </ContextMenuItem>
        <ContextMenuItem disabled>
          Forward
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
        </ContextMenuItem>
        <ContextMenuItem>
          Save as...
        </ContextMenuItem>
        <ContextMenuItem>
          Print...
        </ContextMenuItem>
        <ContextMenuItem>
          Cast...
        </ContextMenuItem>
        <ContextMenuItem>
          Translate to English
        </ContextMenuItem>
        <ContextMenuItem>
          View page source
        </ContextMenuItem>
        <ContextMenuItem>
          Inspect
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};
