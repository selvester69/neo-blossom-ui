import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Heading,
  Text,
  Code,
  Link,
  Blockquote,
  List,
  ListItem,
} from '../components/ui/typography';

const meta: Meta = {
  title: 'UI/Typography',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="p-8 space-y-4">
      <Heading level={1}>The Joke Tax</Heading>
      <Text>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </Text>
      <Heading level={2}>The King's Plan</Heading>
      <Text>
        The king thought for a moment and then declared, "I have a brilliant
        idea! We will tax the jokes."
      </Text>
      <Blockquote>
        "From this day forward," the king announced, "anyone who tells a joke
        must pay a tax of one gold coin."
      </Blockquote>
      <Heading level={3}>The People's Reaction</Heading>
      <List>
        <ListItem>The people were not amused.</ListItem>
        <ListItem>They grumbled and complained, but the king would not budge.</ListItem>
        <ListItem>
          The tax was implemented, and the kingdom's coffers began to fill.
        </ListItem>
      </List>
      <Text>
        You can read the full story{' '}
        <Link href="#">here</Link>.
      </Text>
      <Code>
        {`
          const king = new King({ lazy: true });
          king.on('problem', () => {
            king.tax('jokes');
          });
        `}
      </Code>
    </div>
  ),
};
