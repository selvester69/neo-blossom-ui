import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/ui/header';
import { Footer } from '../components/ui/footer';
import { Main } from '../components/ui/main';
import { Nav } from '../components/ui/nav';
import { Section } from '../components/ui/section';

const meta: Meta = {
  title: 'UI/Layout',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLayout: Story = {
  render: (args) => (
    <div className="flex flex-col min-h-screen">
      <Header>
        <Nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Nav>
      </Header>
      <Main className="flex-grow">
        <Section>
          <h1 className="text-2xl font-bold">Page Title</h1>
          <p>This is the main content of the page.</p>
        </Section>
      </Main>
      <Footer>
        <p>© 2024 My Company</p>
      </Footer>
    </div>
  ),
};
