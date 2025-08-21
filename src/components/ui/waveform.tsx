import * as React from 'react';
import { useWavesurfer } from '@wavesurfer/react';
import WaveSurfer from 'wavesurfer.js';

export interface WaveformProps {
  url: string;
  onReady?: (ws: WaveSurfer) => void;
  onPlay?: () => void;
  onPause?: () => void;
  onFinish?: () => void;
  onSeek?: (time: number) => void;
  className?: string;
}

export const Waveform = React.forwardRef<HTMLDivElement, WaveformProps>(
  ({ url, onReady, onPlay, onPause, onFinish, onSeek, className }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
      container: containerRef,
      height: 100,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
      url,
      onReady: onReady,
      onPlay: onPlay,
      onPause: onPause,
      onFinish: onFinish,
      onSeek: onSeek,
    });

    React.useImperativeHandle(ref, () => wavesurfer, [wavesurfer]);

    return <div ref={containerRef} className={className} />;
  }
);
Waveform.displayName = 'Waveform';
