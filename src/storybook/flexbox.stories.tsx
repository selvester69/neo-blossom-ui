import type { Meta, StoryObj } from '@storybook/react';
import { FlexBox } from '../components/ui/flexbox';
import { Box } from '../components/ui/layout';

const meta: Meta<typeof FlexBox> = {
  title: 'UI/FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'row-reverse', 'col', 'col-reverse'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FlexBox>;

export const Default: Story = {
  render: (args) => (
    <FlexBox {...args} className="w-full h-64 bg-muted rounded-md p-4">
      <Box className="w-16 h-16">1</Box>
      <Box className="w-16 h-16">2</Box>
      <Box className="w-16 h-16">3</Box>
    </FlexBox>
  ),
  args: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    wrap: 'nowrap',
  },
};
