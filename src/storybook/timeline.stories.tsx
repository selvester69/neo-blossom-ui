import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from '../components/ui/timeline';
import { Check } from 'lucide-react';

const meta: Meta<typeof Timeline> = {
  title: 'UI/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: (args) => (
    <Timeline {...args} className="w-full max-w-md">
      <TimelineItem>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Application UI code in Tailwind CSS
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Released on January 13th, 2022
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Get started with dozens of web components and interactive elements.
        </p>
      </TimelineItem>
      <TimelineItem icon={<Check />}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Marketing UI design in Figma
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Released on December 7th, 2021
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          All of the pages and components are first designed in Figma and we keep
          a parity between the two versions even as we update the project.
        </p>
      </TimelineItem>
    </Timeline>
  ),
};
