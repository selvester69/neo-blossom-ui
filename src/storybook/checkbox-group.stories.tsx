import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from '../components/ui/checkbox-group';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'UI/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  render: (args) => (
    <CheckboxGroup {...args}>
      <div className="flex items-center space-x-2">
        <Checkbox id="cb1" />
        <Label htmlFor="cb1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="cb2" />
        <Label htmlFor="cb2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="cb3" />
        <Label htmlFor="cb3">Option 3</Label>
      </div>
    </CheckboxGroup>
  ),
  args: {
    label: 'Select your options',
  },
};
