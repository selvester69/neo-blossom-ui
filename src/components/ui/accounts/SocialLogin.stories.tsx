import type { Meta } from '@storybook/react';
import {
  GoogleLogin,
  FacebookLogin,
  TwitterLogin,
  GitHubLogin,
  AppleLogin,
  MicrosoftLogin,
  LinkedInLogin
} from './SocialLogin';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Accounts/SocialLogins',
  decorators: [
    (Story) => (
      <div className="w-64 space-y-2">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const AllButtons = () => (
  <>
    <GoogleLogin onClick={action('GoogleLogin clicked')} />
    <FacebookLogin onClick={action('FacebookLogin clicked')} />
    <TwitterLogin onClick={action('TwitterLogin clicked')} />
    <GitHubLogin onClick={action('GitHubLogin clicked')} />
    <AppleLogin onClick={action('AppleLogin clicked')} />
    <MicrosoftLogin onClick={action('MicrosoftLogin clicked')} />
    <LinkedInLogin onClick={action('LinkedInLogin clicked')} />
  </>
);
