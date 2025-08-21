import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardImage src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="A beautiful landscape" />
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>This is a card with an image.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the content of the card. You can put any content you want
          here.
        </p>
      </CardContent>
      <CardActions>
        <Button variant="outline">Share</Button>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  ),
};
