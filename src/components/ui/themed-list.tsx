import * as React from 'react';
import { cn } from '@/lib/utils';
import { List, ListItem } from './typography';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

// ActivityFeed Component
export const ActivityFeed = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => {
  return <List ref={ref} className={cn('space-y-4', className)} {...props} />;
});
ActivityFeed.displayName = 'ActivityFeed';

export const ActivityFeedItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return <ListItem ref={ref} className={cn('flex items-start', className)} {...props} />;
});
ActivityFeedItem.displayName = 'ActivityFeedItem';

// NotificationList Component
export const NotificationList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => {
  return <List ref={ref} className={cn('divide-y', className)} {...props} />;
});
NotificationList.displayName = 'NotificationList';

export const NotificationListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return <ListItem ref={ref} className={cn('p-4 hover:bg-muted', className)} {...props} />;
});
NotificationListItem.displayName = 'NotificationListItem';

// UserList Component
export const UserList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => {
  return <List ref={ref} className={cn('space-y-2', className)} {...props} />;
});
UserList.displayName = 'UserList';

export const UserListItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement> & {
    avatarSrc?: string;
    avatarFallback: string;
    name: string;
    handle: string;
  }
>(({ className, avatarSrc, avatarFallback, name, handle, ...props }, ref) => {
  return (
    <ListItem ref={ref} className={cn('flex items-center space-x-4 p-2', className)} {...props}>
      <Avatar>
        <AvatarImage src={avatarSrc} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{handle}</p>
      </div>
    </ListItem>
  );
});
UserListItem.displayName = 'UserListItem';

export {
  ActivityFeedItem as ActivityItem,
  NotificationListItem as NotificationItem,
  UserListItem as UserItem,
};
