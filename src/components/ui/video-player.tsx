import * as React from 'react';
import ReactPlayer from 'react-player';
import { cn } from '@/lib/utils';

export interface VideoPlayerProps {
  url: string;
  className?: string;
}

const VideoPlayer = React.forwardRef<ReactPlayer, VideoPlayerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('relative aspect-video', className)}>
        <ReactPlayer
          ref={ref}
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
          {...props}
        />
      </div>
    );
  }
);
VideoPlayer.displayName = 'VideoPlayer';

export { VideoPlayer };
