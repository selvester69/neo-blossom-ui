import * as React from 'react';
import ReactPlayer from 'react-player';
import { cn } from '@/lib/utils';

export interface AudioPlayerProps {
  url: string;
  className?: string;
}

const AudioPlayer = React.forwardRef<ReactPlayer, AudioPlayerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn('w-full', className)}>
        <ReactPlayer
          ref={ref}
          width="100%"
          height="50px" // A reasonable default height for an audio player
          {...props}
        />
      </div>
    );
  }
);
AudioPlayer.displayName = 'AudioPlayer';

export { AudioPlayer };
