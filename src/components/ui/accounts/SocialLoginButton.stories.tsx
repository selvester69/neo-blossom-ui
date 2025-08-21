import type { Meta, StoryObj } from '@storybook/react';
import { SocialLoginButton } from './SocialLoginButton';
import { action } from '@storybook/addon-actions';
import { Github, Twitter } from 'lucide-react';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'Accounts/SocialLoginButton',
  component: SocialLoginButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SocialLoginButton>;

export const GitHub: Story = {
  args: {
    providerName: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    onClick: action('onClick'),
  },
};

export const TwitterLogin: Story = {
    args: {
      providerName: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      onClick: action('onClick'),
    },
};
