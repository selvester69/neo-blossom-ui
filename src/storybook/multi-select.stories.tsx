import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { MultiSelect, MultiSelectOption } from '../components/ui/multi-select';

const options: MultiSelectOption[] = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'angular', label: 'Angular' },
    { value: 'solid', label: 'Solid' },
    { value: 'qwik', label: 'Qwik' },
];

const MultiSelectDemo = () => {
    const [selected, setSelected] = React.useState<string[]>(['react', 'svelte']);

    return (
        <div className="w-96">
            <MultiSelect
                options={options}
                selected={selected}
                onChange={setSelected}
                placeholder="Select frameworks..."
            />
        </div>
    );
}

const meta: Meta = {
  title: 'UI/MultiSelect',
  component: MultiSelectDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {};
