import type { Meta, StoryObj } from '@storybook/react';
import {
  Navbar,
  NavbarActions,
  NavbarLinks,
  NavbarLogo,
} from '../components/ui/navbar';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Navbar> = {
  title: 'UI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <NavbarLogo>
        <a href="#" className="text-xl font-bold">
          Logo
        </a>
      </NavbarLogo>
      <NavbarLinks>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </NavbarLinks>
      <NavbarActions>
        <Button variant="outline">Log in</Button>
        <Button>Sign up</Button>
      </NavbarActions>
    </Navbar>
  ),
};
