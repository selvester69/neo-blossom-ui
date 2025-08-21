import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from '../components/ui/video-player';
import {
  PlayPauseButton,
  VolumeControl,
  SeekBar,
} from '../components/ui/video-controls';
import ReactPlayer from 'react-player';

const meta: Meta<typeof VideoPlayer> = {
  title: 'UI/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
  render: (args) => {
    const playerRef = React.useRef<ReactPlayer>(null);
    const [playing, setPlaying] = React.useState(false);
    const [volume, setVolume] = React.useState(0.5);
    const [played, setPlayed] = React.useState(0);

    const handlePlayPause = () => {
      setPlaying(!playing);
    };

    const handleVolumeChange = (newVolume: number) => {
      setVolume(newVolume);
    };

    const handleSeek = (newPlayed: number) => {
      setPlayed(newPlayed);
      playerRef.current?.seekTo(newPlayed);
    };

    const handleProgress = (progress: {
      played: number;
      playedSeconds: number;
      loaded: number;
      loadedSeconds: number;
    }) => {
      setPlayed(progress.played);
    };

    return (
      <div className="w-full max-w-2xl">
        <VideoPlayer
          {...args}
          ref={playerRef}
          playing={playing}
          volume={volume}
          onProgress={handleProgress}
        />
        <div className="flex items-center gap-4 mt-4 p-2 bg-muted rounded-md">
          <PlayPauseButton playing={playing} onClick={handlePlayPause} />
          <SeekBar played={played} onSeek={handleSeek} />
          <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
      </div>
    );
  },
  args: {
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
};
