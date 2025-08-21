import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, Row, Col, Spacer, Stack } from '../components/ui/grid';

const meta: Meta = {
  title: 'UI/Grid',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container {...args} size="lg">
      <Stack spacing="lg" className="py-8">
        <h1 className="text-4xl font-bold">Grid System</h1>
        <p className="text-muted-foreground">
          A responsive grid system with containers, rows, and columns.
        </p>
        <Spacer size="lg" />
        <Row>
          <Col span={{ xs: 12, md: 6, lg: 4 }}>
            <div className="bg-muted p-4 rounded-lg text-center">Column 1</div>
          </Col>
          <Col span={{ xs: 12, md: 6, lg: 4 }}>
            <div className="bg-muted p-4 rounded-lg text-center">Column 2</div>
          </Col>
          <Col span={{ xs: 12, md: 6, lg: 4 }}>
            <div className="bg-muted p-4 rounded-lg text-center">Column 3</div>
          </Col>
        </Row>
        <Spacer />
        <Row>
          <Col span={4}>
            <div className="bg-muted p-4 rounded-lg text-center">Column A</div>
          </Col>
          <Col span={8}>
            <div className="bg-muted p-4 rounded-lg text-center">Column B</div>
          </Col>
        </Row>
      </Stack>
    </Container>
  ),
};
