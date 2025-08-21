import type { Meta, StoryObj } from '@storybook/react';
import {
  ActivityFeed,
  ActivityItem,
  NotificationList,
  NotificationItem,
  UserList,
  UserItem,
} from '../components/ui/themed-list';

const meta: Meta = {
  title: 'UI/ThemedLists',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const ActivityFeedStory: StoryObj<typeof ActivityFeed> = {
  name: 'Activity Feed',
  render: (args) => (
    <ActivityFeed {...args}>
      <ActivityItem>
        <p>
          <strong>John Doe</strong> commented on your post.
        </p>
      </ActivityItem>
      <ActivityItem>
        <p>
          <strong>Jane Smith</strong> liked your photo.
        </p>
      </ActivityItem>
    </ActivityFeed>
  ),
};

export const NotificationListStory: StoryObj<typeof NotificationList> = {
  name: 'Notification List',
  render: (args) => (
    <NotificationList {...args}>
      <NotificationItem>
        <p>You have a new message.</p>
      </NotificationItem>
      <NotificationItem>
        <p>Your subscription is about to expire.</p>
      </NotificationItem>
    </NotificationList>
  ),
};

export const UserListStory: StoryObj<typeof UserList> = {
  name: 'User List',
  render: (args) => (
    <UserList {...args}>
      <UserItem
        avatarSrc="https://github.com/shadcn.png"
        avatarFallback="CN"
        name="shadcn"
        handle="@shadcn"
      />
      <UserItem
        avatarFallback="JD"
        name="John Doe"
        handle="@johndoe"
      />
    </UserList>
  ),
};
