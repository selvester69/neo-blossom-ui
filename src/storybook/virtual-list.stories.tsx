import type { Meta, StoryObj } from '@storybook/react';
import { VirtualList } from '../components/ui/virtual-list';

const meta: Meta<typeof VirtualList> = {
  title: 'UI/VirtualList',
  component: VirtualList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VirtualList>;

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

export const Default: Story = {
  render: (args) => (
    <VirtualList
      {...args}
      data={items}
      renderItem={(item) => <div className="p-2 border-b">{item}</div>}
      estimateSize={() => 35}
      className="border rounded-md"
    />
  ),
};
