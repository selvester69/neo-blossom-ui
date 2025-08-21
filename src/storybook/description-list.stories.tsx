import type { Meta, StoryObj } from '@storybook/react';
import {
  DescriptionList,
  DescriptionTerm,
  DescriptionDetails,
} from '../components/ui/description-list';

const meta: Meta<typeof DescriptionList> = {
  title: 'UI/DescriptionList',
  component: DescriptionList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

export const Default: Story = {
  render: (args) => (
    <DescriptionList {...args} className="w-full max-w-md">
      <DescriptionTerm>Full name</DescriptionTerm>
      <DescriptionDetails>Margot Foster</DescriptionDetails>
      <DescriptionTerm>Application for</DescriptionTerm>
      <DescriptionDetails>Backend Developer</DescriptionDetails>
      <DescriptionTerm>Email address</DescriptionTerm>
      <DescriptionDetails>margotfoster@example.com</DescriptionDetails>
      <DescriptionTerm>Salary expectation</DescriptionTerm>
      <DescriptionDetails>$120,000</DescriptionDetails>
      <DescriptionTerm>About</DescriptionTerm>
      <DescriptionDetails>
        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
        cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit
        id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
      </DescriptionDetails>
    </DescriptionList>
  ),
};
