import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'text', 'password', 'email', 'number', 'tel', 'url', 'search',
        'date', 'time', 'datetime-local', 'month', 'week', 'color'
      ],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'neon', 'cyber', 'matrix', 'glass', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
    },
    disabled: {
        control: 'boolean',
    }
  },
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={args.type}>{args.type?.toUpperCase()}</Label>
      <Input {...args} id={args.type} placeholder={args.type?.toUpperCase()} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Input>;

// Story for the default/text input
export const Default: Story = {
  args: {
    type: 'text',
  },
};

// Story to showcase different types
export const Types: Story = {
    render: (args) => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="text">Text</Label>
                <Input {...args} id="text" type="text" placeholder="Text" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input {...args} id="password" type="password" placeholder="Password" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input {...args} id="email" type="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="number">Number</Label>
                <Input {...args} id="number" type="number" placeholder="Number" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="search">Search</Label>
                <Input {...args} id="search" type="search" placeholder="Search" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="date">Date</Label>
                <Input {...args} id="date" type="date" />
            </div>
             <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="color">Color</Label>
                <Input {...args} id="color" type="color" className='w-24 h-12'/>
            </div>
        </div>
    )
}

// Story to showcase different visual variants
export const Variants: Story = {
    render: (args) => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
            <Input {...args} variant="default" placeholder="Default" />
            <Input {...args} variant="neon" placeholder="Neon" />
            <Input {...args} variant="cyber" placeholder="Cyber" />
            <Input {...args} variant="matrix" placeholder="Matrix" />
            <Input {...args} variant="glass" placeholder="Glass" />
            <Input {...args} variant="outline" placeholder="Outline" />
        </div>
    )
};

// Story to showcase different states
export const States: Story = {
    render: (args) => (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <Input {...args} state="default" placeholder="Default" />
            <Input {...args} state="success" placeholder="Success" />
            <Input {...args} state="warning" placeholder="Warning" />
            <Input {...args} state="error" placeholder="Error" />
        </div>
    )
};

export const Disabled: Story = {
    args: {
      disabled: true,
      placeholder: "Disabled"
    },
  };
