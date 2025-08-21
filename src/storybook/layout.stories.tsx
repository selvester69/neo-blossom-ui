import type { Meta, StoryObj } from '@storybook/react';
import {
  Article,
  Aside,
  Box,
  Center,
  Cluster,
  Cover,
  Divider,
  Footer,
  Frame,
  Gap,
  GridArea,
  Header,
  Imposter,
  Main,
  Margin,
  Nav,
  Padding,
  Reel,
  Section,
  Switcher,
  Wrapper,
} from '../components/ui/layout';
import { FlexBox } from '../components/ui/flexbox';

const meta: Meta = {
  title: 'UI/Layout',
  component: Wrapper,
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

export const AllLayouts: Story = {
  render: (args) => (
    <Wrapper {...args} className="p-8 space-y-4">
      <Article>
        <h2 className="text-xl font-bold">Article</h2>
        <p>This is an article.</p>
      </Article>
      <Aside>
        <h3 className="text-lg font-bold">Aside</h3>
        <p>This is an aside.</p>
      </Aside>
      <Box>
        <h3 className="text-lg font-bold">Box</h3>
        <p>This is a box.</p>
      </Box>
      <Cluster>
        <Box>Cluster Item 1</Box>
        <Box>Cluster Item 2</Box>
        <Box>Cluster Item 3</Box>
      </Cluster>
      <Center>
        <Box>Centered Item</Box>
      </Center>
      <Divider />
      <FlexBox>
        <Box>Flex Item 1</Box>
        <Box>Flex Item 2</Box>
      </FlexBox>
    </Wrapper>
  ),
};
