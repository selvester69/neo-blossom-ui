import type { Meta, StoryObj } from '@storybook/react';
import { SortableList } from '../components/ui/sortable-list';
import React from 'react';

const meta: Meta<typeof SortableList> = {
  title: 'UI/SortableList',
  component: SortableList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SortableList>;

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

export const Default: Story = {
  render: (args) => {
    const [items, setItems] = React.useState(initialItems);
    return (
      <SortableList
        {...args}
        data={items}
        onSort={setItems}
        renderItem={(item) => <div>{item}</div>}
        className="w-full max-w-md"
      />
    );
  },
};
