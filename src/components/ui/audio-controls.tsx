import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Slider } from './slider';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export interface PlayPauseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  playing: boolean;
}

export const AudioPlayPauseButton = React.forwardRef<
  HTMLButtonElement,
  PlayPauseButtonProps
>(({ className, playing, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn(className)}
      {...props}
    >
      {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
    </Button>
  );
});
AudioPlayPauseButton.displayName = 'AudioPlayPauseButton';

export interface VolumeControlProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
  className?: string;
}

export const AudioVolumeControl = React.forwardRef<
  HTMLDivElement,
  VolumeControlProps
>(({ className, volume, onVolumeChange }, ref) => {
  const isMuted = volume === 0;
  return (
    <div ref={ref} className={cn('flex items-center gap-2', className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onVolumeChange(isMuted ? 0.5 : 0)}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6" />
        )}
      </Button>
      <Slider
        min={0}
        max={1}
        step={0.05}
        value={[volume]}
        onValueChange={(value) => onVolumeChange(value[0])}
        className="w-24"
      />
    </div>
  );
});
AudioVolumeControl.displayName = 'AudioVolumeControl';

export interface SeekBarProps {
  played: number;
  onSeek: (played: number) => void;
  className?: string;
}

export const AudioSeekBar = React.forwardRef<HTMLDivElement, SeekBarProps>(
  ({ className, played, onSeek }, ref) => {
    return (
      <div ref={ref} className={cn('w-full', className)}>
        <Slider
          min={0}
          max={1}
          step={0.01}
          value={[played]}
          onValueChange={(value) => onSeek(value[0])}
        />
      </div>
    );
  }
);
AudioSeekBar.displayName = 'AudioSeekBar';
